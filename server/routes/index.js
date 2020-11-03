const router = require('express').Router()

// * Require UserController
const UserController = require('../controllers/UserController')

// * Require KanbanRouter
const kanbanRouter = require('./kanbanRouter')

// * Login and Register Router
router.post('/register', UserController.postRegisterUser)
router.post('/login', UserController.postLoginUser)

// * Kanban Router * Require Authentication
router.use('/kanban', kanbanRouter)

module.exports = router