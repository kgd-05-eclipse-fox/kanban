const { Task } = require('../models')

module.exports = async function (req, res, next) {
    const id = +req.params.id
    try {
        const task = await Task.findByPk(id)
        
        if (!task) {
            throw { msg: `task is not found`, status: 404}
        } else if (task.UserId !== req.user.id) {
            throw { msg: `Not Authorized`, status: 401 }
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
}