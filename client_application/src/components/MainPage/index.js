// src/components/About/index.js
import React, { Component } from 'react';
import { Layout, Row, Divider } from 'antd';
import PendingDocuments from '../PendingDocuments';
import CompletedDocuments from '../CompletedDocuments';

import Logo from '../resources/letsign.png';
import './style.css';

const { Header, Content, Footer } = Layout;

class MainPage extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    return (
        <Layout>
            <Header className="header" style={{height: '100%'}}>
                <div className="container" style={{ maxWidth: "1500px"}}>
                    <div className="app-title" >
                        <img alt='logo' width={120} src={Logo} />
                    </div>
                </div>
                <Divider className="app-title-divider"/>
            </Header>
            <Content style={{ padding: '50px 50px 50px 50px' }}>
                <Row>
                    <PendingDocuments/>
                </Row>
                <Row>
                    <CompletedDocuments/>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Credit Suisse ©2018 Client Document Signature Verification
            </Footer>
        </Layout>
    );
  }
}

export default MainPage;
