const routers = require('express').Router()
const UserController = require('../controller/user-controller.js')
const KabanController = require('../controller/kanban-controller.js')
const authentication = require('../middlewares/authentication.js')
const KanbanConteroller = require('../controller/kanban-controller.js')

routers.post('/resgister', UserController.userRegister)
routers.post('/login', UserController.userLogin)

routers.use(authentication)
routers.get('/tasks', KabanController.getAllKanban)
routers.post('/tasks', KanbanConteroller.postUserKanban)


// routers.patch('/tasks/:id', KabanController.patchUserKanban)


module.exports = routers