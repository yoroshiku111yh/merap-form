import React, {useState, useEffect} from 'react';
import DropDown from './DropDown';
import Input from './Input';
import { generatorArrayProvinces } from '../initialize/generator';
const FillProfile = ({
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
    loading
}) => {
    const [isError, setError] = useState(false);
    const { province, district, cmnd, facebook_id, email, company_name, company_address, accept_term, error } = profile;
    const provinceChoice = { text: !province.text ? "Tỉnh/Thành Phố" : province.text, value: province.id };
    const districtChoice = { text: !district.text ? "Quận/Huyện" : district.text, value: district.id };
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
    }, [profile, loading]);
    const submitFn = () => {
        submit(profile);
        if (!isError) {
            setError(true);
        }
    }
    return (
        <div className="profile">
            <article className="register content__article">
                <div className="block cmnd">
                    <p className="field__label">SỐ CMND (QUAY SỐ MAY MẮN)<span className="asterisk">*</span></p>
                    <Input className="field__input" fnc={setIDCARD} val={cmnd} placeholder="" />
                </div>
                <div className="inline__block nickfb">
                    <p className="field__label">NICK FACEBOOK (LIÊN HỆ TRAO GIẢI)<span className="asterisk">*</span></p>
                    <Input className="field__input" fnc={setFacebookID} val={facebook_id} placeholder="" />
                </div>
                <div className="inline__block email">
                    <p className="field__label">EMAIL (LIÊN HỆ TRAO GIẢI)<span className="asterisk">*</span></p>
                    <Input className="field__input" fnc={setEmail} val={email} placeholder="" />
                </div>
                <p className="block form__section form__section--work">Địa chỉ nhà thuốc đang công tác (GỬI QUÀ)<span className="asterisk">*</span></p>
                <div className="inline__block work__city">
                    <p className="field__label">TỈNH/THÀNH PHỐ<span className="asterisk">*</span></p>
                    <div className="work__city dropdown">
                        <DropDown array={generatorArrayProvinces(provinces)} onClick={setProvince} value={provinceChoice} />
                    </div>
                </div>
                <div className="inline__block work__dist">
                    <p className="field__label">QUẬN/HUYỆN<span className="asterisk">*</span></p>
                    <div className="work__dist dropdown">
                        <DropDown array={generatorArrayProvinces(districts)} onClick={setDistrict} value={districtChoice} />
                    </div>
                </div>
                <div className="block store">
                    <p className="field__label">TÊN NHÀ THUỐC...<span className="asterisk">*</span></p>
                    <Input className="field__input" fnc={setCompanyName} val={company_name} placeholder="" />
                </div>
                <div className="block address">
                    <p className="field__label">SỐ NHÀ, TÊN ĐƯỜNG, PHƯỜNG/XÃ...<span className="asterisk">*</span></p>
                    <Input className="field__input" fnc={setCompanyAddress} val={company_address} placeholder="" />
                </div>
                <p className="block note note--address">MERAPGroup chỉ sử dụng địa chỉ nhà thuốc đã cung cấp để trao
                giải thưởng. Thông tin của bạn sẽ được bảo mật và chỉ sử dụng trong khuôn khổ của chương
                trình.
                </p>
                <div className="block agreement">
                    <input type="checkbox" required="" id="agreement-checkbox" onChange={(e) => { setAcceptTerm(e.target.checked) }} defaultChecked={accept_term} />
                    <label htmlFor="agreement-checkbox">Tôi đã đọc và đồng ý với <span className="blue">thể lệ cuộc thi
                                    và điều khoản của chương trình</span></label>
                </div>
                <p className="error__message" style={{ "opacity": isError ? "1" : 0 }}>{error ? error : " "}</p>
                <button className="submit__button green__button submit__button--register" id="profile-button" onClick={submitFn}>
                    <p className="core">HOÀN TẤT</p>
                </button>
                <div className={classLoading}>
                    <div className="load-circle active"></div>
                </div>
            </article>
        </div>
    );
}

export default FillProfile;