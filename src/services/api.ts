import axios from 'axios';

const api = axios.create({
  baseURL: 'https://survey-backend-hm76.onrender.com', // Make sure this matches your NestJS backend port
  withCredentials: true, // if you're using cookies
});

export default api;