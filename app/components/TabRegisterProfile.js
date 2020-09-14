import React, { useState, useEffect } from 'react';
import PopupWelcome from './FillProfilePopup';
import FillProfile from './FillProfile';
import { LOCAL_STORAGE_KEY } from '../initialize';
import useStateLocalStorage from '../hook/localStorage';
const TabRegisterProfile = ({
    getProvinces,
    provinces,
    districts,
    profile,
    setProvince,
    setDistrict,
    setIDCARD,
    setFacebookID,
    setEmail,
    setCompanyName,
    setCompanyAddress,
    setAcceptTerm,
    submit,
    loading,
    localStorageLogin
}) => {
    const [isFormActive, setFormActive] = useState(false);
    useEffect(() => {
        getProvinces();
    }, []);
    const [dataStorageLogin, setDataStorageLogin] = useStateLocalStorage(LOCAL_STORAGE_KEY.USER_LOGIN);
    let obj_storage;
    if(dataStorageLogin){
        obj_storage = JSON.parse(dataStorageLogin);
    }
    else if(localStorageLogin){
        obj_storage = localStorageLogin;
    }
    if (!isFormActive) {
        return (
            <PopupWelcome user = {obj_storage} onClick={() => { setFormActive(true) }} />
        )
    }
    else {
        return (
            <FillProfile
                provinces={provinces}
                districts={districts}
                profile={profile}
                setProvince={setProvince}
                setDistrict={setDistrict}
                setIDCARD={setIDCARD}
                setFacebookID={setFacebookID}
                setEmail={setEmail}
                setCompanyName={setCompanyName}
                setCompanyAddress={setCompanyAddress}
                setAcceptTerm={setAcceptTerm}
                submit = {submit}
                loading = {loading}
            />
        )
    }
}

export default TabRegisterProfile;