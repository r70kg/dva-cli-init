import {getApiNewsoneList} from "../services/api";

export default {
    namespace: 'zx',
    state:{
        zxList:[]
    },
    reducers: {
        saveList(state,action) {
            return {
                ...state,
                zxList:action.payload
            };
        },
    },
    effects: {
        *getApiNewsoneList({payload}, { call, put }) {
            const response = yield call(getApiNewsoneList,payload);
            let  data = response.data.data
            yield put({
                type: 'saveList',
                payload: Array.isArray(data) ? data : [],
            });
        },
    },
};


