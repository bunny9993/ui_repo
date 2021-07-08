import {
    fetchAdminDashboardSuccess,
    fetchAdminDashboardError,
    fetchAdminDashboardPending,
    sessionExpiredError,
} from '../Actions/FetchAdminDashboard.actions';
import Api from '../../Helpers/Api';
import axios from 'axios';

export function resetFetchAdminDashboard() {
    return (dispatch) => {
        dispatch(fetchAdminDashboardSuccess(null));
    };
}
export function fetchAdminDashboard(userId) {
    const api = new Api();
    const urlPrefix = api.getUrlPrefix();
    const url = urlPrefix + `fetchAdminDashboard/${userId}`;
    // const url ='http://localhost:3006/api/users'
    return (dispatch) => {
        dispatch(fetchAdminDashboardPending());
        axios
            .get(url, {
            })
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                console.log(res.data.resultObj)
                const dataObj = res.data.resultObj;
                dispatch(fetchAdminDashboardSuccess(dataObj));
                return dataObj;
            })
            .catch((error) => {
                if (error.response && error.response.status === 403) {
                    dispatch(sessionExpiredError(error));
                } else {
                    dispatch(fetchAdminDashboardError(error));
                }
            });
    };
}
