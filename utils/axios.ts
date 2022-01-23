import axios from 'axios'
import Cookie from 'js-cookie'
const config = {
  baseURL: 'http://localhost:3000/api',
  timeout: 60 * 1000,
}
const _axios = axios.create({
  baseURL: config.baseURL,
  timeout: config.timeout,
})
_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    response = typeof response.data !== undefined ? response.data : response
    return response
  },
  function (error) {
    console.log(error, 'errorz')
    return Promise.reject(error)
  }
)

const header = async (type?: any) => {
  const jwt = Cookie.get('token')
  try {
    if (type === 'form-data') {
      return {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    } else {
      return {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      }
    }
  } catch (error: any) {
    return error.message
  }
}

const headerForGet = async (jwt: any) => {
  try {
    return {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    }
  } catch (error: any) {
    return error.message
  }
}

const errors = (errors: any) => {
  return {
    status: false,
    error: errors,
  }
}

export const Get = async (url: any, jwt: any) => {
  try {
    const head = await headerForGet(jwt)
    const get = await _axios.get(url, head)
    return get
  } catch (error: any) {
    return errors(error.message)
  }
}

export const Post = async (url: any, params: any, type?: any) => {
  try {
    const head = await header(type)

    const post = await _axios.post(
      url,
      type === 'form-data' ? params : JSON.stringify(params),
      head
    )

    return post
  } catch (error: any) {
    return errors(error.message)
  }
}

export const Put = async (url: any, params: any, type?: any) => {
  try {
    const head = await header(type)

    const post = await _axios.put(
      url,
      type === 'form-data' ? params : params,
      head
    )
    return post
  } catch (error: any) {
    return errors(error.message)
  }
}

export const Delete = async (url: any) => {
  try {
    const head = await header()
    const del = await _axios.delete(url, head)
    return del
  } catch (error: any) {
    return errors(error.message)
  }
}
