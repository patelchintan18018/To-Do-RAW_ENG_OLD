import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://vercel.com/chintans-projects-764e7bec/to-do-raw-eng-old/api',
});

export default instance;
