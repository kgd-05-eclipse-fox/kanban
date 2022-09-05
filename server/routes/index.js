const router = require('express').Router();
const UserController = require('../controllers/user-controller');
const task_router = require('./task');

router.get('/', (req, res) => {
    res.status(200).json('home')
})

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/googleLogin', UserController.googleLogin);
router.use('/tasks', task_router);

module.exports = router;