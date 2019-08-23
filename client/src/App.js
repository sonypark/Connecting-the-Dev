import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import {loadUser} from './actions/auth';
import setAuthToken from "./utils/setAuthToken";
import Routes from './components/route/Routes';

// import Redux
import {Provider} from 'react-redux';
import store from './store';

// import css
import './App.css';


if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser())
    }, []); // 한 번만 실행

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar/>
                    <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route component={Routes}/>
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    );
};
export default App;
