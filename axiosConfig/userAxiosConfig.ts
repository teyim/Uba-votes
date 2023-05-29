import axios from 'axios';
import { useUserStore } from 'utils/storage';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// let token = null;

// if (typeof window !== 'undefined') {
//   const item = localStorage.getItem('user');
//   if (item) {
//     token = JSON.parse(item).state?.user?.token;
//   }
//   console.log('temp', token);
// }
export const userAxiosConfig = axios.create({
  baseURL: BASE_URL,
});

// userAxiosConfig.defaults.headers.common['Content-Type'] = 'application/json';
// userAxiosConfig.defaults.headers.post['Authorization'] = token;
// userAxiosConfig.defaults.headers.get['Authorization'] = token;
userAxiosConfig.interceptors.request.use(
  (config) => {
    // Retrieve the token from Zustand
    const token = useUserStore.getState().user?.token;
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
