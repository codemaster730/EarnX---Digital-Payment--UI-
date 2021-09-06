export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';
export const USER_LOGGED_OUT = 'USER_SIGNED_OUT';

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    payload: userData
});

export const removeUser = () => ({
    type: REMOVE_USER_DATA
});

export const signOutUser = () => ({
    type: USER_LOGGED_OUT
});
