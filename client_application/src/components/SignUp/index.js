// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import { Form, Icon, Input, Button } from 'antd';
import './style.css';

const FormItem = Form.Item;

class About extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <Form>
        <FormItem>
        <Input
          size="large"
          name="name"
          autoComplete="off"
          placeholder="placeholder"/>
        </FormItem>

      </Form>
    );
  }
}

export default About;
