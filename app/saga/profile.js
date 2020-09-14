import { put, call , select } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { postAPI, patchAPI } from '../api';
import { getLocalStorage, LIST_TAB, LOCAL_STORAGE_KEY } from '../initialize';
const getFormProfile = (state) => state.profile;

export default function* postProfileCustomer(){
    try{
        yield put({type : types.UPDATE_STATUS_LOADING, value : true});
        let formProfile = yield select(getFormProfile);
        const storageLogin = JSON.parse(getLocalStorage(LOCAL_STORAGE_KEY.USER_LOGIN))
        const postProfile = Object.assign({}, formProfile);
        delete postProfile.error;
        delete postProfile.accept_term;
        postProfile.id_customer = storageLogin.id;
        postProfile.district = formProfile["district"].text;
        postProfile.province = formProfile["province"].text;
        
        const response = yield call(postAPI, {body : postProfile, suffixUrl : "/profiles"});
        if(!response.error){
            const put_response = yield call(patchAPI, {body : {"profile" : true}, suffixUrl : "/customers" + '/' + storageLogin._id});
            if(put_response.error){
                yield put({ type: types.UPDATE_ERROR_STATUS_PROFILE, value: response.error });
            }
            else{
                const dataLocalStorage = {
                    "fullname" : storageLogin.fullname,
                    "id" : storageLogin.id,
                    "_id" : storageLogin._id,
                    "profile" : true
                }
                yield put({type : types.SET_LOCAL_STORAGE_LOGIN, value : dataLocalStorage});
            }
        }
        else{
            yield put({ type: types.UPDATE_ERROR_STATUS_PROFILE, value: response.error });
        }
        yield put({type : types.UPDATE_STATUS_LOADING, value : false});
    }
    catch(e){
        console.error(e);
    }
}