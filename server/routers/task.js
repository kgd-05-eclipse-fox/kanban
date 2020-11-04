const router = require('express').Router()
const TaskController = require('../controllers/taskcontroller')
const { authentication } = require('../middlewares/authentication')

router.use(authentication)
router.get('/', TaskController.showTasks)
router.post('/', TaskController.addTask)

module.exports = router