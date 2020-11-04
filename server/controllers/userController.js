const { User } = require('../models')

class Controller {
    static async registerUser(req, res){
        try {
            const payload = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }
            const result = await User.create(payload)
            res.status(201).json({id: result.id, email: result.email})
        } catch (error) {
            res.status(500).json("Internal Server Error")
        }
    }
}
module.exports = Controller