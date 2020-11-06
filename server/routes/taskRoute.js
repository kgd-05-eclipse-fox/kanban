const TaskController = require("../controllers/TaskController")
const express = require("express")
const router = express.Router()
const Authenticate = require("../middlewares/authenticate")
const Authorize = require("../middlewares/authorize")

router.get("/", TaskController.findAll)

router.use(Authenticate.token)

router.post("/", TaskController.addTask)

router.put("/:id", Authorize.task, TaskController.updateTask)

router.post("/:id", Authorize.task, TaskController.getTask)

router.delete("/:id", Authorize.task, TaskController.deleteTask)

module.exports = router