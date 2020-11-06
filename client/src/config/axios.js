import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://qanban-apps.herokuapp.com'
})

export default instance