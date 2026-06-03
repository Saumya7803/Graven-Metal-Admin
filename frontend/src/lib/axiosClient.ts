import axios from 'axios';
import { getCustomerAuthToken, isTokenExpired } from './auth';

const apiBaseUrl =
<<<<<<< HEAD
  import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:5000/api');
=======
  import.meta.env.VITE_API_BASE_URL || 'https://graven-metal-backend.onrender.com/api';
>>>>>>> frontend-live/main

export const axiosClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 15000,
});

axiosClient.interceptors.request.use((config) => {
  const token = getCustomerAuthToken();
  if (token && !isTokenExpired(token)) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
