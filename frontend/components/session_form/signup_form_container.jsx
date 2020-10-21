// import { connect } from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { signup } from '../../actions/session_actions';
// import SessionForm from './session_form';

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'signup',
//         navLink: <Link to="/login">log in instead</Link>,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         processForm: (user) => dispatch(signup(user)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

import { connect } from 'react-redux';
import React from 'react';
import { loginDemoUser, signupUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import SignUpForm from './SignUpForm'
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        // navLink: <Link to="/login">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signupUser(user)),
        switchForm: () => dispatch(openModal('login')),
        closeModal: () => dispatch(closeModal()),
        loginDemoUser: () => dispatch(loginDemoUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);