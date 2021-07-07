import {
    loginCheckSuccess,
    loginCheckError,
    loginCheckPending,
    sessionExpiredError,
} from '../Actions/LoginCheck.actions';
import Api from '../../Helpers/Api';
import axios from 'axios';

export function resetLoginCheck() {
    return (dispatch) => {
        dispatch(loginCheckSuccess(null));
    };
}
export function loginCheck(payload) {
    const api = new Api();
    const urlPrefix = api.getUrlPrefix();
    const url = urlPrefix + 'users';
    // const url ='http://localhost:3006/api/users'
    return (dispatch) => {
        dispatch(loginCheckPending());
        axios
            .post(url, payload, {
            })
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                console.log(res.data.resultObj)
                const dataObj = res.data.resultObj;
                dispatch(loginCheckSuccess(dataObj));
                return dataObj;
            })
            .catch((error) => {
                if (error.response && error.response.status === 403) {
                    dispatch(sessionExpiredError(error));
                } else {
                    dispatch(loginCheckError(error));
                }
            });
    };
}
