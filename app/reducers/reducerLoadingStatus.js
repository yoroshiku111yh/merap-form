import * as types from '../actions/actionTypes';

function loading(state = false, {type, value}){
    switch(type){
        case types.UPDATE_STATUS_LOADING:
            return value;
        default :
            return state;
    }
}

export default loading;