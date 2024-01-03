import Joi from 'joi'
import { StatusCodes} from 'http-status-codes'
import ApiError from '../utils/APIerror.js'

const createNew = async (req, res, next) => {
	const correctCondition = Joi.object({
		title : Joi.string().required().min(3).max(50).trim().strict(),
		description : Joi.string().required().min(3).max(250).trim().strict()
	})
	try {
		// Chỉ định abortEarly : false để trường hợp có nhiều lỗi validation thì trả về tất cả lỗi
		await correctCondition.validateAsync(req.body, {abortEarly:false})
		next()
		
	} catch (error) {
		next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
	}
	
}

export const boardValidation = {
	createNew
}