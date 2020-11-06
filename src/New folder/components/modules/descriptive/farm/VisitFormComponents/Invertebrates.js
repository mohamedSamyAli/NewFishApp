import React, { Component } from 'react'
import { Form, Input } from 'antd'
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent'

const { Item } = Form
export default class Invertebrates extends Component {
    render() {
        return (
            <div>
                <Item
                    label="العدد الكلى للافقاريات الملتصقة بالنباتات المائية لكل 100 جرام"
                    name={["bioChar", "bc"]}
                >
                    <Input type="number" />
                </Item>
                <Item
                    label="العدد الكلى للافقاريات القاعية لكل متر مربع"
                    name={["bioChar", "bc"]}
                >
                    <Input type="number" />
                </Item>
            </div>
        )
    }
}
