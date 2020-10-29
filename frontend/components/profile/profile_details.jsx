import React from "react";
import { Link } from "react-router-dom";

const ProfileDetails = ({ user }) => {
    const name = (user.firstName) ? (user.firstName + " " + user.lastName) : user.email;
    const personalInfo = (user.location && user.description) ? (
        <div id="profile-personal">
            <h4>{user.location} | {user.description}</h4>
        </div>
    ) : null;

    const profilePhoto = (user.photo) ? (
        <img src={user.photo} alt="profile-pic" id="photo" />
    ) : ( 
         <i className="far fa-user-circle" id="profile-icon" style={{ "fontSize": "23px", "color": "#8e8e8e" }}></i>
    );

    return (
        <div id="profile-details-background">
            <div id="profile-name">
                {name}
            </div>
            <div id="profile-follows-container">
                <div id="profile-follows">
                    <div id="profile-followers-container">
                        <Link to={`/${user.email}/followers`} className="profile-follows-link">
                            <h4>number of followers</h4>
                        </Link>
                        <div id="profile-follows-spacer-container">
                            <div id="profile-follows-spacer">
                                •
                            </div>
                        </div>
                    </div>
                    <div id="profile-following-container">
                        <Link to={`/${user.email}/followers`} className="profile-follows-link">
                            <h4> X Following</h4>
                        </Link>
                    </div>
                </div>
            </div>
            <div id="profile-personal-container">
                {personalInfo}
            </div>

            <div id="profile-image-container-outer">
                <div id="profile-image-frame">
                    {profilePhoto}
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;