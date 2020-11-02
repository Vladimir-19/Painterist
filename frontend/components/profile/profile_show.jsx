import React from "react";
import {Link} from "react-router-dom";

import ProfileHeader from "./profile_header";
import ProfileContent from "./profile_content";

class ProfileShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const email = this.props.match.params.email;
        const fetchUser = (userId) => this.props.fetchSingleUser(userId);

        this.props.fetchAllUsers()
        .then(res => {
            const user = Object.values(res.users).find(user => user.email === email);
            // return fetchUser(user.id);
            return fetchUser;
        });
    }

    pins() {
        const currentUserBoards = this.props.boards.filter(board => (board.userId === this.props.currentUser.id))
    }

    render() {
        const { currentUser, users, email, boards, pins, openModal, closeModal } = this.props;
        // const user = users.find(user => user.email === email);

        return (
            <div id="profile-background">
                <div id="profile-container">
                    <div id="profile">
                        <div id="profile-header-container">
                            <ProfileHeader
                                currentUser={currentUser}
                                // user={user}
                                openModal={openModal}
                                closeModal={closeModal}
                            />
                        </div>
                        <div id="profile-content-container">
                            <ProfileContent
                                // user={user}
                                // boards={boards}
                                // pins={pins}
                                openModal={openModal}
                                closeModal={closeModal}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ProfileShow;