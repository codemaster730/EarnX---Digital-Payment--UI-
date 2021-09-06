import * as AuthActions from './../actions';

const initialState = {
    success: false,
    error: null
};

const signIn = (state = initialState, action) => {
    switch (action.type) {
        case AuthActions.LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                error: null
            };
        case AuthActions.LOGIN_ERROR:
            return {
                ...state,
                success: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default signIn;
