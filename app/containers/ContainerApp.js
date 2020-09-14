import { connect } from 'react-redux';
import WrapperApp from '../components/WrapperApp';
import * as types from '../actions/actionTypes';
import { setTabActive } from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        switchTab : (tab) => {
            dispatch(setTabActive(tab));
        }
    };
}

const mapStateToProps = (state, rpops) =>{
    return state;
}

const WrapperAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WrapperApp);

export default WrapperAppContainer;
