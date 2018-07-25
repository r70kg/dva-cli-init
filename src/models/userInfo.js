import {getApiCompanyListInfo, login,updateUserInfo} from '../services/api';
import {Toast} from 'antd-mobile'
import {routerRedux} from 'dva/router'
import {setToken,getToken} from '../utils/localstorage'

export default {
    namespace: 'userInfo',
    state:{
        isAuth:false
    },
    reducers: {
        userInfo(state,{payload}){
            // setToken(payload)  // 设置本地
            return {
                ...state,...payload,
            }
        },
        LoginSetInfo(state,{payload}) {
            setToken(payload||"")
            return {
                isAuth:true,
                ...payload
            };
        },
        // 判断登陆
        isAuthHandle(state,{payload}){
            return {
                ...state,
                isAuth:payload
            }
        }
    },
    effects: {
        *isAuth(_, { call, put }) {
            yield put({
                type:'isAuthHandle',
                payload:getToken()?true:false
            })
            if(!getToken()){
                yield put(routerRedux.push('./login'))
            }
        },
        // 获取/更新用户信息
        *updateUserInfo(_, { call, put }){
            const response = yield call(updateUserInfo);
            const data = response.data;
            yield put({
                type:"userInfo",
                payload:data.data
            })
        }
    }
};


