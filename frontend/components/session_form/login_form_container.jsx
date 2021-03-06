// import { connect } from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { login } from '../../actions/session_actions';
// import SessionForm from './session_form';

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'login',
//         navLink: <Link to="/signup">sign up instead</Link>,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         processForm: (user) => dispatch(login(user)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);


import { connect } from 'react-redux';
import React from 'react';
import { loginDemoUser, loginUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


import { Link } from 'react-router-dom';

import SessionForm from './session_form';
import LoginForm from './LogInForm';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        // navLink: <Link to="/signup">log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(loginUser(user)),
        switchForm: () => dispatch(openModal('signup')),
        closeModal: () => dispatch(closeModal()),
        loginDemoUser: () => dispatch(loginDemoUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);