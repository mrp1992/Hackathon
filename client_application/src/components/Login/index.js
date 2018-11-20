import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Layout, Divider, Tabs } from 'antd';
import { browserHistory } from 'react-router';

import Logo from '../resources/letsign.png';


const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        browserHistory.push('/lsapp');
      }
    });
  }

  toggleType(id) {
    var x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');

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
                <Content style={{ padding: '200px 200px 200px 200px' }}>
                    <div className="card-container">
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                                <FormItem
                                     validateStatus={passwordError ? 'error' : ''}
                                     help={passwordError || ''}
                                   >
                                     {getFieldDecorator('password', {
                                       rules: [{ required: true, message: 'Please input your Password!' }],
                                     })(
                                       <Input id="pwd" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} click="toggleType('pwd')"/>} type="password" placeholder="Password" />
                                     )}
                                   </FormItem>
                                <FormItem
                                  validateStatus={userNameError ? 'error' : ''}
                                  help={userNameError || ''}
                                >
                                  {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                  })(
                                    <Input id="tokenId" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} click="toggleType('tokenId')" />} type="password" placeholder="Token Id" />
                                  )}
                                </FormItem>

                                <FormItem>
                                  <Button
                                    type="primary"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}
                                  >
                                    Review Document
                                  </Button>
                                </FormItem>
                              </Form>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Credit Suisse ©2018 LetSIGN Document Verification & Signature
                </Footer>
            </Layout>







    )







  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
export default WrappedHorizontalLoginForm;