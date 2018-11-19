import React, { Component } from 'react';


class SignatureApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canvas: null,
            context: null,
            canvasWidth: 490,
            canvasHeight: 220,
            padding: 25,
            lineWidth: 8,
        }
    }

    openDocument = (event) => {
        console.log(event.target.value);
        this.setState({
            ...this.state,
            isList: false
        })
    }

    render() {
        return(
          <div id="canvasDiv">Signature App</div>
        );
    }

}

export default SignatureApp;