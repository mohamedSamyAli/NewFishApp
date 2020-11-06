import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker } from 'antd'
import SelectorFetchComponent from '../../../FormComponent/SelectorFetchComponent'
import { getManytextFields_FormItem } from '../../../../FormDescription/helpers'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import SpProdutionComponent from '../../../FormComponent/SpProdutionComponent'
import FSDT from './FSDT'
import CodeComponet from './VisitFormComponents/FarmComponent/CodeComponet';
const { Panel } = Collapse;
const { Item } = Form
export default class RentF extends Component {

    render() {
        return (
            <div className="collapsable__Sections">
                <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['0']}>
                    <Panel accordion={true} header="معلومات عامه" key='0'>
                        <Item
                            name={["markaz","governorate","id"]}
                            label="المحافظه"
                            rules={[{ required: true, message: `ادخل المحافظه` }]}
                        >
                            <SelectorFetchComponent parentE="GovEvents" entity='gov' />
                        </Item>
                        <Item
                         name="code"
                         label="كود المزرعه"
                         normalize={(v)=>parseFloat(v)}
                        >
                            <CodeComponet/>
                        </Item>

                        {/* <Item
                            name={["lastVisit","visitDate"]}
                            label="التاريخ"
                        >
                            <DatePicker/>
                        </Item> */}
                        {/* <Item
                            name="mok13"
                            label="اسم صاحب المزرعه"
                        >
                            <Input></Input>
                        </Item> */}
                        {/* <Item
                            name="mok13"
                            label="اسم المزرعه"
                        >
                            <Input></Input>
                        </Item> */}
                        <Item
                            label='اسم البحيرة'
                            name="LakeId"
                        >
                            <SelectorFetchComponent ChildE="lakegov" parentE="GovEvents" entity='lakegov' />
                        </Item>
                        <Item
                            name="village"
                            label="القريه"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name="farmRegion"
                            label="المنطقه"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name="markazId"
                            label="المركز"
                            rules={[{ required: true, message: `ادخل المركز` }]}
                        >
                            <SelectorFetchComponent ChildE="markaz" parentE="GovEvents" entity='markaz' />
                        </Item>
                        <Item
                            name={["markaz","governorate","regionId"]}
                            label="منطقة الثروه السمكيه"
                            // rules={[{ required: true, message: `ادخل المنطقه` }]}
                        >
                            <SelectorFetchComponent disabled ChildE="fisherDesk" parentE="GovEvents" entity='gafard' />
                        </Item>
                        <Item
                            name="ageId"
                            label="عمر المزرعه"
                            // rules={[{ required: true, message: `ادخل المنطقه` }]}
                        >
                            <SelectorFetchComponent  entity='age' />
                        </Item>
                        <Item
                            name="LocationId"
                            label="موقع المزرعه"
                            // rules={[{ required: true, message: `ادخل المنطقه` }]}
                        >
                            <SelectorFetchComponent  entity='location' />
                        </Item>
                        {/* <Item
                            name="ٍSampleN"
                            label="الوظيفه"
                        >
                            <Input />
                        </Item>
                        <Item
                            name="mok32"
                            label="رقم البطاقه"
                            rules={[{ max: 14 }, { type: "number" }]}
                        >
                            <Input />
                        </Item> */}
                    </Panel>
                </Collapse>
            </div>
        )
    }
}
