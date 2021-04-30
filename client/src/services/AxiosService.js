import Axios from 'axios'

export const baseURL = window.location.origin.includes('localhost') ?'http://localhost:3000' : ""

export const api = Axios.create({
  baseURL,
  timeout:3000
})

export const setBearer = function(token) {
  api.defaults.headers.authorization = token
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
}