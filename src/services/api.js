import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dev-api.kuppi.com.br/example/products',
    timeout:1000,
    headers: {'auth-token':'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd'}
});


export default api;