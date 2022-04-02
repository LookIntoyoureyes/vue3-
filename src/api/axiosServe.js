import axios from "axios";
import { Message } from "element3";
import { getToken, setToken } from '@/units/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  const token = getToken('Authorization')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(req => {
  if (req.code !== 200) {
    return Promise.reject(new Error(req.message || 'Error'))
  }
  if (req.headers.authorization) {
    let token = req.headers.authorization
    setToken('Authorization', token)
  }
  return req
}, err => {
  return Promise.reject(err)
})

export { service }