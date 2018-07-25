import {login,logout} from '../services/api';
import {Toast} from 'antd-mobile'
import {routerRedux} from 'dva/router'
import {setToken,getToken,removeInfo} from '../utils/localstorage'

export default {
    namespace: 'LoginData',
    state:{
        user_mobile:"",
        user_password:""
    },
    reducers: {
        setInfo(state,action) {
            return {
                ...state,
                ...action.payload
            };
        }
    },
    effects: {
        *Login({payload},{ call, put ,select }) {
            const _payload = yield select(state => state.LoginData);
            const response = yield call(login,_payload);
            let  data = response.data.data
            let  code = response.data.code

            yield put({
                type: 'userInfo/LoginSetInfo',
                payload: data
            });

            if(code==='1000'){
                yield put(routerRedux.push(payload))
            }

        },
        *Logout(_,{ call, put }) {
            removeInfo();
            yield put(routerRedux.replace('/login'))
        },
    }
};


