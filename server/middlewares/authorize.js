const {
    Task
} = require('../models/index')

class Authorize {
    static async task(req, res, next) {
        try {
            const tasks = await Task.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (tasks) {
                if (tasks.UserId !== req.loggedIn.id) {
                    throw {
                        name: 'Unauthorized'
                    }
                } else {
                    next()
                }
            } else {
                throw {
                    name: 'not Found'
                }
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Authorize