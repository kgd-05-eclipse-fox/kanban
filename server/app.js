if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const error_handler = require('./middlewares/error_handler')
const { Task, User } = require('./models')

const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(routes)
app.use(error_handler)

io.on('connection', (socket) => {
  console.log('a user joined')
  socket.on('changeData', async () => {
    console.log('something happened')
    try {
      const tasks = await Task.findAll({
        order: [['createdAt', 'desc']],
        include: [
          {
            model: User,
            attributes: ['id', 'username', 'email']
          }
        ]
      })
      io.emit('changeData', tasks)
    } catch (error) {
      console.log(error)
    }
  })
})

http.listen(port, () => console.log(`listening at ${port}`))