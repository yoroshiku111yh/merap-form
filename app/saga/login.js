import { put, call, select } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { getAPIWithQuery } from '../api';

const getFormLogin = (state) => state.login;

export default function* loginCustomer(){
    try{
        yield put({type : types.UPDATE_STATUS_LOADING, value : true});
        const loginForm = yield select(getFormLogin);
        const { phone } = loginForm;
        const response = yield call(getAPIWithQuery, {"query" : {"phone" : phone}, suffixUrl : "/customers"});
        if(!response.error){
            const user = response[0];
            const dataLocalStorage = {
                "fullname" : user.fullname,
                "id" : user.id,
                "_id" : user._id,
                "profile" : user.profile
            }
            yield put({type : types.SET_LOCAL_STORAGE_LOGIN, value : dataLocalStorage});
        }
        else{
            yield put({type : types.UPDATE_ERROR_STATUS_LOGIN, value : response.error});
        }
        yield put({type : types.UPDATE_STATUS_LOADING, value : false});
    }
    catch(e){
        console.error(e);
    }
}