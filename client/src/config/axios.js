import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://k-a-n-b-a-n.herokuapp.com'
})

export default instance