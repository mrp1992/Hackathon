import React, { Component } from 'react';
import './style.css';
import CanvasDraw from "react-canvas-draw";

import { PropTypes } from 'prop-types';
import { List, Avatar,Button, Drawer } from 'antd';

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

    drawCanvas = (item) => {
        return <CanvasDraw
            disabled
            ref={canvasDraw => {
                this.loadableCanvas = canvasDraw;
                this.loadableCanvas.loadSaveData(item.img);
            }}
            canvasWidth={100}
            canvasHeight={60}
        />
    }

    render() {
        return (
        <div>
            <Drawer
                  title="Available Signatures"
                  placement={this.state.placement}
                  closable={true}
                  onClose={this.onClose}
                  visible={this.state.visible}>
                { this.state.visible &&
                    <List
                        locale="{emptyText: 'No signatures are available.'}"
                        itemLayout="vertical"
                        size="small"
                        dataSource={this.state.listData}
                        renderItem={item => (
                            <List.Item
                                key={item.title}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.img} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />

                                    <CanvasDraw
                                          disabled
                                          ref={canvasDraw => {
                                                            this.loadableCanvas = canvasDraw;
                                                            if (this.loadableCanvas) {
                                                                this.loadableCanvas.loadSaveData(item.img);
                                                            }
                                                            }}
                                          canvasWidth={100}
                                          canvasHeight={60}
                                        />

                            </List.Item>
                        )}
                    />
                }
                </Drawer>
                <Button type="primary" onClick={() => this.toggleDrawer(this.state.visible)}>Available Signatures</Button>

            </div>
        );
    }

}
AvailableSignatures.PropTypes = {
  signatureList: PropTypes.array,
};

export default AvailableSignatures;