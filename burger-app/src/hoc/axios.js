import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-afd13.firebaseio.com'
})

export default instance;