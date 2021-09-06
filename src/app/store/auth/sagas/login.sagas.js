import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from './../../../services/apiService/api';
import * as AuthActions from './../actions';
import * as authService from '../../../services/apiService/authService';

function* loginMornitor({ payload }) {
    try {
        const data = yield call(authService.login, payload);

        api.setToken(data['AuthToken']);

        // const userDetail = yield call(authService.getUser);
        // yield put(AuthActions.setUserData(userDetail));
        if(data['AuthToken'] !== '') {
            yield put({type: AuthActions.LOGIN_SUCCESS});
        }else{
            yield put({type: AuthActions.LOGIN_ERROR, payload: 'error'});
        }
    } catch(err) {
        yield put({type: AuthActions.LOGIN_ERROR, payload: err});
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(AuthActions.LOGIN_REQUEST, loginMornitor)
    ]);
};
