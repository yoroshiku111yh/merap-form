import * as types from '../actions/actionTypes';
import { DATA_FORM_LOGIN } from '../initialize';

function login(state = DATA_FORM_LOGIN, {type, value}){
    switch (type){
        case types.UPDATE_PHONE_LOGIN:
            return Object.assign({}, state, {phone : value.toString()});
        case types.UPDATE_ERROR_STATUS_LOGIN:
            return Object.assign({}, state, {error : value});
        default :
            return state;
    }
}

export default login;