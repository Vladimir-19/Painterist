// to keep track of any error messages.

import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

// import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';

// const _nullUser = {
//     currentUser: null,
//     user: {},
//     errors: []s
// };

export default (state = [], action) => {
    Object.freeze(state);
    console.log(action)
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors ? action.errors : null;
        case RECEIVE_CURRENT_USER:
            return [];
        // case CLOSE_MODAL:
        //     return [];
        // case OPEN_MODAL:
        //     return [];
        default:
            return state;
    }
};