import axios from 'axios';
import { useAdminStore } from 'utils/storage';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// let token = null;

// if (typeof window !== 'undefined') {
//   token = localStorage.getItem('adminToken');
//   if (token) {
//     token = JSON.parse(token).state?.adminToken?.token;
//   }
//   console.log(token);
// }
export const adminAxiosConfig = axios.create({
  baseURL: BASE_URL,
});

// adminAxiosConfig.defaults.headers.common['Content-Type'] = 'application/json';
// adminAxiosConfig.defaults.headers.post['Authorization'] = token;
// adminAxiosConfig.defaults.headers.get['Authorization'] = token;
// adminAxiosConfig.defaults.headers.delete['Authorization'] = token;
// adminAxiosConfig.defaults.headers.patch['Authorization'] = token;

adminAxiosConfig.interceptors.request.use(
  (config) => {
    // Retrieve the token from Zustand
    const token = useAdminStore?.getState()?.adminToken?.token;
    console.log(token);

    // Add the token to the request headers
    if (token) {
      config.headers['Authorization'] = token;
    }

    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
