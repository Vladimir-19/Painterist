// import React from "react";
// import {Link} from "react-router-dom";

// import ProfileHeader from "./profile_header";
// import ProfileContent from "./profile_content";

// class ProfileShow extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         // this.props.fetchBoards()
//         // this.props.fetchPins().then(() => this.setState({ pins: 'fetched', loading: false }))
//         const email = this.props.match.params.email;
//         const fetchUser = (userId) => this.props.fetchSingleUser(userId);

//         this.props.fetchAllUsers()
//         .then(res => {
//             const user = Object.values(res.users).find(user => user.email === email);
//             return fetchUser(user.id);
//             // return fetchUser(userId); not hepling
//             // return fetchUser; 
//         });
//     }

//     // pins() {
//     //     const currentUserBoards = this.props.boards.filter(board => (board.userId === this.props.currentUser.id))
//     // }

//     render() {
//         const { currentUser, users, email, boards, pins, openModal, closeModal } = this.props;
//         const user = users.find(user => user.email === email);
//         // const user = this.props.currentUser

//         return (
//             <div id="profile-background">
//             {/* <div>  */}
//                 <div id="profile-container">
//                 {/* <div>  */}
//                     <div id="profile">
//                         <div id="profile-header-container">
//                             <ProfileHeader
//                                 currentUser={currentUser}
//                                 user={user}
//                                 openModal={openModal}
//                                 closeModal={closeModal}
//                             /> 
                            
//                         </div>
//                         <div id="profile-content-container">
//                             <ProfileContent
//                                 user={user}
//                                 boards={boards}
//                                 pins={pins}
//                                 openModal={openModal}
//                                 closeModal={closeModal}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// };

// export default ProfileShow;
import React from "react";
import { Link } from "react-router-dom";

import ProfileHeader from "./profile_header";
import ProfileContent from "./profile_content";

class ProfileShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const username = this.props.match.params.username;
        const fetchUser = (userId) => this.props.fetchSingleUser(userId);

        this.props.fetchAllUsers()
            .then(res => {
                const user = Object.values(res.users).find(user => user.username === username);
                return fetchUser(user.id);
            });
    }

    render() {
        const { currentUser, users, username, boards, pins, openModal, closeModal } = this.props;
        const user = users.find(user => user.username === username);

        return (
            <div id="profile-background">
                <div id="profile-container">
                    <div id="profile">
                        <div id="profile-header-container">
                            <ProfileHeader
                                currentUser={currentUser}
                                user={user}
                                openModal={openModal}
                                closeModal={closeModal}
                            />
                        </div>
                        <div id="profile-content-container">
                            <ProfileContent
                                user={user}
                                boards={boards}
                                pins={pins}
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