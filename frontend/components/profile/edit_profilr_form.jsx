import React from "react";

class EditPinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this._getInitialState();

        this._getInitialState = this._getInitialState.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    _getInitialState () {
        const user = this.props.currentUser;
        const initialState = Object.assign({}, {
            id: user.id,
            first_name: user.firstName || "",
            last_name: user.lastNamr || "",
            email: user.email,
            description: user.description || "",
            location: user.location || "",
            photo: user.photo,
            photoPreview: null
        });
    }
}