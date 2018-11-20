// src/components/About/index.js
import React, { Component } from 'react';
import { Layout, Divider } from 'antd';
import PendingDocuments from '../PendingDocuments';
import CompletedDocuments from '../CompletedDocuments';
import { Tabs } from 'antd';

import Logo from '../resources/letsign.png';
import './style.css';

const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;

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
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="Pending Documents" key="1">
                            <PendingDocuments/>
                        </TabPane>
                        <TabPane tab="Completed Documents" key="2">
                            <CompletedDocuments/>
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Credit Suisse ©2018 Client Document Signature Verification
            </Footer>
        </Layout>
    );
  }
}

export default MainPage;
