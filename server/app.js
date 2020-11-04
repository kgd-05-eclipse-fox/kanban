const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const route = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.post('/users/register', (req, res) => {
//     console.log(req.body)
// })
app.use(route)
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})