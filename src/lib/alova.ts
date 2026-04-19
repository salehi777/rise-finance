import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import ReactHook from 'alova/react'
import { toast } from 'react-toastify'

const parseResponse = async (response: Response) => {
  const data = await response.text()
  try {
    return JSON.parse(data)
  } catch (error) {
    return data || null
  }
}

const alova = createAlova({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),
  cacheFor: null,

  responded: {
    onSuccess: async (response) => {
      const data = await parseResponse(response)

      if (response.status >= 400) {
        const message = data.message || 'Something went wrong'
        toast.error(message)
        throw new Error(message)
      }

      return data
    },

    onError: () => {
      toast.error('Failed to connect to server')
      throw new Error('Failed to connect to server')
    },
  },
})

export default alova
