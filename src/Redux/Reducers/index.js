import { combineReducers } from 'redux';
import {LoginCheckReducer} from './LoginCheck.reducer'
import {FetchAdminDashboardReducer} from './FetchAdminDashboard.reducer'
import {FetchQuestionsReducer} from './FetchQuestions.reducer'


const rootReducer = combineReducers({
    LoginCheckReducer,
    FetchAdminDashboardReducer,
    FetchQuestionsReducer
});

export default rootReducer;
