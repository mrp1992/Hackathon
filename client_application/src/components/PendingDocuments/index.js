import React, { Component } from 'react';

import AvailableSignatures from '../AvailableSignatures';
import { Row, Col, Table, Tag } from 'antd';
import PropTypes from 'prop-types';
import DocumentFrame from '../DocumentFrame';

class PendingDocuments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isList: true,
            listOfPendingDocs: [
                {
                    title: "Passport Update",
                    type: "IMG",
                    URL: "https://upload.wikimedia.org/wikipedia/commons/8/80/Ukrainian_passport_for_travel_abroad.jpg",
                    dueOn: "30/11/2018"
                },
                {
                    title: "Risk Profile",
                    type: "HTML",
                    URL: "https://fineuploader.com/demos.html",
                    dueOn: "12/12/2018"
                },
                {
                    title: "Investment Portfolio Questionnaire",
                    type: "PDF",
                    URL: "http://www.cedelegroup.com/wp-custom/file/ADD-Menu.pdf",
                    dueOn: "14/12/2018"
                }
            ],
            selectedDocument: null
        };
    }

    openDocument = (record) => {
        this.setState({
            ...this.state,
            isList: false,
            selectedDocument: record
        });
    }

    renderContentColumn = () => {

        if(this.state.isList) {
            const columns = [{
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
                render: (text, record) => <a onClick={() => this.openDocument(record)}>{text}</a>,
            }, {
                title: 'Type',
                key: 'type',
                dataIndex: 'type',
                render: tag => (
                    <span>
                      <Tag color="blue" key={tag}>{tag}</Tag>
                    </span>
                ),
            }, {
                title: 'Due On',
                key: 'dueOn',
                dataIndex: 'dueOn'
            }];

            return <Table columns={columns} dataSource={this.state.listOfPendingDocs} />;
        } else {
            return <DocumentFrame document={this.state.selectedDocument} />
        }
    }

    render() {
        return(
            <Row>
                <Col xs={18}>
                    {this.renderContentColumn()}
                </Col>
                <Col xs={6}>
                    {!this.state.isList && <AvailableSignatures />}
                </Col>
            </Row>
        );
    }
}

PendingDocuments.PropTypes = {
    documents: PropTypes.array
};

export default PendingDocuments;