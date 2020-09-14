import React from 'react';
import { LOCAL_STORAGE_KEY } from '../initialize';
import useStateLocalStorage from '../hook/localStorage';
const PopupEndStage = () => {
    const [ dataLocalStorage, setDataLocalStorage, clearData ] = useStateLocalStorage(LOCAL_STORAGE_KEY.USER_LOGIN);
    return (
        <article className="profile__guide active" id="profile-guide">
            <p className="profile__guide--text">
                Cảm ơn bạn đã điền đầy đủ thông tin. <br/>
                Test case study kết thúc tại đây.
            </p>
            <button className="submit__button green__button submit__button--register" onClick={() => { clearData(); window.location.reload(false);}}>
                <p className="core">ĐĂNG XUẤT</p>
            </button>
        </article>
    )
}

export default PopupEndStage;