import { all, takeLatest } from 'redux-saga/effects';
import * as AuthActions from './../actions';

function* loggedOutMonitor(payload) {
    yield console.log(payload);
}

export default function* rootSaga(getState) {
    yield all([
        takeLatest(AuthActions.USER_LOGGED_OUT, loggedOutMonitor)
    ])
}
