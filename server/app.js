if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const error_handler = require('./middlewares/error_handler')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(routes)
app.use(error_handler)

app.listen(port, () => console.log(`listening at ${port}`))