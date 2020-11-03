// * Require 'dotenv' (IF)
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// * Initialize Express + PORT
const express = require('express')
const app = express()
const PORT = +process.env.PORT

// * Require Cors
const cors = require('cors')

// * Require Router
const router = require('./routes/')

// * Require ErrorHandler
const errorhandler = require('./middlewares/errorhandler')

// * Require Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// * Use the Router
app.use(router)

// * Use ErrorHandler
app.use(errorhandler)

// * Listen OR Starting the app
app.listen(PORT, _ => {
    console.log(`Kanban App | By AkbarHabiby Live at http://127.0.0.1:${PORT}`);
})