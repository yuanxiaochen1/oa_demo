
import  service  from '@/utils/request'
import qs from 'qs';
//get
export function get(url, parameter) {
  return new Promise((resolve,reject)=>{
    service({
      url: url,
      method: 'get',
      params: parameter,
      headers: {
          'Content-Type': 'application/json;charset=UTF-8'
      },
      withCredentials: true
    }).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}
// post
export function post(url, parameter) {
  return new Promise((resolve,reject)=>{
    service({
      url: url,
      method: 'post',
      data: qs.stringify(parameter),
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true,
    }).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}

//upload
export function uploadPost(url, parameter) {
  return new Promise((resolve,reject)=>{
    service({
      url: url,
      method: 'post',
      data: parameter,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true,
    }).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}

//downLoad
export function downLoadGet(url, parameter) {
    return service({
        url: url,
        method: 'get',
        responseType: 'blob',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        withCredentials: true,
    })
}
