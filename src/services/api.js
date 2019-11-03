import axios from 'axios';

const api = axios.create({
    baseURL: 'https://itunes.apple.com/lookup'
});

export default api;