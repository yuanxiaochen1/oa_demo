import axios from "axios";
import { Message } from "element-ui";
import { getToken, getUser } from "@/utils/auth";
import store from "../store";
// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // 在这里设置访问的基路径，这样就不用在每个接口上面加了，线上也会加上这个
  baseURL: "/dd_backend", // 在这里设置访问的基路径，这样就不用在每个接口上面加了，线上也会加上这个
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 120000, // request timeout
  withCredentials: true,
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (getToken()) {
      config.headers["Authorization"] = getToken(); //设置请求头，带上token,登录的时候存在cookie中的
      // config.headers["userId"] = JSON.parse(getUser()).id; //设置请求头，带上userID,登录的时候存在cookie中的
      // config.headers["userId"] = 2; //设置请求头，带上userID,登录的时候存在cookie中的
    }
    return config;
  },
  (error) => {
    if (error.response) {
      // const data = error.response.data
      //     const token = getToken()
      //     if (error.response.status === 403) {
      //       Message({
      //         message: res.message || 'Error',
      //         type: 'error',
      //         duration: 5 * 1000
      //       })
      //     }
      //     if (error.response.status === 401) {
      //         notification.error({
      //             message: 'Unauthorized',
      //             description: 'Authorization verification failed'
      //         })
      //         if (token) {
      //             store.dispatch('Logout1').then(() => {
      //                 setTimeout(() => {
      //                     window.location.reload()
      //                 }, 1500)
      //             })
      //         }
      //     }
      // }
      return Promise.reject(error);
    }
  }
);
// response interceptor
service.interceptors.response.use(
  (response) => {
    // const res = response.data
    if (response.data.status == "-99") {
      store.dispatch("user/logout");
    }
    if (response.data instanceof Blob) {
      return response;
    } else {
      return response.data;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
