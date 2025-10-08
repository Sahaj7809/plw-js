// tests/api/api-util.js
export class ApiUtil {
  constructor(request, baseUrl = 'https://fakestoreapi.com') {
    this.request = request;
    this.baseUrl = baseUrl;
  }

  async getAllProducts() {
    const response = await this.request.get(`${this.baseUrl}/products`);
    this._checkResponse(response);
    return response.json();
  }

  async getProductById(id) {
    const response = await this.request.get(`${this.baseUrl}/products/${id}`);
    this._checkResponse(response);
    return response.json();
  }

  async createOrder(orderData) {
    const response = await this.request.post(`${this.baseUrl}/carts`, {
      data: orderData,
    });
    this._checkResponse(response);
    return response.json();
  }

  _checkResponse(response) {
    if (!response.ok()) {
      throw new Error(`API failed: ${response.status()} - ${response.statusText()}`);
    }
  }
}
