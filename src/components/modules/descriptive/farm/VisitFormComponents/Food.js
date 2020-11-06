import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Divider } from 'antd'
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent'

const { Item } = Form
export default class Food extends Component {
    render() {
        return (
            <div>
                <Item
                    name={["farmVisit", "farmSample", "fooderId"]}
                    label="نوع العلف"
                >
                    <SelectorFetchComponent entity="Fooder" />
                </Item>
                <Item
                    name={["farmVisit", "farmSample", "rawProtienId"]}
                    label="البروتين الخام %"
                >
                <SelectorFetchComponent entity="RawProtien" />
                </Item>
                <Item
                    name={["farmVisit", "farmSample", "de"]}
                    label="لطاقة (DE) (Kcal/g)"
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                <Item
                    name={["farmVisit", "farmSample", "dp"]}
                    label="DP للبروتين المهضوم %"
                    normalize={parseFloat}
                    >
                        <Input type="number" />
                </Item>
                <Item
                    name={["farmVisit", "farmSample", "DpDe"]}
                    label="قيمة DE\DP"
                     normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
            </div>
        )
    }
}
