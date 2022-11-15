import axios from 'axios';

const api = axios.create({
  baseURL: 'https://informa-ufpe-api.vercel.app/api',
})

export default api