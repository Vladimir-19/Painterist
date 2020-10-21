// import React from "react";
// import {connect} from "react-redux";
// import NavBar from "./navbar";

// import {logoutUser} from "../../actions/session_actions";
// // import { fetchAllUsers, fetchSingleUser } from "../../actions/user_actions"; 

// const mapStateToProps = state => ({
//     currentUser: session && session.id && entities.users[session.id]
// });

// const mapDispatchToProps = dispatch => ({
//     logout: () => dispatch(logoutUser)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './navbar';

const mapStateToProps = ({ session, entities }) => ({
    currentUser: session && session.id && entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);