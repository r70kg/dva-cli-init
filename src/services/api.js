import { stringify } from 'qs';
import request from '../utils/request';

import {setToken,getToken} from '../utils/localstorage'

// 登陆
export async function login(params) {
    return request('Api/user/login', {
        method: 'post',
        body: stringify(params),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    });
}
// 退出
export async function logout(params) {
    return request('Api/user/login', {
        method: 'post',
        body: stringify(params),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    });
}



// 注册
export async function register(params) {
    return request('Api/user/reg', {
        method: 'post',
        body: stringify(params),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    });
}
// 发送短信
export async function sendMsg(params) {

    return request('Api/index/sms', {
        method: 'post',
        body: stringify(params),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    });
}

// 首页
export async function getIndexListInfo(params) {
    // http://47.93.57.18:8083/Api/index/getRecommendListInfo
    return request('Api/index/getIndexListInfo', {
        method: 'post',
        body: stringify(params),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

// 推荐信息
export async function getRecommendListInfo(params) {

    return request('Api/index/getRecommendListInfo', {
        method: 'post',
        body: stringify(params),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

// 搜索关键字
export async function getCompanyKeywordsListInfo() {

    return request('Api/company/getCompanyKeywordsListInfo', {
        method: 'post'
    });
}
// 搜索结果列表
export async function getApiCompanyListInfo(params) {
    return request('Api/company/getApiCompanyListInfo', {
        method: 'post',
        body: stringify(params),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}


// 个人中心部分 获取用户信息
export async function updateUserInfo() {
    return request('Api/user/updateUserInfo', {
        method: 'post',
        body:stringify({
            token:getToken()
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}



