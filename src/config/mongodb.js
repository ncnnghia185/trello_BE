import { env } from '../config/environment.js'
import { MongoClient, ServerApiVersion } from 'mongodb'
// Khởi tạo đối tượng trelloDBInstance(ban đầu là null vì chưa connect)
let trelloDBInstance = null
// Khởi tạo đối tượng mongoClientInstance để kết nối tới MongoDB
const mongoClientInstance = new MongoClient( env.MONGODB_URI, {
	serverApi : {
		version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
	}
} )

export const CONNECT_DB = async () =>{
	// Gọi kết nối tới MongoDB Atlas với URI đã khai báo trong thân của mongoClientInstance
	await mongoClientInstance.connect()
	// Kết nối thành công thì lấy ra Database theo tên và gán ngưọc nó lại vào biến trelloDBInstance
	trelloDBInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

// GET_DB có nhiệm vụ export ra trelloDBInstance sau khi đã connect thành công tới MongoDb để có thể sử dụng lại nhiều nơi trong Code
export const GET_DB = () =>{
	if (!trelloDBInstance) throw new Error("Hãy kết nối tới Database trước !")
	return trelloDBInstance
}

export const CLOSE_DB = async () =>{
	await mongoClientInstance.close()
}