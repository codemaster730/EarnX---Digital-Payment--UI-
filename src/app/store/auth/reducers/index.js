import { combineReducers } from 'redux';
import login from './login.reducer';
import register from './register.reducer';
import user from './user.reducer';

const auth = combineReducers({
    login,
    register,
    user
});

export default auth;
