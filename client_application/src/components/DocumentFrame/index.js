import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Divider } from 'antd';
import {Row, Col, Layout} from 'antd';
import Iframe from 'react-iframe';

const { Content, Footer } = Layout;
const { Meta } = Card;

class DocumentFrame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pdfPageNumber: 1,
            pdfPages: null
        };
    };

    renderDocument = (document) => {
        switch(document.type) {
            case 'PDF':
                return (<Iframe url={document.URL}
                                width="100%"
                                height="700px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                                allowFullScreen/>);
            case 'IMG':
                return (<img alt="logo" src={document.URL} />);
            case 'HTML':
                return (<Iframe url={document.URL}
                                width="100%"
                                height="700px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                                allowFullScreen/>
                );
            default:
                return (<div><span>Invalid Document</span></div>)
        }
    };

    render() {
        return(
            <Row>
                <Col span={20} offset={2}>
                    <Layout>
                        <Content>
                            <Divider orientation="left">{this.props.document.title}</Divider>
                            <Card
                                hoverable
                                cover={this.renderDocument(this.props.document)}
                            >
                                <Meta description={`Due On: ${this.props.document.dueOn}`}/>
                            </Card>

                        </Content>
                        <Footer>
                            <Row>
                                <Col xs={12}>
                                </Col>
                            </Row>
                        </Footer>
                    </Layout>
                </Col>
            </Row>
        );
    }
}

DocumentFrame.PropTypes = {
  document: PropTypes.object
};

export default DocumentFrame;