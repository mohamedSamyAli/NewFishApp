import React, { Component } from 'react'
import SelectorFetchComponent from '../../../../../FormComponent/SelectorFetchComponent'
import { Form, Input,Collapse, DatePicker } from 'antd'

export default class Genral extends Component {
    render() {
        return (
            <div>
                <Form.Item
                    name="visitDate"
                    label="تاريخ الزياره"
                    >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name={['markaz','GovernorateId']}
                    label="المحافظه"
                    rules={[{ required: true, message: `ادخل المحافظه` }]}
                    >
                    <SelectorFetchComponent parentE="GovEvents" entity='gov' />
                </Form.Item>
                <Form.Item
                    name='lakeID'
                    label="اسم البحيره"
                    rules={[{ required: true, message: `ادخل البحيره` }]}
                    >
                   <SelectorFetchComponent ChildE="lake" parentE="GovEvents" entity='lake' />

                </Form.Item>
                <Form.Item
                    name='markazId'
                    label="المركز"
                    rules={[{ required: true, message: `ادخل المركز` }]}
                >
                    <SelectorFetchComponent ChildE="markaz" parentE="GovEvents" entity='markaz' />
                </Form.Item>
                <Form.Item
                    name='fisherDestId'
                    label="مكتب الصيد"
                    rules={[{ required: true, message: `ادخل مكتب الصيد` }]}
                    >
                    <SelectorFetchComponent ChildE="fisherDesk" parentE="GovEvents" entity='fisherDesk' />
                </Form.Item>
                <Form.Item
                    name={['markaz','Governorate','RegionId']}
                    label="المنطقه"
                    rules={[{ required: true, message: `ادخل المنطقه` }]}
                    >
                    <SelectorFetchComponent ChildE="gafard" parentE="GovEvents" entity='gafard' />
                </Form.Item>
            </div>
        )
    }
}
