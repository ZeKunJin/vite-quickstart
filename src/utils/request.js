import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VITE_APP_API_BASE_URL,
  timeout: 6000
})

export default service