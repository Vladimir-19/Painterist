import React from "react";
import { connect } from "react-redux";

import EditProfileForm from "./edit_profile_form";
import { updateUser } from "../../actions/user_action";

const mapStateToProps = statr => ({
    errors: state.errors.user,
    currentUser: state.entitles.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    updateUser: (user, id) => dispatch(updateUser(user, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);