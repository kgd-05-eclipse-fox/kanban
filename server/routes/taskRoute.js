const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const { authentication, authorization } = require('../middleware/auth')

router.use(authentication)
router.get('/', TaskController.fetchAllTask)
router.post('/add', TaskController.addTask)

module.exports = router