import {TAB_ACTIVE} from '../initialize';
import * as types from '../actions/actionTypes';

function tabActive(state = TAB_ACTIVE, {type, value}){
    switch (type){
        case types.SET_TAB_ACTIVE:
            return value;
        default :
            return state;
    }
}

export default tabActive;