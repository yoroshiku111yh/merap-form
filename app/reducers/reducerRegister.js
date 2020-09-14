import {DATA_FORM_REGISTER} from '../initialize';
import * as types from '../actions/actionTypes';

function register(state = DATA_FORM_REGISTER, {type, value}){
    switch (type){
        case types.UPDATE_FORM_REGISTER : 
            return Object.assign({}, state, value);
        case types.UPDATE_BIRTHDAY_REGISTER:
            let birthday = Object.assign({}, state.birthday, value);
            return Object.assign({}, state, {"birthday" : birthday});
        case types.UPDATE_ERROR_STATUS_REGISTER:
            return Object.assign({}, state, {"error" : value})
        default :
            return state;
    }
}

export default register;