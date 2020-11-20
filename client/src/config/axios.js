import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://qanban-apps.herokuapp.com',
    baseURL: 'http://localhost:3015'
})

export default instance