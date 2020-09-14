import * as types from '../actions/actionTypes';

function localStorageLogin(state = null, {type, value}){
    switch(type){
        case types.SET_LOCAL_STORAGE_LOGIN:
            return value;
        default :
            return state;
    }
}

export default localStorageLogin;