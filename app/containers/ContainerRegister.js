import { connect } from 'react-redux';
import TabRegister from '../components/TabRegister';
import { updateRegisterForm, updateRegisterBirthday, updateRegisterError } from '../actions';
import { REGEX_PHONE, ARRAY_TEXT_ERROR } from '../initialize';
import * as types from '../actions/actionTypes';
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setFullname: (fullname) => {
            const obj = { "fullname": fullname };
            dispatch(updateRegisterForm(obj));
        },
        setPhone: (phoneNumber) => {
            const obj = { "phone": phoneNumber };
            dispatch(updateRegisterForm(obj));
        },
        setGender: (gender) => {
            const obj = { "gender": gender };
            dispatch(updateRegisterForm(obj));
        },
        setRole: (role) => {
            const obj = { "role": role };
            dispatch(updateRegisterForm(obj));
        },
        setBirthDay: ({value}) => {
            const obj = {
                "day": value
            };
            dispatch(updateRegisterBirthday(obj));
        },
        setBirthMonth: ({value}) => {
            const obj = {
                "month": value
            };
            dispatch(updateRegisterBirthday(obj));
        },
        setBirthYear: ({value}) => {
            const obj = {
                "year": value
            };
            dispatch(updateRegisterBirthday(obj));
        },
        submit: (obj) => {
            const validResult = isValid(obj, required);
            dispatch(updateRegisterError(validResult.text));
            if(validResult.isValid){
                dispatch({"type" : types.REGISTER});
            }
        },
        login:() => {
            dispatch({"type" : types.LOGIN})
        }
    };
}

const isValid = (object, required) => {
    let result = {
        text: "",
        isValid: true
    }
    for (const property in object) {
        result = {
            text: "",
            isValid: true
        }
        if (required.indexOf(property) === -1) continue;
        const item = object[property];
        if (item.toString().trim().length === 0) {
            result = {
                text: getErrorText(property),
                isValid: false
            }
            break;
        }
        if (property === "phone") {
            const phoneNumber = item.trim();
            if (!REGEX_PHONE.test(phoneNumber)) {
                result = {
                    text: getErrorText(property),
                    isValid: false
                }
                break;
            }
        }
        if (property === "birthday") {
            if (item.day === "" || item.month === "" || item.year === "") {
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

const required = [
    "fullname",
    "gender",
    "birthday",
    "role",
    "phone",
]

const getErrorText = (type) => {
    switch (type) {
        case 'fullname':
            return ARRAY_TEXT_ERROR.fullname;
        case 'gender':
            return ARRAY_TEXT_ERROR.gender;
        case 'role':
            return ARRAY_TEXT_ERROR.role;
        case 'birthday':
            return ARRAY_TEXT_ERROR.birthday;
        case 'phone':
            return ARRAY_TEXT_ERROR.phone;
        default:
            return "";
    }
}

const mapStateToProps = (state, props) => {
    return state;
}

const TabRegisterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TabRegister);

export default TabRegisterContainer;