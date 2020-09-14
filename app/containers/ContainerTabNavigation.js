import { connect } from 'react-redux';
import { setTabActive } from '../actions';
import TabNavigation from '../components/TabNavigation';


const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        switchTab : (tab) => {
            dispatch(setTabActive(tab));
        }
    };
}

const mapStateToProps = (state, props) =>{
    return state;
}

const TabNavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TabNavigation);

export default TabNavigationContainer;
