import express from 'express'

const app = express()
const PORT = 8018

app.get('/', function (req, res){

})

app.listen(PORT, () => {
	console.log('Server listening on port'+ PORT)
}
)