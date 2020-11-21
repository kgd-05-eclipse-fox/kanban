const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const { authentication, authorization } = require('../middleware/auth')
const errorHandler = require('../middleware/errorHandler')

router.use(authentication)
router.get('/', TaskController.fetchAllTask, errorHandler)
router.post('/', TaskController.addTask, errorHandler)
router.put('/:id', authorization, TaskController.editTask, errorHandler)
router.delete('/:id', authorization, TaskController.deleteTask, errorHandler)
router.patch('/:id', authorization, TaskController.updateTask, errorHandler)
router.patch('/:id/undo', authorization, TaskController.updateTask, errorHandler)

module.exports = router