import { combineReducers } from 'redux';
import register from './reducerRegister';
import loading from './reducerLoadingStatus';
import tabActive from './reducerTab';
import login from './reducerLogin';
import localStorageLogin from './reducerLocalStorageLogin';
import districts from './reducerDistricts';
import provinces from './reducerProvinces';
import profile from './reducerProfile';
export default combineReducers({
    register,
    loading,
    tabActive,
    login,
    localStorageLogin,
    districts,
    provinces,
    profile
});