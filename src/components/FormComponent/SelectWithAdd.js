import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { baseURl } from '../../URLS'
const { Option } = Select;
const axios = require('axios')

let index = 0;

export default class SelectWithAdd extends Component {


    constructor(props) {
        super(props)
        this.state = {
            items:[]
        }
    }
    fetch() {
        axios.get(baseURl + "RentLandActivit")
            .then((response) => {
                this.setState({ items: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    componentDidMount() {
        this.fetch()
    }
    onNameChange = event => {
        this.setState({
            name: event.target.value,
        });
    };

    addItem = () => {
        const { items, name } = this.state;
        if (name) {

            axios.post(baseURl + "RentLandActivit", { name }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(r => {
                this.fetch()
            }).catch(r => { console.log(r) })
        }
    }



render() {
    const { items, name } = this.state;
    return (
        <Select
            {...this.props}
            style={{ width: 240 }}
            dropdownRender={menu => (
                <div>
                    {menu}
                    <Divider style={{ margin: '4px 0' }} />
                    <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                        <Input style={{ flex: 'auto' }} value={name} onChange={this.onNameChange} />
                        <a
                            style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                            onClick={this.addItem}
                        >
                            <PlusOutlined /> اضافة عنصر جديد
              </a>
                    </div>
                </div>
            )}
        >
            {items.map(item => (
                <Option key={item.id}>{item.name}</Option>
            ))}
        </Select>
    );
}
}

