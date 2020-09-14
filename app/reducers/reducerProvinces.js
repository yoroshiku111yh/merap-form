import * as types from '../actions/actionTypes';

function provinces(state = [], {type, value}){
    switch (type){
        case types.SET_PROVINCES :
            return value;
        default :
            return state;
    }
}

export default provinces;