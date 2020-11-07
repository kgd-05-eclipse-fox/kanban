const {
    Task,
    User
} = require('../models')

class TaskController {
    static async findAll(req, res, next) {
        try {
            const tasks = await Task.findAll({
                include: User
            })
            res.status(200).json(tasks)
        } catch (err) {
            next(err)
        }
    }

    static async addTask(req, res, next) {
        try {
            const {
                title,
                category
            } = req.body
            const newTask = await Task.create({
                title,
                category,
                UserId: req.loggedIn.id
            })
            res.status(201).json(newTask)
        } catch (err) {
            next(err)
        }
    }

    static async getTask(req, res, next) {
        try {
            const id = req.params.id
            const task = await Task.findOne({
                where: {
                    UserId: req.loggedIn.id,
                    id: id
                }
            })
            if (task.UserId === req.loggedIn.id) {
                if (!task) {
                    throw 'error not found'
                }
                res.status(200).json(task)
            } else {
                res.status(401).json('not authorized')
            }
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async updateTask(req, res, next) {
        try {
            const id = req.params.id
            const {
                title,
                category
            } = req.body

            const task = await Task.findByPk(id)
            if (!task) {
                throw {
                    name: 'not found'
                }
            }
            const update = await Task.update({
                title,
                category
            }, {
                where: {
                    id
                },
                returning: true
            })
            res.status(200).json(update[1][0])
        } catch (err) {
            next(err)
        }
    }

    static async deleteTask(req, res, next) {
        try {
            const id = req.params.id
            const taskId = await Task.findByPk(id)
            if (!taskId) {
                throw {
                    error
                }
            }
            const task = await Task.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({
                message: 'deleted success'
            })
        } catch (error) {
            next(error)
        }
    }
}


module.exports = TaskController