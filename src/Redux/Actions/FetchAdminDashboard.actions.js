export const FETCH_ADMIN_DASHBOARD_SUCCESS = 'FETCH_ADMIN_DASHBOARD_SUCCESS';
export const FETCH_ADMIN_DASHBOARD_ERROR = 'FETCH_ADMIN_DASHBOARD_ERROR';
export const FETCH_ADMIN_DASHBOARD_PENDING = 'FETCH_ADMIN_DASHBOARD_PENDING';
export const SESSION_EXPIRED_ERROR = 'SESSION_EXPIRED_ERROR';


export function fetchAdminDashboardPending() {
    return {
        type: FETCH_ADMIN_DASHBOARD_PENDING
    }
}

export function fetchAdminDashboardSuccess(dashBoardData) {
    return {
        type: FETCH_ADMIN_DASHBOARD_SUCCESS,
        dashBoardData: dashBoardData,
    }
}

export function fetchAdminDashboardError(error) {
    return {
        type: FETCH_ADMIN_DASHBOARD_ERROR,
        error: error
    }
}

export function sessionExpiredError(sessionError) {
    return {
        type: SESSION_EXPIRED_ERROR,
        sessionError: sessionError
    }
}