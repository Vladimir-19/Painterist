// import React, { Component } from 'react'

// import BoardShowNavBar from './board_show_nav_bar';
// import PinIndexContainer from "../pin/pin_index_container";

// export default class BoardShow extends Component {
//     constructor(props) {
//         super(props);

//         this.openEditBoard = this.openEditBoard.bind(this);
//     }

//     componentDidMount() {
//         this.props.fetchSingleUser(this.props.currentUser.id);
//     }

//     openEditBoard(e) {
//         e.preventDefault();
//         this.props.openEditBoard(this.props.board.id)
//     }

//     render() {
//         const { currentUser, board, pins, boardsPins } = this.props;

//         const secretIcon = (board.secret) ? (
//             <div className="board-show visibility">
//                 {/* <i className="fas fa-lock board-show" id="lock-icon"></i> */}
//                 in board show jsx
//             </div>
//         ) : (
//                 null
//             );
//         let boardPins = boardsPins
//             .filter(boardPin => board.id === boardPin.boardId)
//             .map(boardPin => pins[boardPin.pinId])
//             .filter(boardPin => boardPin !== undefined);

//         return (
//             <div className="board-show container">
//                 <div className="board-show header">
//                     <div className="board-show navbar-container">
//                         <BoardShowNavBar
//                             openEditBoard={this.openEditBoard}
//                             board={board}
//                             user={currentUser}
//                         />
//                     </div>
//                     <div className="board-show info">
//                         <div className="board-show main-info">
//                             <div className="board-show title">
//                                 {board.title}
//                             </div>
//                             <div className="board-show stats">
//                                 {secretIcon}
//                                 <div className="board-show count pin">
//                                     {`${board.pinIds.length} pins`}
//                                 </div>
//                                 <div className="board-show count follower">
//                                     ·  7 followers
//                 </div>
//                             </div>
//                         </div>
//                         <div className="board-show description">
//                             {board.description}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="board-show pin-feed">
//                     <PinIndexContainer
//                         pins={boardPins}
//                         page="profile"
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

// BoardShow.defaultProps = {
//     board: {
//         id: 0,
//         title: 'boardman',
//         description: 'boardman gets paid',
//         secret: false,
//         pinIds: []
//     }
// }
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