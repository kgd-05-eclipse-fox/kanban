const router = require('express').Router();
const UserController = require('../controllers/user-controller');


router.get('/', (req, res) => {
    res.status(200).json('home')
})

router.post('/register', UserController.register);





module.exports = router;