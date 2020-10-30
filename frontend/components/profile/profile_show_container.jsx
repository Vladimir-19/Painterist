import React from "react";
import { connect } from "react-redux";

import { openModal, closeModal } from "../../actions/modal_actions";
import {fetchAllUsers, fetchSingleUser } from "../../actions/user_action";
import ProfileShow from "./profile_show";

const mapSttateToProps = (state, props) => ({
    currentUser: state.entities.user[state.session.id],
    // users: Object.values(state.entities.users),
    email: props.match.params.email,
    boards: Object.values(state,entitles.boards),
    boardsPins: state.entitles.boardsPins,
    pins: Object.values(state.entitles.pins),
});

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    openModal: modal => dispatch(openModal())
});

export default connect(mapSttateToProps, mapDispatchToProps)(ProfileShow);