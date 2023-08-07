import axios  from "axios";

const apiServer = axios.create({
    baseURL: 'http://localhost:7777'
})

apiServer.interceptors.request.use((request) => {
    return request;
})

apiServer.interceptors.response.use((response) => {
    if (response.data.code !== 200) {
        throw new Error('api server error')
    }
    return response.data?.data;
})

export default apiServer;