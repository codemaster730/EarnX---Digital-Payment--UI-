import { all } from 'redux-saga/effects';

import loginSaga from './login.sagas';
import registerSaga from './register.sagas';
import userSaga from './user.sagas';

export default function* rootSaga(getState) {
    yield all([
        loginSaga(),
        registerSaga(),
        userSaga()
    ]);
};
