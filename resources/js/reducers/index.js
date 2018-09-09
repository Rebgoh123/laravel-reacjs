import { combineReducers } from 'redux';
import { usersReducer } from './users.reducer';

const rootReducer = combineReducers({
    userReducer: usersReducer,

});

export default rootReducer;