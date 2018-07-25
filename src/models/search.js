import {getCompanyKeywordsListInfo,getApiCompanyListInfo} from '../services/api';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import {routerRedux} from 'dva/router'


export default {
    namespace: 'search',
    state: {
        HotKeyList:[],
        HisKeyList:[],
        searchRes:[]
    },
    reducers: {
        HotKeyList(state, {payload}) {
            return {
                ...state,
                HotKeyList:payload
            };
        },
        HisKeyList(state, {payload}) {
            console.log(payload)
            return {
                ...state,
                HisKeyList:payload
            };
        },
        // 搜索列表 searchRes页
        searchres(state, {payload}){
            return {
                ...state,
                searchRes:payload
            };
        }

    },
    effects: {
        // 获取搜索关键词
        *getCompanyKeywordsListInfo(_, {call, put, select}){
            const response = yield call(getCompanyKeywordsListInfo);
            const data = response.data;
            yield put({
                type:"HotKeyList",
                payload:data.data
            })
        },
        // 搜索列表 searchRes页
        *getApiCompanyListInfo({payload}, {call, put, select}){
            const response = yield call(getApiCompanyListInfo,payload.payload);
            const data = response.data;
            yield put({
                type:"searchres",
                payload:data.data.companyList
            })

            // 区分不同搜索页,判断是否需要跳转
            payload.isGo ? yield put(routerRedux.push('/searchres')) :null

        }
    }
};


