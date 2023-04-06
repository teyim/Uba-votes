import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

let token = null;

if (typeof window !== 'undefined') {
  const item = localStorage.getItem('user');
  if (item) {
    token = JSON.parse(item).state?.user?.token;
  }
}
export const userAxiosConfig = axios.create({
  baseURL: BASE_URL,
});

userAxiosConfig.defaults.headers.common['Content-Type'] = 'application/json';
userAxiosConfig.defaults.headers.post['Authorization'] = token;
userAxiosConfig.defaults.headers.get['Authorization'] = token;
