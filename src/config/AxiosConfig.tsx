import axios from "axios";

const axiosIntance = axios.create({
    baseURL: 'http://localhost:5000',
});


export default axiosIntance;