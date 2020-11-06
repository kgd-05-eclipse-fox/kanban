const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const { authentication, authorization } = require('../middleware/auth')

router.use(authentication)
router.get('/', TaskController.fetchAllTask)
router.post('/add', TaskController.addTask)
router.put('/edit', TaskController.editTask)
router.delete('/delete', TaskController.deleteTask)
router.patch('/patch', TaskController.updateTask)

module.exports = router