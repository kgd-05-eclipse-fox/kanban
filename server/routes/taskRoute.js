const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const { authentication, authorization } = require('../middleware/auth')

router.use(authentication)
router.get('/', TaskController.fetchAllTask)
router.post('/add', TaskController.addTask)
router.put('/edit', authorization, TaskController.editTask)
router.delete('/delete', authorization, TaskController.deleteTask)
router.patch('/patch', authorization, TaskController.updateTask)

module.exports = router