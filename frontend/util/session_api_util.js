// export const login = user => {
//     $.ajax({
//         method: 'POST',
//         url: '/api/session',
//         data: {user}
//     }) 
// };

// export const signup = user => {
//     $.ajax({
//         method: 'POST',
//         url: 'api/user'
//     })
// };

// export const logout = user => {
//     $.ajax({
//         method: "DELETE",
//         url: '/api/session'
//     })
// };

export const signupUser = user => (
    $.ajax({
        method: 'POST',
        url: `/api/users`,
        data: {
            user
        }
        // or / api / user ????????????
    })
);

export const loginUser = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
        
    })
);

export const logoutUser = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

export const demoUser = () => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: {
            user: {
                email: 'vladimir@gmail.com',
                password: '123123',
            }
        }
    // $.ajax({
    //     method: 'GET',
    //     url: `/api/users/${email}`,
    //     success,
    //     error
    });
}