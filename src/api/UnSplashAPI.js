import axios from 'axios';
import { Key } from "./ApiKey";
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${Key}` //API Key from UnSplash
    }
});
