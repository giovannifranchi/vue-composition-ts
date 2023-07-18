import axios from 'axios'
import Header from './Header'
import type { Config } from '@/types/api-types/Config'

const baseURL = import.meta.env.BASE_URL

const ajaxRequest = async (config: Config) => {
  config.baseURL = baseURL

  switch (config.method) {
    case 'GET':
      Header.get.Authorization = config.token ? `Bearer ${config.token}` : null
      config.headers = Header.get
      break
    case 'POST':
      Header.post.Authorization = config.token ? `Bearer ${config.token}` : null
      config.headers = Header.post
      break
    case 'PUT':
      Header.put.Authorization = config.token ? `Bearer ${config.token}` : null
      config.headers = Header.put
      break
    case 'DELETE':
      Header.delete.Authorization = config.token ? `Bearer ${config.token}` : null
      config.headers = Header.delete
      break
    default:
      return
  }

  return (await axios.request(config)).data
}

const Ajax = {
  get: (endpoint: string, params = null as any | null, config: Config) => {
    config = {
      ...config,
      ...{
        url: endpoint,
        method: 'GET',
        params
      }
    }
    return ajaxRequest(config)
  },

  post: (endpoint: string, params: any, config: Config) => {
    config = {
      ...config,
      ...{
        url: endpoint,
        method: 'POST',
        data: params
      }
    }
    return ajaxRequest(config)
  },

  put: (endpoint: string, params: any, config: Config) => {
    config = {
      ...config,
      ...{
        url: endpoint,
        method: 'PUT',
        data: params
      }
    }

    return ajaxRequest(config)
  },

  delete: (endpoint: string, params = null as null | any, config: Config) => {
    config = {
      ...config,
      ...{
        url: endpoint,
        method: 'DELETE'
      }
    }

    if (params) {
      config.data = { data: params }
    }

    return ajaxRequest(config)
  }
}

export default Ajax;
