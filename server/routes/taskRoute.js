const route = require('express').Router()
const TaskController = require('../controllers/taskController')

route.get('/', TaskController.readAll)

module.exports = route