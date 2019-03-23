import {combineReducers} from 'redux';
import PostReducers from './PostReducer'
import UserReducer from './UserReducer';


export default combineReducers({
    posts : PostReducers,
    user : UserReducer
});