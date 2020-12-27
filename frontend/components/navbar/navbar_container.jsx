
// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
import { connect } from 'react-redux';
import NavBar from './navbar';

import { logoutUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAllUsers, fetchUser} from "../../actions/user_actions" //fetchSingleUser

const mapStateToProps = state => ({
    // currentUser: session && session.id && entities.users[session.id]
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    // fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    logout: () => dispatch(logoutUser()),
    // openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);