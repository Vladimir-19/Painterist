export const fetchAllUsers = () => (
    $.ajax({
        method: "GET",
        url: `/api/users`,
    })
);

// export const showProfile = userId => {
//     $.ajax({
//         method: 'GET',
//         url: `/api/users/${userId}`
//     })
// }
export const fetchSingleUser = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${id}`,
    })
);

// export const updateProfile = user => {
//     $.ajax({
//         method: 'PATCH',
//         url: `/api/user/${user.id}`,
//         data: { user }
//     })
// }
export const updateUser = (user, id) => (
    $.ajax({
        method: "PATCH",
        url: `/api/users/${id}`,
        data: user,
        contentType: false,
        processData: false
    })
);

