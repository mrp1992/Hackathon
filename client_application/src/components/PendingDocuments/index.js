import React, { Component } from 'react';

import AvailableSignatures from '../AvailableSignatures';
import {Card, Row, Col, Divider} from 'antd';
import PropTypes from 'prop-types';
import DocumentFrame from '../DocumentFrame';
import Image from '../resources/image.png';
import PDF from '../resources/PDF.png';
import Document from '../resources/document.png';
import HTML from '../resources/HTML.png';

const { Meta } = Card;

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
                },
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

    getThumbnail = (type) => {
        switch(type) {
            case 'PDF':
                return <img width={'80px'} height={'100px'} alt="logo" src={PDF} />;
            case 'IMG':
                return <img width={'80px'} height={'100px'} alt="logo" src={Image} />;
            case 'HTML':
                return <img width={'80px'} height={'100px'} alt="logo" src={HTML} />;
            default:
                return <img width={'80px'} height={'100px'} alt="logo" src={Document} />;
        }
    }

    renderContentColumn = () => {

        if(this.state.isList) {
            return (<div style={{display: 'flex', flexWrap: 'wrap'}}>
                {this.state.listOfPendingDocs.map(item => {
                    return <div style={{padding: '10px'}}>
                                <Card
                                hoverable
                                style={{ width: 120 }}
                                cover={this.getThumbnail(item.type)}
                                onClick={() => this.openDocument(item)}
                            >
                                <Meta
                                    title={item.title}
                                    description={`Due On: ${item.dueOn}`}
                                />
                            </Card>
                        </div>
                })}
            </div>);
        } else {
            return <DocumentFrame document={this.state.selectedDocument} />
        }
    }

    render() {
        return(
            <div>
                <Row>
                    <Col xs={this.state.isList ? 24 : 18 }>
                        {this.renderContentColumn()}
                    </Col>
                    <Col xs={6}>
                        {!this.state.isList && <AvailableSignatures count={2}/>}
                    </Col>
                </Row>
            </div>
        );
    }
}

PendingDocuments.PropTypes = {
    documents: PropTypes.array
};

export default PendingDocuments;