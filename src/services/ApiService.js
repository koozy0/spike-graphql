const axios = require('axios');

const BASE_URL = 'http://localhost:3000';
const TIMEOUT = 20000;
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class ApiService {
  constructor({
    baseURL = BASE_URL,
    timeout = TIMEOUT,
    headers = HEADERS,
    auth,
  }) {
    const client = axios.create({ baseURL, timeout, headers, auth });
    client.interceptors.response.use(this.handleSuccess, this.handleFailure);
    this.client = client;
  }

  handleSuccess(res) {
    return res;
  }

  handleFailure(err) {
    return Promise.reject(err);
  }

  get(path) {
    return this.client.get(path).then((res) => res.data);
  }

  put(path, payload) {
    return this.client.put(path, payload).then((res) => res.data);
  }

  post(path, payload) {
    return this.client.post(path, payload).then((res) => res.data);
  }

  patch(path, payload) {
    return this.client.patch(path, payload).then((res) => res.data);
  }

  delete(path) {
    return this.client.get(path).then((res) => res.data);
  }
}

module.exports = ApiService;
