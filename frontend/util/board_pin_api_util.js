// export const fetchAllBoardsPins = () => (
//     $.ajax({
//         method: "GET",
//         url: `/api/boards_pins`
//     })
// );

// export const createBoardPin = boardPin => (
//     $.ajax({
//         method: "POST",
//         url: `/api/boards_pins`,
//         data: { boardPin }
//     })
// );

// export const deleteBoardPin = boardPinId => (
//     $.ajax({
//         method: "DELETE",
//         url: `/api/boards_pins/${boardPinId}`
//     })
// );
export const pinToBoard = (boardPin) => {
    return $.ajax({
        method: 'POST',
        url: '/api/boardpin',
        data: { boardPin: { pin_id: boardPin.pinId, board_id: boardPin.boardId } }
    })
};

export const deletePinOnBoard = (boardPin) => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/boardpin/4',
        data: { boardPin }
    })
};

export const fetchAllBoardsPins = () => (
    $.ajax({
        method: "GET",
        url: `/api/boards_pins`
    })
);