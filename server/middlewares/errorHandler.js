class ErrorHandler {
    static error(err, req, res, next) {
        let status = 500

        let message = 'Internal Server Error'
        if (err.name === 'Unathorized' || err.name === 'JsonWebTokenError') {
            status = 401
            message = 'Unauthorized'
        } else if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
            status = 400
            let msg = []
            err.errors.forEach(element => {
                msg.push(element.message)
            })
            message = msg.join(', ')
        } else if (err.name === 'NotFound') {
            status = 404
            message = 'Error, not Found'
        } else if (err.name === 'WrongEmailPassword') {
            status = 401
            message = 'Wrong Email/Password'
        }
        res.status(status).json({
            message
        })
    }
}

module.exports = ErrorHandler