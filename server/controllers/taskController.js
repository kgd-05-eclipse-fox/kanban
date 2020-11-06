const  { Task } = require('../models')

class Controller {
    static async fetchAllTask(req, res, next) {
        try {
            const allTask = await Task.findAll()
            res.status(200).json(allTask)
        } catch (error) {
            res.status(500).json("Internal Server Error")
        }
    }

    static async addTask(req, res, next) {
        let userId = req.loginUser.id
        try {
            const payload = {
                title: req.body.title,
                description: req.body.description,
                UserId: userId
            }
            // console.log(payload)
            const task = await Task.create(payload)
            res.status(201).json(task)
        } catch(err) {
            res.status(500).json("Internal Server Error")
        }
    }
}
module.exports = Controller