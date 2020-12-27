export const fetchAllUsers = () => (
    $.ajax({
        method: "GET",
        url: `/api/users`,
        // data: user
    })
);

// export const fetchSingleUser = userId => (
//     $.ajax({
//         method: "GET",
//         url: `/api/users/${userId}`,
//         data: user
//     })
// );
export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);

export const updateUser = (user, id) => (
    $.ajax({
        method: "PATCH",
        url: `/api/users/${id}`,
        data: user,
        contentType: false,
        processData: false
    })
);

