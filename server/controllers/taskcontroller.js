const { Task } = require('../models')
const { User } = require('../models')
class TaskController {

	static async addTask(req, res, next) {
		const UserId = req.loggedInUser.id
		try {
			const payLoad = {
				title: req.body.title,
				description: req.body.description,
				category: req.body.category,
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

	static async showOne(req, res, next) {
		const id = req.params.id
		try {
			const show = await Task.findByPk(id, {
				include: User
			})
			res.status(200).json(show)
		} catch (err) {
			next(err)
		}
	}

	static async destroy(req, res, next) {
			try {
				const id = +req.params.id
				const UserId = req.loggedInUser.id
				const destroy = await Task.destroy({
						where: {
								id,
								UserId
						}
				})
				if (destroy) {
						res.status(200).json({ message: 'Task success to delete' })
				} else {
						res.status(404).json({ error: 'todo not found' })
				}
		} catch (error) {
				next(error)
		}
	}

	static async editTask(req, res, next) {
		try {
			const id = +req.params.id
			const payLoad = {
				title: req.body.title,
				description: req.body.description
			}
			const updateTask = await Task.update(payLoad, {
				where: {
					id
				},
				returning: true
			})
			if (updateTask[0]) {
				res.status(200).json(updateTask[1][0])
			} else {
					res.status(500).json({ error: 'Internal Server Error'})
			}
		} catch (err) {
			next(err)
		}
	}
	static async patchCategory(req, res, next) {
		try {
				const id = +req.params.id
				const UserId = req.loggedInUser.id
				const category = req.body.category
				const updateCategory = await Task.update({
						category
				}, {
						where: {
								id,
								UserId
						},
						returning: true
				})
				if (!updateCategory[0]){
						res.status(404).json({ error: 'Not Authorize!' })
				} else {
						res.status(200).json(updateCategory[1][0])
				}
		} catch (error) {
				next(error)
		}
	}
}

module.exports = TaskController