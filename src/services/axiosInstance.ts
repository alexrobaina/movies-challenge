import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

const API_URL = 'https://api.npoint.io'

// Add a request interceptor
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.url = `${API_URL}${config.url}`

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    const status = error.response?.status

    // Handle other error statuses
    if (status === 500) {
      throw new Error('Internal Server Error')
    }

    if (status === 404) {
      throw new Error('Resource Not Found')
    }

    if (status === 403) {
      throw new Error('Forbidden')
    }

    if (status === 400) {
      throw new Error('Bad Request')
    }

    if (status === 422) {
      throw new Error('Unprocessable Entity')
    }

    if (status === 409) {
      throw new Error('Conflict')
    }

    return Promise.reject(error)
  },
)

export default axios
