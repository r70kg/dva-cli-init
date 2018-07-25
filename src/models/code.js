import {login,sendMsg} from '../services/api';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';


export default {
    namespace: 'code',
    state: {
    },
    reducers: {
        codeInfo(state, action) {
            return {
                ...state,
                ...action.payload
            };
        }
    },
    effects: {
        * Login(_, {call, put, select}) {
            const _payload = yield select(state => state.LoginData);
            console.log(_payload)
            const response = yield call(login, _payload);
            // console.log(response)
            // let  data = response.data.data
            // yield put({
            //     type: 'saveList',
            //     payload: Array.isArray(data) ? data : [],
            // });
        },
        // 发送验证码
        *sendMsg(payload, {call, put, select}){
            const response = yield call(sendMsg, payload.payload.param);
            const func =  payload.payload.func;
            const data = response.data
                Toast.info(data.message, 1);
            if(data.code==="1000"){
                func()
            }
        }
    }
};


