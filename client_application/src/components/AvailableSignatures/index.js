import React, { Component } from 'react';
import './style.css';
import CanvasDraw from "react-canvas-draw";

import { PropTypes } from 'prop-types';
import { Row, Col, List, Avatar,Button, Drawer } from 'antd';

class AvailableSignatures extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maxCount: this.props.count || 3,
            placement: "right",
            visible: false,
            listData: null,
        }
    }

    loadSignatures(maxCount) {
        var signatureList = [];
        var i = 0;
        //var allEntries = JSON.parse(localStorage.getItem("savedSignature")) || [];
        var allEntries = JSON.parse(localStorage.getItem("savedSignature")) || [];
        allEntries.reverse();
        allEntries.forEach((entry) => {
            if (i < maxCount) {
                signatureList.push({
                    href: 'http://ant.design',
                    title: `Signature - ${i+1}`,
                    description: `Created on - ${new Date()}`,
                    img: entry
                });
                i++;
            }
        });
        return signatureList;
    }

    toggleDrawer = (_currState) => {
        if (_currState)  {
             this.setState({
                     ...this.state,
                     visible: false,
                     listData: null,
                   });
        } else {
            this.setState({
                    ...this.state,
                    visible: true,
                    listData: this.loadSignatures(this.state.maxCount),
                  });
        }
    }

    onClose = () => {
        console.log("onClose");
        this.toggleDrawer(true);
    }

    componentWillMount() {
        this.setState({
                    ...this.state,
                    listData: this.loadSignatures(this.state.maxCount),
                  });
    }

    componentDidMount() {
        this.setState({
                    ...this.state,
                    listData: this.loadSignatures(this.state.maxCount),
                  });
    }

    drawCanvas1 = (item) => {
        return (<CanvasDraw
          disabled
          ref={canvasDraw => {
                            this.loadableCanvas = canvasDraw;
                            if (this.loadableCanvas) {
                                this.loadableCanvas.loadSaveData(item.img);
                            }
                            }}
          canvasWidth={100}
          canvasHeight={60}
        />);
    }

    drawCanvas = (item) => {
        return (
        <Row>
            <Col xs={18} offset={6}><img width={100} height={60} margin={60} alt="signature" src={item.img}/></Col>
        </Row>
        );

    }

    render() {
        return (
        <div>
            <Drawer
                  title="Recent Signatures"
                  placement={this.state.placement}
                  closable={true}
                  onClose={this.onClose}
                  visible={this.state.visible}>
                { this.state.visible &&
                    <List
                        locale="{emptyText: 'No recent signatures are available.'}"
                        itemLayout="vertical"
                        size="small"
                        dataSource={this.state.listData}
                        renderItem={item => (
                            <List.Item
                                key={item.title}>
                                <List.Item.Meta
                                    avatar={<Avatar icon="edit" />}
                                    title={<a href={item.href}>{item.title}</a>}
                                />
                                    {this.drawCanvas(item)}
                            </List.Item>
                        )}
                    />
                }
                </Drawer>
                <Button type="primary" onClick={() => this.toggleDrawer(this.state.visible)}>Recent Signatures</Button>

            </div>
        );
    }

}
AvailableSignatures.PropTypes = {
  signatureList: PropTypes.array,
};

export default AvailableSignatures;