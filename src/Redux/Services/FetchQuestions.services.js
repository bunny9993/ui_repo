import {
    fetchQuestionsSuccess,
    fetchQuestionsError,
    fetchQuestionsPending,
    sessionExpiredError,
} from '../Actions/FetchQuestions.actions';
import Api from '../../Helpers/Api';
import axios from 'axios';

export function resetFetchQuestions() {
    return (dispatch) => {
        dispatch(fetchQuestionsSuccess(null));
    };
}
export function fetchQuestions(userId,userType) {
    const api = new Api();
    const urlPrefix = api.getUrlPrefix();
    var url=urlPrefix;
    if(userType==='Anonymous'){
        url=url + `fetchSurveyRandomUser`
    }else{
        url = url + `fetchUserQuestions/${userId}`;
    } 
    return (dispatch) => {
        dispatch(fetchQuestionsPending());
        axios
            .get(url, {
            })
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                console.log(res.data.resultObj)
                const dataObj = res.data.resultObj;
                dispatch(fetchQuestionsSuccess(dataObj));
                return dataObj;
            })
            .catch((error) => {
                if (error.response && error.response.status === 403) {
                    dispatch(sessionExpiredError(error));
                } else {
                    dispatch(fetchQuestionsError(error));
                }
            });
    };
}
