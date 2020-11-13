import {connect} from "react";
import {withRouter} from "react-router-dom";
import CreateBoardPinForm from "./create_board_pin_form";

import {fetchBoards} from "../../actions/board_actions";
import {createBoardPin} from "../../actions/board_pin_actions";
import {closeModal} from "../../actions/modal_actions";
// import { fetchBoard } from "../../util/board_api_util";

const mapStateToProps = state => {
    const currentUserId = state.session.id;
    const pin = state.entities.piins[state.ui.objectId];
    const allBoards = Object.values(state.entities.boards);

    return {
        currentUserId,
        pin,
        allBoards,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    createBoardPin: boardPin => dispatch(createBoardPin(boardPin)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateBoardPinForm));