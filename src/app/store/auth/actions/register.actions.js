export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const register = (authInfo) => ({
    type: REGISTER_REQUEST,
    payload: authInfo
});
