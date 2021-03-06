// to keep track of any error messages.

import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';

export default (state = [], action) => {
    Object.freeze(state);
    console.log(action)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            // return action.errors ? action.errors : null;
            return action.errors;
        // case CLOSE_MODAL:
        //     return [];
        case OPEN_MODAL:
            return [];
        default:
            return state;
    }
};