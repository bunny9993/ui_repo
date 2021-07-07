export const LOGIN_CHECK_SUCCESS = 'LOGIN_CHECK_SUCCESS';
export const LOGIN_CHECK_ERROR = 'LOGIN_CHECK_ERROR';
export const LOGIN_CHECK_PENDING = 'LOGIN_CHECK_PENDING';
export const SESSION_EXPIRED_ERROR = 'SESSION_EXPIRED_ERROR';


export function loginCheckPending() {
    return {
        type: LOGIN_CHECK_PENDING
    }
}

export function loginCheckSuccess(userData) {
    return {
        type: LOGIN_CHECK_SUCCESS,
        userData: userData,
    }
}

export function loginCheckError(error) {
    return {
        type: LOGIN_CHECK_ERROR,
        error: error
    }
}

export function sessionExpiredError(sessionError) {
    return {
        type: SESSION_EXPIRED_ERROR,
        sessionError: sessionError
    }
}