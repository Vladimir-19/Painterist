import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
// export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

// const receiveSingleUser = payload => ({ //it was id insted id
//     type: RECEIVE_SINGLE_USER,
//     payload
// });
    // const receiveSingleUser = user => ({
    //     type: RECEIVE_SINGLE_USER,
    //     user
    // });
        const receiveUser = user => ({
            type: RECEIVE_USER,
            user
        });

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

// export const fetchAllUsers = () => dispatch => (
//     UserAPIUtil.fetchAllUsers()
//         .then(users => dispatch(receiveAllUsers(users)))
// );

// export const fetchSingleUser = id => dispatch => (
//     UserAPIUtil.fetchSingleUser(id)
//         .then(user => dispatch(receiveSingleUser(user)))
//         // .then(id => dispatch(receiveSingleUser(id)))

// );

// export const updateUser = (user, id) => dispatch => (
//     UserAPIUtil.updateUser(user, id).then(
//         user => dispatch(receiveSingleUser(user)),
//         err => dispatch(receiveUserErrors(err.responseJSON))
//     )
// );
export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

// export const fetchSingleUser = id => dispatch => (
//     UserAPIUtil.fetchSingleUser(id)
//         .then(payload => dispatch(receiveSingleUser(payload)))
// );
export const fetchUser = userId => dispatch(
    APIUtil.fetchUser(userId).then(
        user => dispatch(receiveUser(user)))
)

export const updateUser = (user, id) => dispatch => (
    UserAPIUtil.updateUser(user, id).then(
        user => dispatch(receiveSingleUser(user)),
        err => dispatch(receiveUserErrors(err.responseJSON))
    )
);