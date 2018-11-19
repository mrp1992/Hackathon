// src/components/About/index.js
import React, { Component } from 'react';
import { Layout, Menu, Icon, Divider } from 'antd';
import PendingDocuments from '../PendingDocuments';
import Logo from './resources/letsign.png';
import './style.css';

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

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
                        <img width={120} src={Logo} />
                    </div>
                </div>
                <Divider className="app-title-divider"/>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />Pending</span>}>
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />Completed</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <PendingDocuments/>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Credit Suisse ©2018 Client Document Signature Verification
            </Footer>
        </Layout>
    );
  }
}

export default MainPage;
