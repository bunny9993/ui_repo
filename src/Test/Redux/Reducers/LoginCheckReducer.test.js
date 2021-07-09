import '@testing-library/jest-dom/extend-expect';
import { LoginCheckReducer } from '../../../Redux/Reducers/LoginCheck.reducer';

import {
    LOGIN_CHECK_PENDING,
    LOGIN_CHECK_SUCCESS,
    LOGIN_CHECK_ERROR,
    SESSION_EXPIRED_ERROR,
} from "../../../Redux/Actions/LoginCheck.actions";

describe("Should be evaluated the properties of the object.", () => {
    const initialState = {
        LoginPending: false,
        LoginError: false,
        LoginSuccess: false,
        userData: null,
        error: null,
        sessionError: null,
    };
    it("LOGIN_CHECK_PENDING", () => {
        const callReturn = LoginCheckReducer(initialState, { type: LOGIN_CHECK_PENDING });
        expect(callReturn).toStrictEqual({ ...initialState, LoginPending: true });
    });
    it("LOGIN_CHECK_SUCCESS", () => {
        const callReturn = LoginCheckReducer(initialState, { type: LOGIN_CHECK_SUCCESS });
        expect(callReturn).toStrictEqual({ ...initialState, LoginPending: false, userData: undefined });
    });
    it("LOGIN_CHECK_ERROR", () => {
        const callReturn = LoginCheckReducer(initialState, { type: LOGIN_CHECK_ERROR });
        expect(callReturn).toStrictEqual({ ...initialState, LoginPending: false, error: undefined });
    });
    it("SESSION_EXPIRED_ERROR", () => {
        const callReturn = LoginCheckReducer(initialState, { type: SESSION_EXPIRED_ERROR });
        expect(callReturn).toStrictEqual({ ...initialState, LoginPending: false, sessionError: undefined });
    });
    it("default", () => {
        const callReturn = LoginCheckReducer(initialState, {});
    });
});