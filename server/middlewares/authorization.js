const { Task } = require('../models');


const authorization = (req, res, next) => {
    const userId = req.loggedInUser.id;
    const id = +req.params.id;

    Task.findByPk(id)
    
    .then(task => {
        if(!task) {
            throw {msg: 'Task is not found', status: 404}
        } else if (task.UserId === userId) {
            next()
        } else {
            throw {msg: 'Not authorized', status: 401}
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = authorization