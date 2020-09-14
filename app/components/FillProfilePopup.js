import React from 'react';
const PopupWelcome = ({onClick, user}) => {
    return (
        <article className="profile__guide active" id="profile-guide">
            <p className="profile__guide--text">
                Hi bạn {user.fullname}<br/>
                Điền thêm thông tin để tham gia quay số trúng thưởng bạn nhé!
            </p>
            <button className="submit__button green__button submit__button--register" id="guide-button" onClick={onClick}>
                <p className="core">OK</p>
            </button>
        </article>
    )
}

export default PopupWelcome;