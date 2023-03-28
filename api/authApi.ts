import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


let token = null;

if (typeof window !== 'undefined') {
  const item = localStorage.getItem('user');
  if (item) {
    token = JSON.parse(item).state?.user?.token;
  }
}
export const authApi = axios.create({
  baseURL: BASE_URL,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';
authApi.defaults.headers.post['Authorization'] = token;
authApi.defaults.headers.get['Authorization'] = token;
