const { Task, User } = require('../models/')

class KanbanController {
    static async getAllTask (req, res, next) {
        try {
            const allTask = await Task.findAll({ include: User })
            res.status(200).json({ allTask })
        } catch (error) {
            next(error)
        }
    }

    static async postAddTask (req, res, next) {
        try {
            const UserId = req.whoAmI.id
            const { title, description } = req.body
            if (!title || !description) throw new Error('Please complete all forms')

            const newTask = {
                title: title,
                description: description,
                UserId: UserId
            }

            const createdTask = await Task.create(newTask)

            res.status(201).json(createdTask)
        } catch (error) {
            next(error)
        }
    }

    static async putTask (req, res, next) {
        try {
            const id = +req.params.id
            const { title, description } = req.body
            if (!title || !description) throw new Error('Please complete all forms')

            const editTask = {
                title: title,
                description: description
            }

            const editedTask = await Task.update(editTask, { where: { id: id }})

            if (editedTask[0]) {
                res.status(200).json({ msg: 'Sucessfully Edit Task' })
            } else {
                throw new Error('Failed to Edit Task')
            }
        } catch (error) {
            next(error)
        }
    }

    static async patchTask (req, res, next) {
        try {
            const id = +req.params.id

            const { status } = req.body
            if (!status) throw new Error('Please complete all forms')

            const updateStatus = {
                status: status
            }

            const updatedTaskStatus = await Task.update(updateStatus, { where: { id: id }})

            if (updatedTaskStatus[0]) {
                res.status(200).json({ msg: 'Successfully Update Task Status' })
            } else {
                throw new Error('Failed to Update Task Status')
            }
        } catch (error) {
            next(error)
        }
    }

    static async deleteTask (req, res, next) {
        try {
            const id = +req.params.id

            const deleteTask = await Task.destroy({ where: { id: id }})
            if (deleteTask) {
                res.status(200).json({ msg: `Successfully Delete Task with Id ${id}`})
            } else {
                throw new Error(`Failed to Delete Task`)
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = KanbanController