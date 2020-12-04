import React from "react";

class DeleteBoardForm extends React.Component {
    constructor(props) {
        super(props);

        // this.handleDeleteFOREVER = this.handleDeleteFOREVER.bind(this);
        this.handleDeleteB = this.handleDeleteB.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleDeleteB(e) {
        e.preventDefault();
        this.props.processForm(this.props.boardId)
            .then(this.props.closeModal)
            .then(() => location.reload());
    }

    handleCancel(e, boardId) {
        e.preventDefault();
        this.props.openEditBoard(this.props.boardId);
    }

    render() {
        const { boardId, formTitle } = this.props;

        return (
            <div className="delete-board container">
                <form className="delete-board form">
                    <div className="delete-board header">
                        <div className="delete-board form-title">
                            {formTitle}
                        </div>
                    </div>
                    <div className="delete-board body">
                        <div className="delete-board confirmation-message">
                            Once you delete a board and all it's Pins, you can't undo it!
                        </div>
                    </div>
                    <div className="delete-board footer">
                        <div className="delete-board buttons">
                            <button className="delete-board button delete" onClick={this.handleDeleteB}>
                                Delete Forever
                            </button>
                            <button className="delete-board button cancel" onClick={(e, boardId) => this.handleCnacel(e, boardId)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default DeleteBoardForm;