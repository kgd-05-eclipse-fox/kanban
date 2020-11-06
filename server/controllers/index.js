const { User, Task } = require('../models')
const { comparePassword, signToken } = require('../helpers/bcrypt')

class Controller {
  static async login (req, res, next) {
    try {
       const { email, password } = req.body
       console.log("Controller -> login -> req.body", req.body)
       const user = await User.findOne({
          where: {
             email: email
          }
       })

       if (!user) {
          res.status(401).json({
             message: 'Wrong email or password'
          })
       } else if (!comparePassword(password, user.password)) {
          res.status(401).json({
             message: 'Wrong email or password'
          })
       } else {
          const access_token = signToken({
             id: user.id,
             email: user.email
          })

          res.status(200).json({
             access_token: access_token
          })
       }
    } catch (error) {
       next(error)
    }
  }

  static async register (req, res, next) {
    try {
       const newUser = await User.create({
          email: req.body.email,
          password: req.body.password
       })
       res.status(201).json({
          id: newUser.id,
          email: newUser.email
       })
    } catch (error) {
       next(error)
    }
  }

  static async createTask (req, res, next) {
     console.log("masuk createTask 👍");
     console.log(req.body, "<<<<<< 🈂️");
   try {
      const newTask = await Task.create({
         title: req.body.title,
         description: req.body.description,
         CategoryId: req.body.CategoryId,
         UserId: req.loggedInUser.id
      })
      
      res.status(201).json(newTask)
   } catch (error) {
      console.log("Controller -> createTask -> error", error)
      next(error)
   }
  }

  static async showTask (req, res, next) {
     try { 
        const tasks = await Task.findAll()
        res.status(200).json({tasks})
     } catch (err) {
        next(err)
     }
  }

  static async editTask (req, res, next) {
     try {
        const { title, description, CategoryId } = req.body
        const update = await Task.update({
           title,
           description,
           CategoryId
        },{
           where: {
              id: +req.params.id
           },
           returning: true
        })
        res.status(200).json(update[1][0])
     } catch (error) {
        next(error)
     }
  }

  static async deleteTask (req, res, next) {
     console.log("masuk di delete controller 👍");
     try {
        const id = +req.params.id
        const destroy = await Task.destroy({
           where : {
              id: id
           },
        }, {
           returning: true
        })
        if (destroy !== 1) {
           res.status(404).json({message: `error not found`})
       } else {
           res.status(200).json({message: `Task success to delete`})
       }
     } catch (error) {
        next(error)
     }
  }
}

module.exports = Controller