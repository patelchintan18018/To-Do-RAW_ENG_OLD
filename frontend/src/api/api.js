import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://to-do-raw-eng-q6uezb8oo-chintans-projects-764e7bec.vercel.app/api',
});

export default instance;
