// import { connect } from "react-redux";

// import { createBoard } from "../../../actions/board_actions";
// import { openModal, closeModal } from "../../../actions/modal_actions";
// import CreateBoardForm from "./create_board_form";

// const mapStateToProps = state => ({
//     board: {"title": "", "desctiption": "", "secret": false},
//     errors: state.errors.board,
//     formType: "Create board",
// });

// const mapDispatchToProps = dispatch => ({
//     processForm: board => dispatch(createBoard(board)),
//     closeModal: () => dispatch(closeModal())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm);
import { connect } from "react-redux";
import React from "react";

import { createBoard } from "../../../actions/board_actions";
import { fetchPins } from "../../../actions/pin_actions";
import { fetchBoards } from "../../../actions/board_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";
import CreateBoardForm from "./create_board_form";
import { fetchBoard } from "../../../util/board_api_util";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    board: { "title": "", "description": "", "secret": false },
    pins: Object.values(state.entities.pins),
    errors: state.errors.board,
    formType: "Create board",
});

const mapDispatchToProps = dispatch => ({
    processForm: board => dispatch(createBoard(board)), //error???
    closeModal: () => dispatch(closeModal()),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoards: () => dispatch(fetchBoards())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm);