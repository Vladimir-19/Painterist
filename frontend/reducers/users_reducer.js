// to keep track of all of our users.
// const { RECEIVE_CURRENT_USER } = require("../actions/session_actions");
import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
            return Object.assign(nextState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_SINGLE_USER:
            // return Object.assign({}, state, action.user.user);
            return Object.assign(nextState, action.payload.user);
        default:
            return state;
    }
};

export default usersReducer;