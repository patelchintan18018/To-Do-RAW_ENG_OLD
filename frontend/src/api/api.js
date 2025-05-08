import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://to-do-raw-eng-old.vercel.app//api',
});

export default instance;
