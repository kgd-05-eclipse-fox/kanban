const { verifyToken } = require('../helpers/jwt')
const { User, Task } = require('../models')

async function authentication(req, res, next) {
    const token = req.headers.token
    try {
        if(!token) {
            throw { msg: "Authentication Failed", status: 401 }
        } else {
            const decodeToken = verifyToken(token)
            const selectedUser = await User.findOne({
                where: {
                    email: decodeToken.email
                }
            })
            if(selectedUser == null) {
                throw { msg: "Authentication Failed", status: 401 }
            } else {
                req.loginUser = selectedUser
                next()
            }
        }
    } catch (error) {
        res.status(error.status).json(error.msg)
    }
    
}

async function authorization(req, res, next) {
    const taskId = Number(req.body.id)
    try {
        const task = await Task.findByPk(taskId)
        if(task == null) {
            throw { msg: "Data not found", status: 404 }
        } else {
            if(task.UserId == req.loginUser.id) {
                next()
            } else {
                throw { msg: "Not authorized to delete this post", status: 404 }
            }
        }
    } catch (error) {
        res.status(error.status).json(error.msg)
    }
}

module.exports = {
    authentication,
    authorization
}