import { put, call } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { getListArea } from '../api';

export default function* sagaProvinces(){
    try{
        yield put({type : types.UPDATE_STATUS_LOADING, value : true});
        const response = yield call(getListArea);
        if(!response.error){
            yield put({type : types.SET_PROVINCES , value : response});
        }
        else{
            console.error('--- fetching province ---');
            console.error(response.error);
        }
        yield put({type : types.UPDATE_STATUS_LOADING, value : false});
    }
    catch(e){
        console.error(e);
    }
}