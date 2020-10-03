// import * as APIUtil from '../util/session_api_util';

// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const LOGOUT_CURRENT_USER = 'LOGIUT_CURRENT_USER';
// export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRPRS'

// export const receiveCurrentUser = currentUser => ({
//     type: RECEIVE_CURRENT_USER,
//     errors
// });

// export const logoutCurrentUser = () => ({
//     type: LOGIUT_CURRENT_USER,
// });



// export const login = user => dispatch =>(
//     APIUtil.login(user).then(user => (
//         dispatch(receiveCurrentUser(user))
//     ), err => (
//         dispatch(receiveErrors(err.responseJSON))
//     ))
//     );

// export const logout = () => dispatch => (
//         APIUtil.logout().then(user => (
//             dispatch(receiveCurrentUser())
//         ))
//     );

// export const signup = user => dispatch => (
//     APIUtil.signup(user).then(user => ( 
//         dispatch(receiveCurrentUser(user))
//     ), err => ( 
//         dispatch(receiveErrors(err.responseJSON))
//     ))
// );
import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

// this is an array of errors
const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

//my thunk action creators go here

export const signupUser = user => dispatch => (
    APIUtil.signupUser(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
);

export const loginUser = user => dispatch => (
    APIUtil.loginUser(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
);

export const logoutUser = () => dispatch => (
    APIUtil.logoutUser().then(() => (
        dispatch(logoutCurrentUser())
    ))
);

export const loginDemoUser = () => dispatch => (
    APIUtil.demoUser()
        .then(user => dispatch(receiveCurrentUser(user)))
);


