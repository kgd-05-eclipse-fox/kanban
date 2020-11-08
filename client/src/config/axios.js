import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://wolf-kanban-naim.herokuapp.com'
})

export default instance