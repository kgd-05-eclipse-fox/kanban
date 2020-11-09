const errorsjoin = arrayErrors => {
    const errors = []
    arrayErrors.forEach( err => {
        errors.push(err.message)
    })

    return errors.join(', ')
}

module.exports = errorsjoin