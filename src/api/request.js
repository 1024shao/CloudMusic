import axios from 'axios'

const request = axios.create({
  timeout: 500
})

export default request