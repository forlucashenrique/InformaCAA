import axios from 'axios';

const vercelUrl = 'https://informa-ufpe-api.vercel.app/api'
const localUrl = 'http://192.168.0.9:3000/api'

const api = axios.create({
  baseURL: vercelUrl,
})

export default api