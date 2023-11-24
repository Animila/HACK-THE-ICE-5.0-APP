import axios from 'axios'

API_URL = 'https://hackaton-yakse.ru/products/api/'

const apiProducts = axios.create({
	withCredentials: true,
	headers: { 'Access-Control-Allow-Origin': '*' },
	baseURL: API_URL,
})

export default apiProducts
