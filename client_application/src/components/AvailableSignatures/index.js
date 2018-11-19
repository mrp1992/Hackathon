import React, { Component } from 'react';
import './style.css';

import { PropTypes } from 'prop-types';
import { List, Avatar } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `Signature - ${i}`,
        description: `Created on - ${new Date()}`,
        img: 'https://daily.jstor.org/wp-content/uploads/2014/11/NapoleonSignature2_1050x700.jpg'
    });
}

class AvailableSignatures extends Component {

    constructor(props) {
        super(props);
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
                            avatar={<Avatar src={item.img} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                    <img width={272} alt="logo" src={item.img} />
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