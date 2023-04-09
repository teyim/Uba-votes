import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

let token = null;

if (typeof window !== 'undefined') {
  token = localStorage.getItem('adminToken');
}
export const adminAxiosConfig = axios.create({
  baseURL: BASE_URL,
});

adminAxiosConfig.defaults.headers.common['Content-Type'] = 'application/json';
adminAxiosConfig.defaults.headers.post['Authorization'] = token;
adminAxiosConfig.defaults.headers.get['Authorization'] = token;
