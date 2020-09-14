import React, { useState, useEffect } from 'react';
import Input from './Input';
const TabLogin = ({submit, login, setPhone, loading}) => {
    const { phone, error } = login;
    const classLoading = loading ? "load-screen active" : "load-screen"; 
    const [isError, setError] = useState(false);
    useEffect(() => {
        let timeout;
        if (isError) {
            timeout = setTimeout(() => {
                setError(false);
                clearTimeout(timeout)
            }, 2000);
        }
        return function cleanup(){ // unsubscribe when componentWillUnmount 
            /**/
            clearTimeout(timeout);
        }
    }, [login, loading]);
    const submitFn = () => {
        submit(phone);
        if (!isError) {
            setError(true);
        }
    }
    return (
        <article className="registration__holder active login content__article">
            <h2 className="login__welcome">
                Chào mừng bạn quay lại!<br />
                Hãy điền số điện thoại để đăng nhập
            </h2>
            <label htmlFor="login-phone">SỐ ĐIỆN THOẠI<span className="asterisk">*</span></label>
            <Input className="field__input login__input" fnc={setPhone} val={phone} placeholder="Đăng nhập số điện thoại" />
            <p className="error__message" style={{ "opacity": isError ? "1" : 0 }}>{error ? error : " "}</p>
            <button className="submit__button green__button submit__button--login" onClick={submitFn}>
                <p className="core">TIẾP TỤC</p>
            </button>
            <div className={classLoading}>
                <div className="load-circle active"></div>
            </div>
        </article>
    );
}

export default TabLogin;