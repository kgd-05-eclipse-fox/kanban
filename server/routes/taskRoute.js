const route = require('express').Router()
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

route.use(authentication)
route.get('/', TaskController.readAll)
route.post('/', TaskController.addTask)

route.use('/:id', authorization)
route.patch('/:id', TaskController.moveCategory)
route.delete('/:id', TaskController.delete)
route.put('/:id', TaskController.editTask)

module.exports = route