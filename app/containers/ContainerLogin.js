import { connect } from 'react-redux';
import TabLogin from '../components/TabLogin';
import * as types from '../actions/actionTypes';
import { updateLoginError, updatePhoneLogin } from '../actions';
import { ARRAY_TEXT_ERROR, REGEX_PHONE } from '../initialize';

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        setPhone : (phone) => {
            dispatch(updatePhoneLogin(phone));
        },
        submit : (phone) => {
            const res = validateLogin(phone);
            dispatch(updateLoginError(res.text));
            if(res.isValid){
                dispatch({"type" : types.LOGIN});
            }
        }
    };
}

const mapStateToProps = (state, props) =>{
    return state;
}

const validateLogin = (phone) => {
    let result = {
        "text" : "",
        "isValid" : true
    }
    if(phone.trim().length === 0 || !REGEX_PHONE.test(phone)){
        result = {
            "text" : ARRAY_TEXT_ERROR.phone,
            "isValid" : false
        }
    }
    return result;
}


const TabLoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TabLogin);

export default TabLoginContainer;
