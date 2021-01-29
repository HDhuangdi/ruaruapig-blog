import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// @ts-ignore
import qs from 'qs';
import baseUrl from '../config/baseUrl';

/**
 * 定义请求常量
 * TIME_OUT
 */
const env = process.env.NODE_ENV.toUpperCase();
Axios.defaults.timeout = 20000; // 请求超时时间
Axios.defaults.withCredentials = true;
// @ts-ignore
Axios.defaults.baseURL = baseUrl[env];

// 封装请求拦截
Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.method && config.method.toUpperCase() === 'POST') {
      config.data = qs.stringify({
        ...config.data, //选用qs模块来处理数据
      });
    }
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded', //设置跨域头部
    };
    return config;
  },
  () => {}
);

// 封装响应拦截
Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  () => {}
);

export default Axios;
