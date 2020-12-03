// const { RECEIVE_SINGLE_USER } = require("../actions/user_actions")

// import { RECEIVE_SINGLE_USER } from "../actions/user_actions";
// import { RECEIVE_BOARD } from "../actions/board_actions";
// import { 
//     RECEIVE_PINS,
//     RECEIVE_PIN,
//     REMOVE_PIN,
//     RECEIVE_PIN_ERRORS
// } from "../actions/pin_actions";

// const PinsReducer = (state = {}, action) => {
//     Object.freeze(state)
//     let nextState = Object.assign({}, state);

//     switch (action.type) {
//         case RECEIVE_SINGLE_USER:
//             return Object.assign(nextState, action.payload.pins);
//         case RECEIVE_BOARD:
//             return Object.assign(nextState, action.payload.pins);
//         case RECEIVE_PINS:
//             // return action.pins;
//             return Object.assign({}, state, action.pins);
//         case RECEIVE_PIN:
//             // return Object.assign(nextState, action.pin);
//             return { [action.pin.id]: action.pin }
//         case REMOVE_PIN:
//             delete nextState[action.pinId];
//             return nextState;
//         default:
//             return state;
//     }
// }

// export default PinsReducer;

import {
    RECEIVE_PIN,
    RECEIVE_PINS,
    REMOVE_PIN
} from '../actions/pin_actions';

const PinReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PIN:
            return { [action.pin.id]: action.pin }
        case RECEIVE_PINS:
            return Object.assign({}, state, action.pins)
        case REMOVE_PIN:
            let newState = Object.assign({}, state);
            delete newState[action.pinId];
            return newState;
        default:
            return state;
    }
}

export default PinReducer;