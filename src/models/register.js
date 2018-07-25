import {register} from '../services/api';
import {Toast} from 'antd-mobile'
import {routerRedux} from 'dva/router'

export default {
    namespace: 'register',
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
        },
    },
    effects: {
        *register(_,{ call, put ,select }) {
            const _payload = yield select(state => state.register);
            const code = yield select(state => state.code.code);
            const re_payload = {..._payload,code}
            const response = yield call(register,re_payload);
            let  message = response.data.message;
            Toast.info(message, 1,()=>{
                // code
            });

            // if(){
            //     yield put(routerRedux.push('/login'));
            // }
        },
    }
};


