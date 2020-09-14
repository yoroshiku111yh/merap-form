import { put, call, select } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { postAPI } from '../api';
import { LIST_TAB } from '../initialize';

const getFormRegister = (state) => state.register;

export default function* registerCustomer() {
    try {
        yield put({ type: types.UPDATE_STATUS_LOADING, value: true });
        let registerForm = yield select(getFormRegister);
        registerForm = Object.assign({}, registerForm);
        const { birthday } = registerForm;
        registerForm.birthday = `${birthday.day}/${birthday.month}/${birthday.year}`;
        delete registerForm.error;
        const response = yield call(postAPI, {body : registerForm, suffixUrl : '/customers'});
        if (!response.error) {
            /**/
            const dataLocalStorage = {
                "fullname": response.fullname,
                "id": response.id,
                "_id": response._id
            }
            yield put({ type: types.SET_LOCAL_STORAGE_LOGIN, value: dataLocalStorage });
        }
        else {
            yield put({ type: types.UPDATE_ERROR_STATUS_REGISTER, value: response.error });
        }
        yield put({ type: types.UPDATE_STATUS_LOADING, value: false });
    }
    catch (e) {
        console.error(e);
    }
}