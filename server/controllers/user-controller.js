const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');

class UserController {
    static register (req, res, next) {
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        User.create(user)
        .then(user => {
            res.status(201).json(user = {
                id: user.id,
                username: user.username,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        const payload = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne({
            where: {
                email: payload.email
            }
        })
        .then(user => {
            if(!user) {
                throw {msg: 'Invalid email/password', status: 401}
            } else if (!comparePassword(payload.password, user.password)) {
                throw {msg: 'Invalid email/password', status: 401}
            } else {
                const access_token = signToken({
                    id: user.id,
                    email: user.email
                })
                res.status(200).json({
                    access_token
                })
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController;