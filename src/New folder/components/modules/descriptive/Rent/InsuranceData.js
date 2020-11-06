import React, { Component } from 'react'
import { Form, Input, Upload, Button, DatePicker, Select } from 'antd'
import SelectorFetchComponent from '../../../FormComponent/SelectorFetchComponent'

const {Option} = Select
const {Item} = Form
export default class InsuranceData extends Component {
    render() {
        return (
            <div>
                <Item
                        name={["rentContract", "insurancePaymentDate"]}
                        label="تاريخ السداد">
                        <DatePicker />
                    </Item>
                    <Item
                        name={["rentContract", "insuranceValue"]}
                        label="المبلغ"
                        normalize={parseFloat}
                        >
                        <Input type="number"/>
                    </Item>
                    <Item
                        name={["rentContract", "insuranceReceipt"]}
                        label="رقم ايصال سداد المطالبه">
                        <Input />
                    </Item>
                    <Item
                        name={["rentContract", "insurancePaymentTypeId"]}
                        label="حالة مبلغ التامين">
                        
                        <SelectorFetchComponent entity="InsurancePaymentType"/>
                    </Item>
            </div>
        )
    }
}
