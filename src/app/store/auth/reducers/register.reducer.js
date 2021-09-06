import * as AuthActions from '../actions';

const initialState = {
    success: false,
    error: null
};

const singUp = (state = initialState, action) => {
    switch (action.type) {
        case AuthActions.REGISTER_SUCCESS:
            return {
                ...state,
                success: true,
                error: null
            };
        case AuthActions.REGISTER_ERROR:
            return {
                ...state,
                success: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default singUp;
