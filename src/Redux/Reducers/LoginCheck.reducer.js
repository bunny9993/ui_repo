import {
    LOGIN_CHECK_PENDING,
    LOGIN_CHECK_SUCCESS,
    LOGIN_CHECK_ERROR,
    SESSION_EXPIRED_ERROR,
} from "../Actions/LoginCheck.actions";


const initialState = {
    LoginPending: false,
    LoginError: false,
    LoginSuccess: false,
    userData: null,
    error: null,
    sessionError: null,
};

export function LoginCheckReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_CHECK_PENDING:
            return {
                ...state,
                LoginPending: true,
            };
        case LOGIN_CHECK_SUCCESS:
            return {
                ...state,
                LoginPending: false,
                userData: action.userData,
            };
        case LOGIN_CHECK_ERROR:
            return {
                ...state,
                LoginPending: false,
                error: action.error,
            };
        case SESSION_EXPIRED_ERROR:
            return {
                ...state,
                LoginPending: false,
                sessionError: action.sessionError,
            };
        default:
            return state;
    }
}
