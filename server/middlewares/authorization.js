const { Task } = require('../models/')

const authorization = async (req, res, next) => {
    try {
        const TaskId = +req.params.id
        const UserId = req.whoAmI.id
        
        const verify = await Task.findByPk(TaskId)

        if (verify) {
            if (verify.UserId == UserId) {
                next()
            } else {
                throw new Error('Unauthorized')
            }
        } else {
            throw new Error('Task Not Found')
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authorization