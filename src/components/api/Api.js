import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://ip-fast.com/api/',

});

export default Api;