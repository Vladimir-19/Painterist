// This file will be responsible for combining our multiple, 
// domain - specific reducers.It will export a single rootReducer

import {combineReducers} from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import uiReducer from './ui_reducer';


const rootReducer = combineReducers({
    entities,
    session,
    ui: uiReducer,
    errors,
});

export default rootReducer;