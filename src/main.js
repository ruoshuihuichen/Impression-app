import React from 'react';
import ReactDOM from 'react-dom';
import './common/index.less';

import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './containers/Login/login';
import Profile from "./containers/Profile/profile";
import App from './containers/App';
import Reg from "./containers/Reg/reg";
import Home from "./containers/Home";
import List from "./containers/list/List";


ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/list'} component={List}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/reg'} component={Reg}/>
<Route path={"/detail"} component={Detail}/>
            </Switch>
        </App>
    </Router>,document.getElementById('app'));

