import { StatusCodes} from 'http-status-codes'

const createNew = async (req, res, next) => {

	try {
		res.status(StatusCodes.CREATED).json({ message : 'Note from Controller: API create new board'})
	} catch (error) {
		console.log(error)
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors : new Error(error).message
		})
	}
}

export const boardController = {
	createNew
}