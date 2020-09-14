
export const ENVIROMENTS = {
    "TEST" : "TEST",
    "PRODUCT" : "PRODUCT"
}

export const ENVIROMENT = ENVIROMENTS.PRODUCT;


export const API = {
    BASE_URL : ENVIROMENT === ENVIROMENTS.TEST ? "http://localhost:8010/proxy" : "https://merap-7d8d.restdb.io/rest",
    API_KEY  : "5f569144c5e01c1e033b8d29",
    URL_OTHER : ENVIROMENT === ENVIROMENTS.TEST ? "http://localhost:8011/proxy" : "http://ngodungcan.website/merap/2020/api"
}

export const DATA_FORM_REGISTER = {
    "fullname" : "",
    "gender" : "",
    "birthday" : {
        "day" : "",
        "month" : "",
        "year" : ""
    },
    "role" : "",
    "phone" : "",
    "error" : ""
}

export const DATA_FORM_FILL_PROFILE = {
    "cmnd" : "",
    "facebook_id" : "",
    "email" : "",
    "province" : {
        "text" : "",
        "id" : ""
    },
    "district" : {
        "text" : "",
        "id" : ""
    },
    "company_name" : "",
    "company_address" : "",
    "error" : "",
    "accept_term" : false
}

export const DATA_FORM_LOGIN = {
    "error" : "",
    "phone" : ""
}

export const ARRAY_TEXT_ERROR = {
    "role" : "vui lòng chọn vị trí công việc của bạn",
    "gender" : "vui lòng chọn giới tính của bạn",
    "fullname" : "Vui lòng nhập họ và tên",
    "birthday" : "Vui lòng chọn ngày tháng năm sinh",
    "phone" : "Vui lòng nhập đúng số điện thoại của bạn",
    "cmnd" : "Vui lòng nhập đúng số CMND",
    "facebook" : "Vui lòng nhập nick Facebook để liên hệ trao giải",
    "email" : "Vui lòng nhập đúng địa chỉ Email",
    "area" : "Vui lòng chọn khu vực",
    "companyName" : "Vui lòng điên tên nhà thuốc",
    "companyAddress" : "Vui lòng điền địa chỉ nhà thuốc",
    "term" : "Vui lòng đồng ý điều khoản, thể lệ chương trình"
}

export const LIST_TAB = {
    "REGISTER" : "REGISTER",
    "LOGIN" : "LOGIN",
    "REGISTER_PROFILE" : "REGISTER_PROFILE",
    "END_STAGE" : "END_STAGE"
};
export const TAB_ACTIVE = LIST_TAB.LOGIN;

export const REGEX_PHONE = /^[0-9]{10}$/;

export const REGEX_NUMBER = /^[0-9]*$/;

export const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const LOCAL_STORAGE_KEY = {
    USER_LOGIN : "localStorageUserMerap"
}

export const getLocalStorage = (localStorageKey) => {
    return localStorage.getItem(localStorageKey);
}

export const setLocalStorage = (localStorageKey, value) => {
    return localStorage.setItem(localStorageKey, value);
}