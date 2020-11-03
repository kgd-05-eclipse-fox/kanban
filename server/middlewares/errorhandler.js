const errorsjoin = require('../helpers/errorsjoin')

module.exports = (err, req, res, next) => {

    let status = 500
    let message = 'Internal Server Error'
    
    const errorMessages = err.errors // ! Error User (Login / Register)
    const errorMessage = err.message // ! Error Task + User

    if (errorMessages) {
        status = 400
        message = errorsjoin(errorMessages)
    } else if (errorMessage) {
        switch(errorMessage) {
            case 'Unauthorized':
                status = 401
                message = errorMessage
                break
            case 'Please complete all forms':
                status = 400
                message = errorMessage
                break
            case 'Failed to Edit Task':
                status = 424
                message = errorMessage
                break
            case 'Failed to Update Task Status':
                status = 424
                message = errorMessage
                break
            case 'Failed to Delete Task':
                status = 424
                message = errorMessage
                break
            case 'Oopss.. Email is already taken':
                status = 400
                message = errorMessage
                break
            case 'Task Not Found':
                status = 404
                message = errorMessage
                break
        }
    }

    res.status(status).json({ message: message })
}