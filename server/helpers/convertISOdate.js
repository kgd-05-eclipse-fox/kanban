const convertISOdate = date => {
    date = new Date(date)
    year = date.getFullYear()
    month = date.getMonth()+1
    dt = date.getDate()
    
    if (dt < 10) dt = '0' + dt
    
    if (month < 10) month = '0' + month
    
    return `${dt}-${month}-${year}`
}

module.exports = convertISOdate