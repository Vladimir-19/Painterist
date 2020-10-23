// const { RECEIVE_SINGLE_USER } = require("../actions/user_action")

import { RECEIVE_SINGLE_USER } from "../actions/user_action";
// import { RECEIVE_BOARD } from 
import { 
    RECEIVE_PINS,
    RECEIVE_PIN,
    REMOVE_PIN,
    RECEIVE_PIN_ERRORS
} from "../actions/pin_actions";

const PinsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SINGLE_USER:
            return Object.assign(nextState, action.payload.pins);
        // case RECEIVE_BOARD:
        //     return Object.assign(nextState, action.payload.pins);
        case RECEIVE_PINS:
            return action.pins;
        case RECEIVE_PIN:
            return Object.assign(nextState, action.pin);
        case REMOVE_PIN:
            delete nextState[action.pinId];
            return nextState;
        default:
            return state;
    }
}

export default PinsReducer;