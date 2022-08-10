import axios from 'axios'

axios.interceptors.request.use(
  function (request) {
    request.headers.common['Content-Type'] = 'application/json'
    request.headers.common['x-api-key'] = 's8m40WkSBv2lwa7FDqTiP193zzr8yhul4cMj0IqN'
    // request.headers.common['Authorization'] = '***';
    return request
  },
  function (error) {
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(null, (error) => {
  console.log('Error', error)
  // const expectedErrors =
  //   error.response && error.respons.status >= 400 && error.respons.status < 500;

  // if (!expectedErrors) {
  //   alert("An unexpected error occurred!");
  // }

  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
