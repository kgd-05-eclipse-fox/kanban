const router = require('express').Router();
const TaskController = require('../controllers/task-controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization')



router.use(authentication);

router.get('/', TaskController.fetchTask);

router.post('/', TaskController.postTask);

router.get('/:id', TaskController.fetchTaskById);

router.patch('/:id', authorization, TaskController.patchTaskById);

router.put('/:id', authorization, TaskController.putTask);

router.delete('/:id', authorization, TaskController.deleteTask);

module.exports = router;