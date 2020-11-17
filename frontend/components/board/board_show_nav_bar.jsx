import React from "react";
import { Link } from "react-router-dom";
// import { render } from "sass";

class BoardShowNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollPos: window.pageYOffset,
            fadeInTitle: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const { prevScrollPos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const fadeInTitle = (prevScrollPos < currentScrollPos - 50);

        this.setState({
            fadeInTitle
        });
    }

    render() {
        const { openEditBoard, board, user } = this.props;
        const transition = (this.state.fadeInTitle) ? "in" : "out";
        // const klass = (location.hash.includes(user.username)) ? "show" : "hide";
        const klass = (location.hash.includes(user.email)) ? "show" : "hide";

        return (
            <div className="board-show navbar">
                <div className={`board-show button ${klass}`}>
                    <Link 
                        to="/pin-builder"
                        className="board-show button">
                            <i class="fas fa-map-pin"></i>
                    </Link>
                    <button className="boar show button" onClick={(e, boardId) => openEditBoard(e, board.id)}>
                        <i class="far fa-edit" id="edit-board-icon"></i>
                    </button>
                </div>
                <div className="board-show fade-title-container">
                    <div className={`board-show fade-title ${transition}`}>
                        {board.title}
                    </div>
                </div>
                <div className="board-show profile-button-container">
                    <Link
                        // to={`/${user.username}`}
                        to={`/${user.email}`}
                        className="board-show profile-button">
                            <img src={user.photo} className="board-show profile-photo"/>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BoardShowNavBar;

BoardShowNavBar.defaultProps = {
    board: {
        title: "boardman",
        description: "boardman gets paid",
        secret: false
    }
}