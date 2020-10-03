

export const updateProfile = user => {
    $.ajax({
        method: 'PATCH',
        url: `/api/user/${user.if}`,
        data: { user }
    })
}

export const showProfile = userId => {
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
}