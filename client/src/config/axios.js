import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://kanban-akbarhabiby.herokuapp.com/'
})

export default instance