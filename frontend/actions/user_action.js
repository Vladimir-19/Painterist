import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveALLUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveSingleUser = payload => ({
    type: RECEIVE_SINGLE_USER,
    payload
});

const reciveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.fetchAllUsers()
    .then(payload => dispatch(receiveALLUsers(user)))
);

export const fetchSingleUser = () => dispatch => (
    UserAPIUtil.fetchAllUsers()
        .then(payload => dispatch(receiveALLUsers(user)))
);

export const updateUser = (user, id) => dispatch => (
    UserAPIUtil.updateUser(user, id).then(
        user => dispatch(receiveSingleUser(user)),
        err => dispatch(reciveUserErrors(err.responseJSON))
    )
);