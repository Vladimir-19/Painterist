// import { RECEIVE_SINGLE_USER } from "../actions/user_actions";
// import {
//     RECEIVE_BOARDS,
//     RECEIVE_BOARD,
//     REMOVE_BOARD,
// } from '../actions/board_actions';

// const BoardsReducer = (oldState = {}, action) => {
//     Object.freeze(oldState);
//     let nextState = Object.assign({}, oldState);

//     switch (action.type) {
//         case RECEIVE_SINGLE_USER:
//             return Object.assign(nextState, action.payload.boards);
//         case RECEIVE_BOARDS:
//             return action.boards
//             // return Object.assign({}, state, action.boards)
//         case RECEIVE_BOARD:
//             return Object.assign(nextState, action.payload.boards)
//             // return Object.assign({}, state, {
//             //     [action.board.id]: action.board
//             // })
//         case REMOVE_BOARD:
//             delete nextState[action.boardId];
//             return nextState;
//         default:
//             return oldState;
//     }
// }

// export default BoardsReducer;
// import { RECEIVE_SINGLE_USER } from "../actions/user_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import {
    RECEIVE_BOARDS,
    RECEIVE_BOARD,
    REMOVE_BOARD,
} from '../actions/board_actions';
import { RECEIVE_BOARD_PIN } from "../actions/board_pin_actions";

const BoardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        // case RECEIVE_SINGLE_USER:
        //     return Object.assign(nextState, action.payload.boards);
        case RECEIVE_USER:
            return Object.assogm(mextState, action.payload.boards)
        case RECEIVE_BOARDS:
            return action.boards
        case RECEIVE_BOARD:
            return Object.assign(nextState, action.payload.boards)
        case REMOVE_BOARD:
            delete nextState[action.boardId];
            return nextState;
        case RECEIVE_BOARD_PIN:
            return Object.assign({}, oldState, action.board)
        default:
            return oldState;
    }
}

export default BoardsReducer;