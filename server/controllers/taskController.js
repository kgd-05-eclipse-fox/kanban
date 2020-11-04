const { User, Task } = require('../models')

class TaskController {
    static async readAll(req, res, next) {
        try {
            const tasks = await Task.findAll({
               order: [['createdAt', 'desc']],
               include: User
            })
            res.status(200).json(tasks)
        } catch (error) {
            next(error)
        }
    }
    static async addTask (req, res, next) {
        try {
            const UserId = req.user.id
            const {title, description, category} = req.body
            const payload = {
                title,
                description,
                category,
                UserId
            }
            const newTask = await Task.create(payload, {
                returning: true
            })
            res.status(201).json(newTask)
        } catch (err) {
            next(err)
        }
    }
    static async moveCategory (req, res, next) {
        try {
            const id = +req.params.id
            const category = req.body.category

            const moved = await Task.update({
                category: category
            }, {
                where: {
                    id
                },
                returning: true
            })
            if (moved[0] !== 1) {
                throw {msg: 'move category failed', status: 404}
            } else {
                res.status(200).json(moved[1][0])
            }
        } catch (err) {
            next(err)
        }
    }
    static async delete (req, res, next) {
        try {
            const id = +req.params.id
            const destroyed = await Task.destroy({
                where: {
                    id
                }
            })
            if (destroyed !== 1) {
                throw {status: 404, msg: 'delete failed'}
            } else {
                res.status(200).json({msg: 'task deleted successfuly'})
            }
        } catch (err) {
            next(err)
        }
    }
    static async editTask (req, res, next) {
        try {
            const id = +req.params.id
            const {title, description, category} = req.body
            const payload = {
                title,
                description,
                category
            }

            const edited = await Task.update(payload, {
                where: {
                    id
                },
                returning: true
            })  
            if (edited[0] !== 1) {
                throw {msg: 'edit failed', status: 404}
            } else {
                res.status(200).json(edited[1][0])
            }
        } catch (err) {
            next(err)
        }
        
    }
}

module.exports = TaskController