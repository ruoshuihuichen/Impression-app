import user from './user';
import home from './home';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    home,
    user,
    router:routerReducer
})