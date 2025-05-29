

var axios = require("axios");



axios.interceptors.request.use(function (config) {
    console.log('拦截请求成功');
    config.headers['sign'] = '123456789';
    return config;
})


axios.interceptors.response.use(function (response) {
    console.log('响应拦截成功');
    return response.data;
})



axios.get("http://httpbin.org/ip").then(function (res){
     console.log('test me');
})