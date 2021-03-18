import axios from 'axios';

//https://api.hgbrasil.com/weather?key=a1f93f13&lat=-23.682&lon=-46.875

export const key = 'a1f93f13';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;