import * as types from './actionTypes';

export function updateRegisterForm(objInput){
    return {
        type : types.UPDATE_FORM_REGISTER,
        value : objInput
    }
}

export function updateRegisterBirthday(objDate){
    return{
        type : types.UPDATE_BIRTHDAY_REGISTER,
        value : objDate
    }
}

export function updateRegisterError(errorText){
    return{
        type : types.UPDATE_ERROR_STATUS_REGISTER,
        value : errorText
    }
}

export function updateStatusLoading(isLoading){
    return{
        type : types.UPDATE_STATUS_LOADING,
        value : isLoading
    }
}

export function setTabActive(tabActive){
    return{
        type : types.SET_TAB_ACTIVE,
        value : tabActive
    }
}

export function updatePhoneLogin(phone){
    return{
        type : types.UPDATE_PHONE_LOGIN,
        value : phone
    }
}

export function updateLoginError(errorText){
    return {
        type : types.UPDATE_ERROR_STATUS_LOGIN,
        value : errorText
    }
}

export function updateProfileError(errorText){
    return{
        type : types.UPDATE_ERROR_STATUS_PROFILE,
        value : errorText
    }
}