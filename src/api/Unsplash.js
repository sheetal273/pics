import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID U8D6rOf7Ejzhaqc23GtiN3OA2P7cpu2rZwqS19iaA7o' 
    }
});
