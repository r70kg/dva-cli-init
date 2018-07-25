import {getApiNewsoneList} from "../services/api";

export default {
    namespace: 'app',
    state:{
        isLoading:true
    },
    reducers: {
        isLoading(state,action) {
            return {
                ...state,
                isLoading:action.payload.isLoading
            };
        },
    },
    effects: {

    },
};


