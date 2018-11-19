import React, { Component } from 'react';
import { Row, Divider } from 'antd';

class CompletedDocuments extends Component {

    render() {
        return(
            <div>
                <Row>
                    <h2>Completed Documents</h2>
                    <Divider/>
                </Row>
                <Row>
                </Row>
            </div>
        );
    }
}

export default CompletedDocuments;