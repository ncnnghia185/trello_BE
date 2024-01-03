import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/APIerror.js'

const createNew = async (req, res, next) => {
	try {
		// Chỉ định abortEarly : false để trường hợp có nhiều lỗi validation thì trả về tất cả lỗi
		res.status(StatusCodes.CREATED).json( {message : "POST from Controller : API create new board"})
		
	} catch (error) {
		next(error)
	}
	
}

export const boardController = {
	createNew
}