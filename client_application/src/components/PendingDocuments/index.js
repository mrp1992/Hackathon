import React, { Component } from 'react';

import AvailableSignatures from '../AvailableSignatures';
import { Row, Col } from 'antd';

class PendingDocuments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isList: true
        }
    }

    openDocument = (event) => {
        console.log(event.target.value);
        this.setState({
            ...this.state,
            isList: false
        })
    }

    renderContentColumn = () => {
        if(this.state.isList) {
            return <div onClick={this.openDocument}> Rendering List </div>
        } else {
            return <div> Rendering Document</div>
        }
    }

    render() {
        return(
            <Row>
                <Col span={18}>
                    {this.renderContentColumn()}
                </Col>
                <Col span={6}>
                    {!this.state.isList && <AvailableSignatures />}
                </Col>
            </Row>
        );
    }

}

export default PendingDocuments;