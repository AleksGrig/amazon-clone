import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-7c8d8.cloudfunctions.net/api'
})

export default instance