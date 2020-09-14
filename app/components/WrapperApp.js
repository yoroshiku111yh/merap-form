import React, { useEffect } from 'react';
import TabRegisterContainer from '../containers/ContainerRegister';
import TabLoginContainer from '../containers/ContainerLogin';
import TabNavigationContainer from '../containers/ContainerTabNavigation';
import FillProfileContainer from '../containers/ContainerFillProfile';
import PopupEndStage from '../components/EndStage';
import { LIST_TAB, LOCAL_STORAGE_KEY } from '../initialize';
import useStateLocalStorage from '../hook/localStorage';


const tabRegister = <TabRegisterContainer />;
const tabLogin = <TabLoginContainer />;
const tabNav = <TabNavigationContainer />;
const tabRegisterProfile = <FillProfileContainer />;
const endStage = <PopupEndStage />

const WrapperApp = ({ tabActive, localStorageLogin, switchTab }) => {
    const [dataStorageLogin, setDataStorageLogin] = useStateLocalStorage(LOCAL_STORAGE_KEY.USER_LOGIN);
    let objLoginStorage;
    if (dataStorageLogin) {
        objLoginStorage = JSON.parse(dataStorageLogin);
        if (!objLoginStorage.profile) {
            switchTab(LIST_TAB.REGISTER_PROFILE);
        }
        else{
            switchTab(LIST_TAB.END_STAGE);
        }
    };
    useEffect(() => {
        if (localStorageLogin) {
            setDataStorageLogin(JSON.stringify(localStorageLogin));
            if (!localStorageLogin.profile) {
                switchTab(LIST_TAB.REGISTER_PROFILE);
            }
            else{
                switchTab(LIST_TAB.END_STAGE);
            }
        }
        return function cleanup() {
            /**/
        }
    }, [localStorageLogin]);
    let tabActivated = [];
    switch (tabActive) {
        case LIST_TAB.REGISTER:
            tabActivated = <>{tabNav} {tabRegister}</>;
            break;
        case LIST_TAB.LOGIN:
            tabActivated = <>{tabNav} {tabLogin}</>;
            break;
        case LIST_TAB.REGISTER_PROFILE:
            tabActivated = <>{tabRegisterProfile}</>;
            break;
        case LIST_TAB.END_STAGE :
            tabActivated = <>{endStage}</>;
            break;
        default:
            tabActivated = <>{tabNav} {tabLogin}</>;
            break;
    }
    return (
        <div className="content__wrapper">
            <div className="registration content__container">
                <div className="content__logos">
                    <img src="./assets/images/merap-logo@2x.png" alt="" className="merap" />
                    <img src="./assets/images/chat-icon.png" alt="" className="chat" />
                </div>
                {tabActivated}
            </div>
        </div>
    );
}



export default WrapperApp;