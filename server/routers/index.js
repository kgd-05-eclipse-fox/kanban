const router = require('express').Router()
const task = require('./task')
const loginRegister = require('./loginregister')


router.use('/', loginRegister)
router.use('/task', task)

module.exports = router