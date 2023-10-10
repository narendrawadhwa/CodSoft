import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadJobReducer, loadJobSingleReducer, registerAjobReducer } from './reducers/jobReducer';
import { createJobTypeReducer, loadJobTypeReducer } from './reducers/jobTypeReducer';
import {
    userApplyJobReducer,
    userReducerLogout,
    userReducerProfile,
    userReducerSignIn,
    userReducerSignUp
} from './reducers/userReducer';

//combine reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob: loadJobSingleReducer,
    userJobApplication: userApplyJobReducer,
    registerJob: registerAjobReducer,
    createJobType: createJobTypeReducer,
    registerJob: registerAjobReducer,


});



//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;