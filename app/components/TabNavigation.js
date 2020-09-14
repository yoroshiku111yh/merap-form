import React from 'react';
import { LIST_TAB } from '../initialize';
const TabNavigation = ({switchTab, tabActive}) => {
    const classTabRegister = tabActive === LIST_TAB.REGISTER ? "tab__button tab__register active" : "tab__button tab__register";
    const classTabLogin = tabActive === LIST_TAB.LOGIN ? "tab__button tab__login active" : "tab__button tab__login";
    return (
        <div className="registration__tab">
            <h3 className={classTabLogin} id="tab-login" onClick={() => {switchTab(LIST_TAB.LOGIN) }}>Đăng nhập</h3>
            <div className="vertical__seperator"></div>
            <h3 className={classTabRegister} id="tab-register" onClick={() => {switchTab(LIST_TAB.REGISTER) }}>Đăng ký tài khoản</h3>
        </div>
    );
}

export default TabNavigation;