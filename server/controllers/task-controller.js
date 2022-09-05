const { Task } = require('../models')

class TaskController {
    
    static fetchTask (req,res,next) {       
        Task.findAll()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            next(err)
        })
    }

    static postTask (req,res,next) {
        const userId = req.loggedInUser.id
        const username = req.loggedInUser.username

        const newTask = {
            title: req.body.title,
            description: req.body.description,
            username: username,
            UserId: userId
        }

        Task.create(newTask)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            next(err)
        })
    }

    static patchTaskById (req, res, next) {
        const id = +req.params.id
        
        let { category } = req.body;

        Task.update({
            category
        }, {
            where: {
                id
            }, returning: true
        })
        .then(task => {
            res.status(200).json(task[1][0])
        })
        .catch(err => {
            next(err)
        })
    }

    static putTask (req, res, next) {
        const id = +req.params.id

        const task = {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category
        }

        Task.update(task, {
            where: {
                id
            }, returning: true
        })
        .then(task => {
            res.status(200).json(task[1][0])
        })
        .catch(err => {
            next(err)
        })
    }
    
    static deleteTask (req, res, next) {
        const id = +req.params.id

        Task.destroy({
            where: {
                id
            }
        })
        .then (task => {
            res.status(200).json('Task has been deleted')
        })
        .catch(err => {
            next(err)
        })
    }

}

module.exports = TaskController;