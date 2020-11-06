import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://kanvan-app.herokuapp.com'
});

export default instance