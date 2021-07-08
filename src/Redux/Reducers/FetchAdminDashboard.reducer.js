import {
    FETCH_ADMIN_DASHBOARD_PENDING,
    FETCH_ADMIN_DASHBOARD_SUCCESS,
    FETCH_ADMIN_DASHBOARD_ERROR,
    SESSION_EXPIRED_ERROR,
} from "../Actions/FetchAdminDashboard.actions";


const initialState = {
    dashboardPending: false,
    dashboardError: false,
    dashboardSuccess: false,
    dashBoardData: null,
    error: null,
    sessionError: null,
};

export function FetchAdminDashboardReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ADMIN_DASHBOARD_PENDING:
            return {
                ...state,
                dashboardPending: true,
            };
        case FETCH_ADMIN_DASHBOARD_SUCCESS:
            return {
                ...state,
                dashboardPending: false,
                dashBoardData: action.dashBoardData,
            };
        case FETCH_ADMIN_DASHBOARD_ERROR:
            return {
                ...state,
                dashboardPending: false,
                error: action.error,
            };
        case SESSION_EXPIRED_ERROR:
            return {
                ...state,
                dashboardPending: false,
                sessionError: action.sessionError,
            };
        default:
            return state;
    }
}
