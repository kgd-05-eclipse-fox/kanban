const express = require("express")
const router = express.Router()
const taskRoute = require('./taskRoute')
const UserController = require("../controllers/UserController")

router.post('/loginGoogle', UserController.loginGoogle);

router.post("/register", UserController.register)

router.post("/login", UserController.login)

router.use('/tasks', taskRoute)

router.post('/googleLogin', UserController.loginGoogle)

module.exports = router