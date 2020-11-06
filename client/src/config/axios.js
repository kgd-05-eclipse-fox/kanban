import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://kanban-bima.herokuapp.com'
});

export default instance