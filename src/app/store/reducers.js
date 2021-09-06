import { combineReducers } from 'redux';
import auth from './auth/reducers';

/**
 * Create Reducer asynchronously
 *
 * @param {array} asyncReducers
 */
const createReducer = (asyncReducers) => combineReducers({
    auth,
    ...asyncReducers
});

export default createReducer;