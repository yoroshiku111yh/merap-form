import * as types from '../actions/actionTypes';
import {DATA_FORM_FILL_PROFILE} from '../initialize';
function profile(state = DATA_FORM_FILL_PROFILE, {type, value}){
    switch (type){
        case types.UPDATE_PROFILE :
            return Object.assign({}, state, value);
        case types.UPDATE_PROFILE_PROVINCE : 
            return Object.assign({}, state, {"province" : value});
        case types.UPDATE_PROFILE_DISTRICT : 
            return Object.assign({}, state, {"district" : value});
        case types.UPDATE_ERROR_STATUS_PROFILE :
            return Object.assign({}, state, {"error" : value});
        default :
            return state;
    }
}

export default profile;