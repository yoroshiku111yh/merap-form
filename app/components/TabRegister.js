import React, { useEffect, useState } from 'react';
import Input from './Input';
import Radio from './Radio';
import DropDown from './DropDown';
import { generatorArrayDays, generatorArrayMonths, generatorArrayYears } from '../initialize/generator';
const AR_GENDER = [
    {
        "className": "input__radio circle__radio",
        "value": "male",
        "label": "Nam",
        "id": "male",
        "name": "gender"
    },
    {
        "className": "input__radio circle__radio",
        "value": "female",
        "label": "Nữ",
        "id": "female",
        "name": "gender"
    }
]

const AR_ROLE = [
    {
        "className": "input__radio career__radio",
        "value": "owner",
        "label": "Chủ nhà thuốc",
        "id": "owner",
        "name": "role"
    },
    {
        "className": "input__radio career__radio",
        "value": "staff",
        "label": "Nhân viên bán thuốc",
        "id": "staff",
        "name": "role"
    }
]

function RadioList({ fnc, checkedVal, array }) {
    let list = array.map((val, index) => {
        return (
            <Radio key={index} fnc={fnc} checked={checkedVal === val.value} className={val.className} id={val.id} label={val.label} val={val.value} name={val.name} />
        )
    })
    return list;
}

const TabRegister = ({
    register,
    setRole,
    setGender,
    setFullname,
    setPhone,
    setBirthDay,
    setBirthMonth,
    setBirthYear,
    submit,
    loading
}) => {
    const [isError, setError] = useState(false);
    const { fullname, phone, gender, role, birthday, error } = register;
    const day = { text: birthday.day === "" ? "Ngày" : birthday.day, value: birthday.day };
    const month = { text: birthday.month === "" ? "Tháng" : birthday.month, value: birthday.month };
    const year = { text: birthday.year === "" ? "Năm" : birthday.year, value: birthday.year };
    const classLoading = loading ? "load-screen active" : "load-screen"; 
    useEffect(() => {
        let timeout;
        if (isError && !loading) {
            timeout = setTimeout(() => {
                setError(false);
                clearTimeout(timeout)
            }, 2000);
        }
        return function cleanup(){ // unsubscribe when componentWillUnmount 
            /**/
            clearTimeout(timeout);
        }
    }, [register, loading]);
    const submitFn = () => {
        submit(register);
        if (!isError) {
            setError(true);
        }
    }
    return (
        <article className="registration__holder register active content__article">
            <p className="reminder">
                NẾU BẠN ĐÃ TẠO TÀI KHOẢN,<br /> VUI LÒNG BẤM <span className="reminder--login" id="reminder-login">ĐĂNG NHẬP.</span>
            </p>
            <div className="inline__block career">
                <span>Bạn là</span>
                <RadioList fnc={setRole} checkedVal={role} array={AR_ROLE} />
            </div>
            <div className="inline__block gender">
                <RadioList fnc={setGender} checkedVal={gender} array={AR_GENDER} />
            </div>
            <div className="block fullname">
                <p className="field__label">HỌ VÀ TÊN <span className="asterisk">*</span></p>
                <Input className="field__input" fnc={setFullname} val={fullname} placeholder="" />
            </div>
            <div className="block dob">
                <p className="field__label">NGÀY/THÁNG/NĂM SINH<span className="asterisk">*</span></p>
                <div className="dob__day dropdown">
                    <DropDown array={generatorArrayDays()} onClick={setBirthDay} value={day} />
                </div>
                <div className="dob__month dropdown">
                    <DropDown array={generatorArrayMonths()} onClick={setBirthMonth} value={month} />
                </div>
                <div className="dob__year dropdown">
                    <DropDown array={generatorArrayYears()} onClick={setBirthYear} value={year} />
                </div>
            </div>
            <div className="block fullname">
                <p className="field__label">SỐ ĐIỆN THOẠI <span className="asterisk">*</span></p>
                <Input className="field__input" fnc={setPhone} val={phone} placeholder="" />
            </div>
            <p className="error__message" style={{ "opacity": isError ? "1" : 0 }}>{error ? error : " "}</p>
            <button className="submit__button green__button submit__button--register" id="register-button" onClick={ submitFn }>
                <p className="core">TIẾP TỤC</p>
            </button>
            <div className={classLoading}>
                <div className="load-circle active"></div>
            </div>
        </article>
    );
}


export default TabRegister;