// import React from "react";

// import { Link, withRouter } from "react-router-dom";
// // import LinesEllipsis from "react-lines-ellipsis";



// const BoardIndexItem = ({ board, pins, currentUser, user, openEditBoard }) => {
//   const numPins = board.pinIds.length;
//   const pinA = (pins[0]) ? <img src={`${pins[0].photo}`}></img> : null;
//   const pinB = (pins[1]) ? <img src={`${pins[1].photo}`}></img> : null;
//   const pinC = (pins[2]) ? <img src={`${pins[2].photo}`}></img> : null;
//   const pinD = (pins[3]) ? <img src={`${pins[3].photo}`}></img> : null;
//   const pinE = (pins[4]) ? <img src={`${pins[4].photo}`}></img> : null;
//   const pinF = (pins[5]) ? <img src={`${pins[5].photo}`}></img> : null;
  
//   const secretIcon = (board.secret) ? (
//     <div className="board-index-item visibility">
//       <i className="fas fa-lock board-index-item" id="lock-icon"></i>
//     </div>
//   ) : null;
//   const klass = (currentUser.username === user.username) ? 'show' : 'hide';

//   return (
//     <div className="board-index-item container">
//       <Link
//         to={{
//           pathname: `/${user.username}/${board.title}`,
//           state: {
//             fromProfile: true
//           }
//         }}
//         className="board-index-item link"
//         >
//         <div className="board-index-item content">
//           <div className="board-index-item hover-overlay"></div>
//           <div>
//             <div className="board-index-item pins-container">
//               <div className="board-index-item pins">
//                 <div className="board-index-item pin" id="a">{pinA}</div>
//                 <div className="board-index-item pin" id="b">{pinB}</div>
//                 <div className="board-index-item pin" id="c">{pinC}</div>
//                 <div className="board-index-item pin" id="d">{pinD}</div>
//                 <div className="board-index-item pin" id="e">{pinE}</div>
//                 <div className="board-index-item pin" id="f">{pinF}</div>
//               </div>
//             </div>
//             <div className="board-index-item info">
//               <div className="board-index-item info-details">
//                 <div className="board-index-item title">
//                   {board.title}
//                 </div>
//                 <div className="board-index-item additional">
//                   {secretIcon}
//                   <div className="board-index-item pin-count">
//                     {numPins} Pins
//                   </div>
//                 </div>
//               </div>
//               <button
//                 className={`board-index-item edit-button ${klass}`}
//                 onClick={(e, boardId) => openEditBoard(e, board.id)}
//               >
//                 <i className="fas fa-pencil-alt board-index-item" id="edit-icon"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default withRouter(BoardIndexItem);

import React, { Component } from 'react';
import BoardIndexItem from './board_index_item';


class BoardIndex extends Component {
  constructor(props) {
    super(props);
    this.openEditBoard = this.openEditBoard.bind(this);
  }

  openEditBoard(e, boardId) {
    e.preventDefault();
    this.props.openEditBoard(boardId);
  }

  render() {
    const { boards, pins, currentUser, user, newBoard } = this.props;
    const boardIndexItems = (boards.length > 0) ? (
      boards.map(board => {
        const prevPinIds = (board.pinIds) ? (
          board.pinIds.slice(0, 6)
        ) : (
            board.pinIds
          );
        const previewPins = prevPinIds.map((pinId) => {
          return pins[pinId];
        });
        return (
          <BoardIndexItem
            key={board.id}
            board={board}
            pins={previewPins}
            currentUser={currentUser}
            user={user}
            openEditBoard={this.openEditBoard}
          />
        )
      })
    ) : (
        null // swap with add button using newBoard
      );

    return (
      <div className="board-index">
        {boardIndexItems}
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
      </div>
    )
  }
}


export default BoardIndex;