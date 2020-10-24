import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";

// import { fetchBoards } from "../../../actions/board_actions"; 
import { createPin } from "../../../actions/pin_actions";
// import { createBoardPin } from "../../../actions/board_pin_actions";
import CreatrPinForm from "./create_pin_form";
import modal from "../../modal/modal";
import { openModal } from "../../../actions/modal_actions";

const mapStateToProps = state => ({
    currentUser: state.entities.user[state.session.id],
    pin: { "title": "", "description": "", url: "", photo: null },
    boards: Object.values(state.entities.boards).filter(board => (
        board.userId === state.session.id
    )),
    errors: state.errors.pin,
    formType: "Creatr Pin",
});

const mapDispatchToProps = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    processForm: pin => dispatch(createPin(pin)),
    creatrBoardPin: boardPin => dispatch(createBoardPin(boardPin)),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatrPinForm));