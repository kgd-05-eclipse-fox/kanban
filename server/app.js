if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}
const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 8080
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get("/", (req, res) => res.status(200).json({
    msg: "halo dunia"
}))

app.use(router)
app.use(errorHandler.error)

app.listen(PORT, () => {
    console.log(`bismillah ${PORT}x`)
})