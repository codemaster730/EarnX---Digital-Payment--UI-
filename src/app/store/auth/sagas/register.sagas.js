import { all, takeLatest } from 'redux-saga/effects';
import * as AuthActions from '../actions';

function* registerMonitor({ payload }) {
}

export default function* rootSaga() {
    yield all([
        takeLatest(AuthActions.REGISTER_REQUEST, registerMonitor)
    ])
};
