import "regenerator-runtime/runtime";

import "regenerator-runtime/runtime";
import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import loginCustomer from './login';
import registerCustomer from './register';
import sagaProvinces from './provinces';
import sagaDistricts from './districts';
import postProfileCustomer from './profile';
export default function* rootSaga(){
    yield all([
        takeLatest(types.LOGIN, loginCustomer),
        takeLatest(types.REGISTER, registerCustomer),
        takeLatest(types.GET_PROVINCES, sagaProvinces),
        takeLatest(types.GET_DISTRICTS, sagaDistricts),
        takeLatest(types.POST_PROFILE, postProfileCustomer)
    ]);
}