import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Divider, Button, Row, Col, Layout } from 'antd';
import Iframe from 'react-iframe';
import SignatureApp from '../SignatureApp';
import { base64ToString } from './services';
import {html2canvas} from 'html2canvas';
import {jsPDF} from 'jspdf';


const { Content, Footer } = Layout;
const { Meta } = Card;

class DocumentFrame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pdfPageNumber: 1,
            pdfPages: null,
        };

        this.signatureAppRef = React.createRef();
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

    generatePdfDocument(id) {
        const input = document.getElementById(id);
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("download.pdf");
          })
        ;
      }

    accept = () => {
        this.signatureAppRef.current.saveToLocalStorage();
        var image = this.signatureAppRef.current.getImageUrl();
        var pdf = this.generatePdfDocument('reviewContentCard');
        console.log(image);
        console.log(pdf)
        this.signatureAppRef.current.clearSign();
    }

    reject = () => {
        this.signatureAppRef.current.clearSign();
    }

    render() {
        return(
            <Row>
                <Col span={20} offset={2}>
                    <Layout>
                        <Content>
                            <Divider orientation="left">{this.props.document.title}</Divider>
                            <div id='reviewContentCard'>
                                <Card
                                    hoverable
                                    cover={this.renderDocument(this.props.document)}
                                >
                                    <Meta description={`Due On: ${this.props.document.dueOn}`}/>
                                </Card>
                            </div>
                        </Content>


                        <Footer>
                            <Row>
                                <Col xs={18}>
                                    <SignatureApp ref={this.signatureAppRef} showSave={false} showClear={false} canvasWidth={400} canvasHeight={200} acceptFn={this.childAccept} signRef={this.mySignRef}/>
                                </Col>
                                <Col xs={4} offset={2}>
                                    <Row style={{margin: '10px'}}><Button type="primary" size="large" block onClick={this.accept}>Accept</Button></Row>
                                    <Row style={{margin: '10px'}}><Button type="primary" size="large" block onClick={this.reject}>Reject</Button></Row>
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