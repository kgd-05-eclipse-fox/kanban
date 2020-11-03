const { Task } = require('../models')

class TaskController {
    static async readAll(req, res, next) {
        try {
            const tasks = await Task.findAll({
                group: "category"
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TaskController