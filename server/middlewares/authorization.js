const { Task } = require('../models')

const authorization = async (req, res, next) => {
   console.log("masuk di authorization 👍");
   const id = +req.params.id
   console.log("id 🚀", id)
   try {
      const findId = await Task.findByPk(id)
      console.log("findId 👍", findId)
      if (!findId) {
         throw { msg: 'Task not found', status: 404 }
      } else if (findId.UserId === req.loggedInUser.id) {
         next()
      } else {
         throw { msg: 'Not Authorized bro', status: 401 }
      }
   } catch (error) {
      console.log("error 👍", error)
      next(error)  
   }
}

module.exports = authorization