import { connect } from "react-redux";
import PinShow from "./pin_show";

import { fetchSinglePin } from "../../actions/pin_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    pin: state.entitles.pons[ownProps.match.params.pinid],
    users: state.entitles.users,
    currentUserId: state.session.id,
});

const mapDispatchToProps = disoatch => ({
    fetchSinglePin: pinId => dispatch(fetchSinglePin(pinId)),
    openEditPin: pinId => dispatch(openModal("edit-pin", pinId)),
    openNewBoardPin: pinId => dispatch(openModal("new-board-pin", pinId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);