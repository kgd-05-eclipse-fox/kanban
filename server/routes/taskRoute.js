const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const { authentication, authorization } = require('../middleware/auth')
const errorHandler = require('../middleware/errorHandler')

router.use(authentication)
router.get('/', TaskController.fetchAllTask, errorHandler)
router.post('/add', TaskController.addTask, errorHandler)
router.put('/edit', authorization, TaskController.editTask, errorHandler)
router.delete('/delete', authorization, TaskController.deleteTask, errorHandler)
router.patch('/patch', authorization, TaskController.updateTask, errorHandler)

module.exports = router