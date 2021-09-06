import { createStore, applyMiddleware } from 'redux';
import createReducer from './reducers';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(createReducer(), applyMiddleware(sagaMiddleware));

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
    if (store.asyncReducers[key]) return;

    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));

    return store;
}

window.store = store;

export default store;
