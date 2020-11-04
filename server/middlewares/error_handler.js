module.exports = function (err, req, res, next) {
    let status = err.status || 500
    let message = err.msg || 'Internal Server Error'

    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError'){
        status = 400
        message = err.errors.map(el => el.message).join(', ')
    }
    console.log(status, message)
    res.status(status).json({msg: message})
}