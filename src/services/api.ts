import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://172.16.176.65:3333',
});

export default api;
