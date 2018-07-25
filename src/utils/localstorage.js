import store from 'storejs'

export function setToken(payload){
    store.set('token',payload.token)
}

export function getToken(){
    return store.get('token');
}

export function removeInfo(){
    return store.remove('token');
}