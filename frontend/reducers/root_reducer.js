// This file will be responsible for combining our multiple, 
// domain - specific reducers.It will export a single rootReducer

import {combineReducers} from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';


const rootReducer = combineReducers({
    entities,
    ui,
    errors,
    session
});

export default rootReducer;