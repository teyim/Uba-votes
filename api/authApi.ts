import axios from 'axios';
const BASE_URL = 'http://localhost:3001/';

export const authApi = axios.create({
  baseURL: BASE_URL,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';
