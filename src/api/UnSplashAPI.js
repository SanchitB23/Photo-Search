import axios from 'axios';
const Key = ""; //Add Key here
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${Key}` //API Key from UnSplash
    }
});
