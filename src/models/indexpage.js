import { getIndexListInfo,getRecommendListInfo } from '../services/api';

export default {
    namespace: 'indexpage',
    state:{
        banerList:[],
        activityList:[],
        categoryList:[],
        companyList:[],
        RecommendListInfo:[]
    },
    reducers: {
        saveInfo(state,{payload}){
            return {
                ...state,
                ...payload.data
            }
        },
        saveRecommend(state,{payload}){
            console.log(payload)
            return {
                ...state,
                RecommendListInfo:payload
            }
        }
    },
    effects: {
        *getIndexListInfo(_, { call, put }) {
            const response = yield call(getIndexListInfo);
            yield put({
                type: 'saveInfo',
                payload:response.data
            });
        },
        *getRecommendListInfo({payload},{ call, put }){
            const response = yield call(getRecommendListInfo,payload);
            yield put({
                type: 'saveRecommend',
                payload:response.data.data
            })
        }
    },
};


