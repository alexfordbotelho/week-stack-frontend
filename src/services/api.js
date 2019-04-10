import axios from 'axios';

const api = axios.create({
   baseURL : "https://week-stack-backend.herokuapp.com"
});

export default api;