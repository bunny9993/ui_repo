import '@testing-library/jest-dom/extend-expect';
import { loginCheckPending } from '../../../Redux/Actions/LoginCheck.actions';
import { loginCheckSuccess } from '../../../Redux/Actions/LoginCheck.actions';
import { loginCheckError } from '../../../Redux/Actions/LoginCheck.actions';
import { sessionExpiredError } from '../../../Redux/Actions/LoginCheck.actions';

import {
    LOGIN_CHECK_PENDING,
    LOGIN_CHECK_SUCCESS,
    LOGIN_CHECK_ERROR,
    SESSION_EXPIRED_ERROR,
} from "../../../Redux/Actions/LoginCheck.actions";

describe("Should be evaluated that functions exported and run properly.", () => {
    const initialState = {
        LoginPending: false,
        LoginError: false,
        LoginSuccess: false,
        userData: null,
        error: null,
        sessionError: null,
    };
    it("Should be run and export the function LOGIN_CHECK_PENDING", () => {
        const callReturn = loginCheckPending(initialState, { type: LOGIN_CHECK_PENDING });
    });
    it("Should be run and export the function LOGIN_CHECK_SUCCESS", () => {
        const callReturn = loginCheckSuccess(initialState, { type: LOGIN_CHECK_SUCCESS });
    });
    it("Should be run and export the function LOGIN_CHECK_ERROR", () => {
        const callReturn = loginCheckError(initialState, { type: LOGIN_CHECK_ERROR });
    });
    it("Should be run and export the function SESSION_EXPIRED_ERROR", () => {
        const callReturn = sessionExpiredError(initialState, { type: SESSION_EXPIRED_ERROR });
    });
});