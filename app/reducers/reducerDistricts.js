import * as types from '../actions/actionTypes';

function districts(state = [], {type, value}){
    switch (type){
        case types.SET_DISTRICTS :
            return value;
        default :
            return state;
    }
}

export default districts;