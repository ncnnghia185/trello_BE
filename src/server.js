import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '../src/config/mongodb.js'
import { env } from '../src/config/environment.js'
import { APIs_V1 } from '../src/routes/v1/index.js'

const START_SERVER = () =>{
	const app = express()
	const PORT = env.PORT
	
	app.use('/v1', APIs_V1)
	app.listen(PORT, () => {
		console.log('Server listening on port'+ PORT)
	}
	)
	exitHook(() =>{
		CLOSE_DB()
	})
}

CONNECT_DB()
	.then(() => console.log('Kết nối tới MongoDB Atlas'))
	.then(() => START_SERVER())
	.catch(error => {
		console.error(error)
		process.exit(0)
	})