import axios from 'axios';

const instance = axios.create({

    baseURL: 'https://api.litudian.com/api/v1/',

    // timeout: 60000,

    // headers: {'Accept': 'application/json'},

    // withCredentials: true

});

const token = localStorage.getItem('ltdn');

if (token) {

    // Apply To Every Request
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + token + '';

} else {

    // Delete Auth Header
    delete instance.defaults.headers.common['Authorization'];

}

export default instance;