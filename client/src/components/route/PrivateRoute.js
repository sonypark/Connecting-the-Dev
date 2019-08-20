import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// 로그인이 필요한 페이지에 접근할 때 로그인 하도록 강제하는 라우터
const PrivateRoute = ({component: Component, auth: {isAuthenticated, loading}, ...rest}) => (
    <Route {...rest}
           render={props => !isAuthenticated && !loading ? (<Redirect to='/login'/>) : (<Component {...props}/>)}/>
);

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
