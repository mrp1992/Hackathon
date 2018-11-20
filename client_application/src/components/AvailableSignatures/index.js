import React, { Component } from 'react';
import './style.css';
import CanvasDraw from "react-canvas-draw";

import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';

const listData = [];
//for (let i = 0; i < 5; i++) {
//    listData.push({
//        href: 'http://ant.design',
//        title: `Signature - ${i}`,
//        description: `Created on - ${new Date()}`,
//        img: 'https://daily.jstor.org/wp-content/uploads/2014/11/NapoleonSignature2_1050x700.jpg'
//    });
//}

var allEntries = JSON.parse(localStorage.getItem("savedSignature")) || [];
allEntries.forEach((entry) => {
    var i = 0;
    listData.push({
        href: 'http://ant.design',
        title: `Signature - ${i}`,
        description: `Created on - ${new Date()}`,
        img: entry
    });
    i = i + 1;
});

class AvailableSignatures extends Component {

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
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={listData}
                header={<div>Available Singatures</div>}
                renderItem={item => (
                    <List.Item
                        key={item.title}>
                        <List.Item.Meta
                            avatar={<Avatar icon="edit"/>}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {this.drawCanvas(item)}
                    </List.Item>
                )}
            />
        );
    }

}
AvailableSignatures.PropTypes = {
  signatureList: PropTypes.array,
};

export default AvailableSignatures;