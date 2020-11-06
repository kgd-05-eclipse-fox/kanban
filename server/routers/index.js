const routers = require('express').Router()
const UserController = require('../controller/user-controller.js')
const KabanController = require('../controller/kanban-controller.js')
const KanbanConteroller = require('../controller/kanban-controller.js')
const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')

routers.post('/resgister', UserController.userRegister)
routers.post('/login', UserController.userLogin)

routers.use(authentication)
routers.get('/tasks', KabanController.getAllKanban)
routers.post('/tasks', KanbanConteroller.postUserKanban)

console.log('masukkk routersss <<<<<<<<<<<<')
routers.get('/tasks/:id', authorization, KanbanConteroller.getKanbanById)
routers.put('/tasks/:id' , authorization, KabanController.putUserKanban)
routers.patch('/tasks/:id' , authorization, KabanController.patchUserKanban)
routers.delete('/tasks/:id' , authorization, KabanController.deleteUserKanban)


module.exports = routers