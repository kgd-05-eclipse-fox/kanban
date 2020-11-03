const router = require('express').Router()

// * Require KanbanController
const KanbanController = require('../controllers/KanbanController')

// * Require Authentication & Authorization
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

// * Use Authentication for accessing all Data
router.use(authentication)
router.get('/', KanbanController.getAllTask)
router.post('/', KanbanController.postAddTask)

// * Use Authorization for Edit Task Detail, Edit Task Status and Delete Task
router.use('/:id', authorization)
router.put('/:id', KanbanController.putTask)
router.patch('/:id', KanbanController.patchTask)
router.delete('/:id', KanbanController.deleteTask)

module.exports = router