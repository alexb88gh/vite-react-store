import axios from 'axios'

import { BASE_API_URL } from '@/shared/config/urls'

export const http = axios.create({
  baseURL: BASE_API_URL ?? '',
  withCredentials: false,
})

http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // logout logic
    }
    return Promise.reject(err)
  },
)
