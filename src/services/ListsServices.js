import apiProducts from '../http/productsApi'

export default class ListsServices {
	static async getAll() {
		return apiProducts.get('/lists')
	}

	static async getAll(data) {
		return apiProducts.post('/lists', data)
	}
}
