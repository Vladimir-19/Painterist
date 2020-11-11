import {connect} from "react-redux";
import EditBoardForm from "./edit_board_form";

import {updateBoard} from "../../../actions/board_actions";
import {openModal, closeModal} from "../../../actions/modal_actions";

const mapStatrToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    board: state.entities.boards[state.ui.objectId],
    errors: state.errors.board,
    fromTitle: "Edit your board"
});

const mapDispatchToProps = dispatch => ({
    processForm: (board) => dispatch(updateBoard(board)),
    openDeleteBoard: (boardId) => dispatch(openModal('delete-board', boardId)),
    closeModal: () => dispatch(closeModal())
});

export default  connect(mapStatrToProps, mapDispatchToProps)(EditBoardForm);