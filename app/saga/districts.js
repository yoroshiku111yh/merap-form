import { put, call, select } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { getListArea } from '../api';

const getFormProfile = (state) => state.profile;

export default function* sagaDistricts() {
    try {
        yield put({ type: types.UPDATE_STATUS_LOADING, value: true });
        let profileForm = yield select(getFormProfile);
        const { province } = profileForm;
        const response = yield call(getListArea, province.id);
        if (!response.error) {
            yield put({type : types.SET_DISTRICTS, value : response});
        }
        else {
            console.error('--- fetching province ---');
            console.error(response.error);
        }
        yield put({ type: types.UPDATE_STATUS_LOADING, value: false });
    }
    catch (e) {
        console.error(e);
    }
}