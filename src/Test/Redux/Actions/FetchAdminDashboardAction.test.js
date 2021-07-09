import '@testing-library/jest-dom/extend-expect';
import { fetchAdminDashboardPending } from '../../../Redux/Actions/FetchAdminDashboard.actions';
import { fetchAdminDashboardSuccess } from '../../../Redux/Actions/FetchAdminDashboard.actions';
import { fetchAdminDashboardError } from '../../../Redux/Actions/FetchAdminDashboard.actions';
import { sessionExpiredError } from '../../../Redux/Actions/FetchAdminDashboard.actions';

import {
    FETCH_ADMIN_DASHBOARD_PENDING,
    FETCH_ADMIN_DASHBOARD_SUCCESS,
    FETCH_ADMIN_DASHBOARD_ERROR,
    SESSION_EXPIRED_ERROR,
} from "../../../Redux/Actions/FetchAdminDashboard.actions";

describe("Should be evaluated that functions exported and run properly.", () => {
    const initialState = {
        dashboardPending: false,
        dashboardError: false,
        dashboardSuccess: false,
        dashBoardData: null,
        error: null,
        sessionError: null,
    };
    it("Should be run and export the function FETCH_ADMIN_DASHBOARD_PENDING", () => {
        const callReturn = fetchAdminDashboardPending(initialState, { type: FETCH_ADMIN_DASHBOARD_PENDING });
    });
    it("Should be run and export the function FETCH_ADMIN_DASHBOARD_SUCCESS", () => {
        const callReturn = fetchAdminDashboardSuccess(initialState, { type: FETCH_ADMIN_DASHBOARD_SUCCESS });
    });
    it("Should be run and export the function FETCH_ADMIN_DASHBOARD_ERROR", () => {
        const callReturn = fetchAdminDashboardError(initialState, { type: FETCH_ADMIN_DASHBOARD_ERROR });
    });
    it("Should be run and export the function SESSION_EXPIRED_ERROR", () => {
        const callReturn = sessionExpiredError(initialState, { type: SESSION_EXPIRED_ERROR });
    });
});