if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const routers = require('./routers')
// const errorHandler = require('./middlewares/errorHandler.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routers)
// app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`Got To link http://localhost:${port}`)
})