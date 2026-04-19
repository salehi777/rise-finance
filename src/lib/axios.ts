import axiosLib from 'axios'
import toast from 'react-hot-toast'

const axios = axiosLib.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log(error.response?.data)
    const message = error.response?.data?.message || 'Something went wrong'
    toast.error(message)
    throw new Error(message)
  },
)

export default axios
