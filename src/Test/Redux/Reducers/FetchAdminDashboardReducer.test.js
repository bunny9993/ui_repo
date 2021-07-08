import '@testing-library/jest-dom/extend-expect';
import { FetchAdminDashboardReducer } from '../../../Redux/Reducers/FetchAdminDashboard.reducer';

import {
    FETCH_ADMIN_DASHBOARD_PENDING,
    FETCH_ADMIN_DASHBOARD_SUCCESS,
    FETCH_ADMIN_DASHBOARD_ERROR,
    SESSION_EXPIRED_ERROR,
} from "../../../Redux/Actions/FetchAdminDashboard.actions";

describe("Should be evaluated the properties of the object.", () => {
    const initialState = {
        dashboardPending: false,
        dashboardError: false,
        dashboardSuccess: false,
        dashBoardData: null,
        error: null,
        sessionError: null,
    };
    it("FETCH_ADMIN_DASHBOARD_PENDING", () => {
        const callReturn = FetchAdminDashboardReducer(initialState, { type: FETCH_ADMIN_DASHBOARD_PENDING });
        expect(callReturn).toStrictEqual({ ...initialState, dashboardPending: true });
    });
    it("FETCH_ADMIN_DASHBOARD_SUCCESS", () => {
        const callReturn = FetchAdminDashboardReducer(initialState, { type: FETCH_ADMIN_DASHBOARD_SUCCESS });
        expect(callReturn).toStrictEqual({ ...initialState, dashboardPending: false, dashBoardData: undefined });
    });
    it("FETCH_ADMIN_DASHBOARD_ERROR", () => {
        const callReturn = FetchAdminDashboardReducer(initialState, { type: FETCH_ADMIN_DASHBOARD_ERROR });
        expect(callReturn).toStrictEqual({ ...initialState, dashboardPending: false, error: undefined });
    });
    it("SESSION_EXPIRED_ERROR", () => {
        const callReturn = FetchAdminDashboardReducer(initialState, { type: SESSION_EXPIRED_ERROR });
        expect(callReturn).toStrictEqual({ ...initialState, dashboardPending: false, sessionError: undefined });
    });
    it("default", () => {
        const callReturn = FetchAdminDashboardReducer(initialState, {});
    });
});