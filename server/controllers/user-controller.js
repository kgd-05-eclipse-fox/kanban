const { User } = require('../models');

class UserController {
    static register (req, res, next) {
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(user)
        .then(user => {
            res.status(201).json(user = {
                id: user.id,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController;