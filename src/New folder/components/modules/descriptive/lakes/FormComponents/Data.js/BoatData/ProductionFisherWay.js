import { Input, Form } from 'antd';
import React, { Component } from 'react'
import SelectorFetchComponent from '../../../../../../FormComponent/SelectorFetchComponent';
const {Item} = Form

export default class ProductionFisherWay extends Component {
    render() {
        return (
            <div>
                <Item
                    label="الحرف"
                    name={["boatVisitData", "fisherWayId"]}
                    normalize={parseFloat}
                    rules={[{ required: true, message: 'ادخل الحرف' }]}

                >
                    <SelectorFetchComponent entity="fisherway" />
                </Item>
                <Item
                    label="عدد الايام"
                    name={["boatVisitData", "dayCount"]}
                    normalize={parseFloat}
                >
                    <Input type="number" value={1} disabled />
                </Item>
                <Item
                    label="كمية الانتاج (كجم)"
                    name={["boatVisitData", "productionQuantity"]}
                    normalize={parseFloat}
                    ادخل كمية الانتاج
                >
                    <Input type="number" />
                </Item>
            </div>
        )
    }
}
