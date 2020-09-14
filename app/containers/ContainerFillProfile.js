import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';
import { setTabActive, updateProfileError } from '../actions';
import TabRegisterProfile from '../components/TabRegisterProfile';
import { ARRAY_TEXT_ERROR, REGEX_EMAIL, REGEX_NUMBER } from '../initialize';
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        switchTab: (tab) => {
            dispatch(setTabActive(tab));
        },
        getProvinces: () => {
            dispatch({ type: types.GET_PROVINCES });
        },
        setProvince: ({ text, value }) => {
            dispatch({ type: types.UPDATE_PROFILE_DISTRICT, value: { text: "", id: "" } });
            dispatch({ type: types.UPDATE_PROFILE_PROVINCE, value: { text: text, id: value } });
            dispatch({ type: types.GET_DISTRICTS });
        },
        setDistrict: ({ text, value }) => {
            dispatch({ type: types.UPDATE_PROFILE_DISTRICT, value: { text: text, id: value } });
        },
        setIDCARD: (idCard) => {
            dispatch({ type: types.UPDATE_PROFILE, value: { "cmnd": idCard } });
        },
        setFacebookID: (idFb) => {
            dispatch({ type: types.UPDATE_PROFILE, value: { "facebook_id": idFb } });
        },
        setEmail: (email) => {
            dispatch({ type: types.UPDATE_PROFILE, value: { "email": email } });
        },
        setCompanyName: (companyName) => {
            dispatch({ type: types.UPDATE_PROFILE, value: { "company_name": companyName } });
        },
        setCompanyAddress: (companyAddress) => {
            dispatch({ type: types.UPDATE_PROFILE, value: { "company_address": companyAddress } });
        },
        setAcceptTerm: (isAccept) => {
            dispatch({ type: types.UPDATE_PROFILE, value: { "accept_term": isAccept } });
        },
        submit: (objProfile) => {
            const res = isValid(objProfile);
            dispatch(updateProfileError(res.text));
            if(res.isValid){
                dispatch({type : types.POST_PROFILE});
            }
        }
    };
}

const required = [
    "cmnd",
    "facebook_id",
    "email",
    "district",
    "province",
    "company_name",
    "company_address",
    "accept_term"
]

const isValid = (object) => {
    let result = {
        "text": "",
        "isValid": true
    };
    for (const property in object) {
        result = {
            "text": "",
            "isValid": true
        };
        if (required.indexOf(property) === -1) continue;
        const item = object[property];
        if (item.toString().trim().length === 0) {
            result = {
                text: getErrorText(property),
                isValid: false
            }
            break;
        }
        if(property === "email"){
            if(!REGEX_EMAIL.test(object[property])){
                result = {
                    text: getErrorText(property),
                    isValid: false
                }
                break;
            }
        }
        if(property === "cmnd"){
            if(!REGEX_NUMBER.test(object[property])){
                result = {
                    text: getErrorText(property),
                    isValid: false
                }
                break;
            }
        }
        if(property === "district" || property === "province"){
            if(object[property].id === ""){
                result = {
                    text: getErrorText(property),
                    isValid: false
                }
                break;
            }
        }
        if(property === "accept_term"){
            if(!object[property]){
                result = {
                    text: getErrorText(property),
                    isValid: false
                }
                break;
            }
        }
    }
    return result;
}

const getErrorText = (type) => {
    switch (type) {
        case 'cmnd':
            return ARRAY_TEXT_ERROR.cmnd;
        case 'facebook_id':
            return ARRAY_TEXT_ERROR.facebook;
        case 'email':
            return ARRAY_TEXT_ERROR.email;
        case 'district':
        case 'province':
            return ARRAY_TEXT_ERROR.area;
        case 'company_name' : 
            return ARRAY_TEXT_ERROR.companyName;
        case 'company_address' : 
            return ARRAY_TEXT_ERROR.companyAddress;
        case 'accept_term' : 
            return ARRAY_TEXT_ERROR.term;
        default:
            return "";
    }
}

const mapStateToProps = (state, props) => {
    return state;
}

const FillProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TabRegisterProfile);

export default FillProfileContainer;
