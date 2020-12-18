import React from "react";

import ProfileNavBar from "./profile_nav_bar";
import ProfileDetails from "./profile_details";

const ProfileHeader = ({ currentUser, user, openModal, closeModal }) => {
    const klass = (location.hash.includes(currentUser.email)) ? 'show' : 'hide';

    return (
        // box with user info and create-edit nav bar
        <div id="profile-header">
            <div id="profile-header-upper">
                {/* <div id="profile-header-fixed" > it was covering nav bar in personal */}
                <div id="profile-details-container">
                    <ProfileDetails user={user} />
                </div>
                <div id="profile-nav-bar-container" className={`${klass}`}>
                    <ProfileNavBar
                        user={user}
                        openModal={openModal}
                        closeModal={closeModal}
                    />
                </div>
            </div>

        </div>
    )
}

export default ProfileHeader;

ProfileHeader.defaultProps = {
    user: {
        username: '',
        email: '',
        firstName: '',
        lastName: ''
    }
}