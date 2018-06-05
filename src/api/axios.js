import axios from 'axios'

// axios.defaults.baseURL = config['WEB_SERVICE_URL']
axios.defaults.headers['Content-Type'] = 'application/json'
// 使用下边的请求头，不能跨域
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Accept'] = 'application/json'
// 是否携带cookie
axios.defaults.withCredentials = true

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  console.log('interceptors request error')
  return Promise.reject(error)
})

// 请求响应拦截
function responseFilter (response) {
}

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 如果是开发模式
  if (process.env.NODE_ENV === 'development') {
    return response
  } else {
    return responseFilter(response)
  }
}, function (error) {
  console.log('request response failure!')
  return Promise.reject(error)
})

export default axios
