import axios from 'axios';
import {BaseUrl} from './index'
const instance = axios.create({
    baseURL: BaseUrl,
    timeout: 10000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        "Content-Type": "application/json"
    },
});
instance.interceptors.response.use(
    (response) => {
        if (response.data) {
            return response.data;
        } else {
            return { message: 'No data available' };
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default instance;
