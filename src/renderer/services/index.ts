import axios  from "axios";

const apiServer = axios.create({
    baseURL: 'http://admin-dev.hungrypanda.cn:7777'
})

export default apiServer;