import React from "react";
import { connect } from "react-redux";

import { openModal, closeModal } from "../../actions/modal_actions";
import {fetchAllUsers, fetchSingleUser } from "../../actions/user_actions";
import ProfileShow from "./profile_show";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    users: Object.values(state.entities.users),
    email: ownProps.match.params.email,
    boards: Object.values(state.entities.boards),
    boardsPins: state.entities.boardsPins,
    pins: Object.values(state.entities.pins),
});

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);