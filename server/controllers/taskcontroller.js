const { Task } = require('../models')
const { User } = require('../models')
class TaskController {

	static async addTask(req, res, next) {
		const UserId = req.loggedInUser.id
		try {
			const payLoad = {
				title: req.body.title,
				description: req.body.description,
				UserId
			}
			const addTask = await Task.create(payLoad)
			res.status(200).json(addTask)
		} catch (err) {
			next(err)
		}
	}

	static async showTasks(req, res, next) {
		const UserId = req.loggedInUser
		try {
			const showTasks = await Task.findAll({
				include: User,
				order: [['createdAt', 'ASC']]
			})
			res.status(200).json(showTasks)
		} catch (err) {
			next(err)
		}
	}
}

module.exports = TaskController