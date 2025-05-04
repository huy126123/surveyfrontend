import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Make sure this matches your NestJS backend port
  withCredentials: true, // if you're using cookies
});

export default api;