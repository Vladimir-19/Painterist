// import React from "react";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import CreateBoardPinForm from "./create_board_pin_form";


// import { fetchBoards } from "../../actions/board_actions";
// import { createBoardPin } from "../../actions/board_pin_actions";
// import { openModal, closeModal } from "../../actions/modal_actions";

// const mapStateToProps = state => {
//   const currentUserId = state.session.id;
//   const pin = state.entities.pins[state.ui.objectId];
//   const allBoards = Object.values(state.entities.boards);

//   return {
//     currentUserId,
//     pin,
//     allBoards,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   fetchBoards: () => dispatch(fetchBoards()),
//   createBoardPin: boardPin => dispatch(createBoardPin(boardPin)),
//   // openNewBoard: () => dispatch(openModal('new-board')),
//   closeModal: () => dispatch(closeModal())
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateBoardPinForm));
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CreateBoardPinForm from "./create_board_pin_form";


import { fetchBoards } from "../../actions/board_actions";
import { pinToBoard } from "../../actions/board_pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  // const currentUserId = state.session.id;
  // const pin = state.entities.pins[state.ui.objectId];
  // const allBoards = Object.values(state.entities.boards);

  return {
    // currentUserId,
    currentUser: state.entities.users[state.session.id],
    // pin,
    // allBoards,
    boards: Object.values(state.entities.boards)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  pinToBoard: boardPin => dispatch(pinToBoard(boardPin)),
  // openNewBoard: () => dispatch(openModal('new-board')),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateBoardPinForm));