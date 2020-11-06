const errorHandler = (err, req, res, next) => {
    console.log(err);
    let status;
    let msg;

    if (err.name === 'SequelizeValidationError') {
        status = 400
        const arrayErrors = []

        for(let i = 0; i < err.errors.length; i++) {
            arrayErrors.push(err.errors[i].message)
        }
        msg = arrayErrors.toString();
        
    } else if (err.name === undefined) {
        status = err.status;
        msg = err.msg;
    } else {
        status = 500
        msg = 'Internal Server Error'
    }
    res.status(status).json({msg})
}

module.exports = errorHandler;