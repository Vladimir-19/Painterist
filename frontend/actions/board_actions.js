import * as BoardAPIUtil from "../util/board_api_util";

// action types
export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";


// actions creators 
const reveiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
});

const receiveBoard = payload => ({
    type: RECEIVE_BOARD,
    payload
});

const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
});

const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
});

export const fetchBoards = () => dispatch => (
    BoardAPIUtil.fetchBoards().then(
        boards => dispatch(receiveBoards(boards))
    )
);

export const fetchBoard = boardId => dispatch => (
    BoardAPIUtil.fetchBoard(boardId).then(
        payload => dispatch(receiveBoard(payload))       
    )
);

export const creatrBoard = board => dispatch => (
    BoardAPIUtil.createBoard(board).then(
        board => dispatch(receiveBoard(board)),
        err => dispatch(receiveBoardErrors(err.responseJSON))
    )
);

export const updateBoard = board => dispatch => (
    BoardAPIUtil.updateBoard(boatd).then(
        board => dispatch(updateBoard(board)),
        err => dispatch(receiveBoardErrors(err.responseJSON))
    )
);

export const deleteBoard = boardId => dispatch => (
    BoardAPIUtil.deleteBoard(boardId).then(
        board => dispatch(removeBoard(board.id)),
        err => dispatch(receiveBoardErrors(err.responseJSON))        
    )
);