import { combineReducers } from 'redux';
import {LoginCheckReducer} from './LoginCheck.reducer'
import {FetchAdminDashboardReducer} from './FetchAdminDashboard.reducer'


const rootReducer = combineReducers({
    LoginCheckReducer,
    FetchAdminDashboardReducer
});

export default rootReducer;
