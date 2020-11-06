const router = require('express').Router()
const TaskController = require('../controllers/taskcontroller')
const { authentication } = require('../middlewares/authentication')
const { authorization } = require('../middlewares/authorization')

router.use(authentication)
router.get('/', TaskController.showTasks)
router.post('/', TaskController.addTask)
router.get('/:id', TaskController.showOne)
router.put('/:id', authorization, TaskController.editTask)
router.delete('/:id', authorization, TaskController.destroy)

module.exports = router