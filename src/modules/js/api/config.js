/**
 * Created by Orainsink on 2019/3/11.
 * 基地址 和 Axios 方法二次封装
 */

import axios from 'axios'
//基地址
const baseURL = 'http://rap2api.taobao.org/app/mock/7058'

//通用方法
export const POST = (url, params) => {
    console.log('in_post:',params)
    return axios.post(`${baseURL}${url}`, params,{
        headers: {}
    }).then(res => res.data)
}

export const GET = (url, params) => {
    console.log('in_post:',params)
    return axios.get(`${baseURL}${url}`, {
        params: params,
        headers: {}
    }).then(res => res.data)
}

export const DELETE = (url, params) => {
    console.log('in_post:',params)
    return axios.delete(`${baseURL}${url}`, {
        params: params,
        headers: {}
    }).then(res => res.data)
}
