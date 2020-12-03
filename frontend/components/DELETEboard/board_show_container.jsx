// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";

// import { fetchSingleUser } from "../../actions/user_actions";
// import { openModal, closeModal } from "../../actions/modal_actions";
// import BoardShow from './board_show';

// const mapStateToProps = (state, ownProps) => {
//     const board = Object.values(state.entities.boards).find(board =>
//         board.title === ownProps.match.params.boardTitle
//     ) || { board: { id: 0 } };

//     return {
//         currentUser: state.entities.users[state.session.id],
//         board: state.entities.boards[board.id],
//         pins: state.entities.pins,
//         boardsPins: Object.values(state.entities.boardsPins),
//         errors: state.errors.board,
//     }
// };

// const mapDispatchToProps = dispatch => ({
//     fetchSingleUser: id => dispatch(fetchSingleUser(id)),
//     openEditBoard: boardId => dispatch(openModal('edit-board', boardId)),
//     closeModal: () => dispatch(closeModal())
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));

            // import { connect } from "react-redux";
            // import { withRouter } from "react-router-dom";

            // import { fetchSingleUser } from "../../actions/user_actions";
            // // import { fetchBoards, fetchBoard } from "../../actions/board_actions";
            // import { openModal, closeModal } from "../../actions/modal_actions";
            // import BoardShow from './board_show';

            // const mapStateToProps = (state, ownProps) => {
            //     const board = Object.values(state.entities.boards).find(board =>
            //         board.title === ownProps.match.params.boardTitle
            //     ) || { board: { id: 0 } };

            //     return {
            //         currentUser: state.entities.users[state.session.id],
            //         board: state.entities.boards[board.id],
            //         pins: state.entities.pins,
            //         boardsPins: Object.values(state.entities.boardsPins),
            //         errors: state.errors.board,
            //     }
            // };

            // const mapDispatchToProps = dispatch => ({
            //     fetchSingleUser: id => dispatch(fetchSingleUser(id)),
            //     // fetchBoards: () => dispatch(fetchBoards()),
            //     // fetchBoard: boardId => dispatch(fetchBoard(boardId)),
            //     openEditBoard: boardId => dispatch(openModal('edit-board', boardId)),
            //     closeModal: () => dispatch(closeModal())
            // });

            // export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));

import {
    connect
} from 'react-redux';

import {
    openModal
} from '../../actions/modal_actions';

import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';

import BoardShow from './board_show';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    pins: state.entities.pins,
    modal: state.ui.modal,
    board: state.entities.boards[ownProps.match.params.boardId]
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoards: () => dispatch(fetchBoards())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardShow);