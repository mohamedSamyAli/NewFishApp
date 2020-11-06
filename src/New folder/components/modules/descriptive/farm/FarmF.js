import React, { Component } from 'react'
import { Form, Input, Collapse, } from 'antd'
import SelectorFetchComponent from '../../../../components/FormComponent/SelectorFetchComponent'
import CodeComponet from './FarmComponent/CodeComponet';
const { Panel } = Collapse;
const { Item } = Form
export default class FarmF extends Component {

    render() {
        return (
            <div>
                        <Item
                            name="governorateId"
                            label="المحافظه"
                            rules={[{ required: true, message: `ادخل المحافظه` }]}
                        >
                            <SelectorFetchComponent parentE="GovEvents" entity='gov' />
                        </Item>
                        <Item
                         name="serial"
                         label="كود المزرعه"
                        >
                            <CodeComponet/>
                        </Item>
                        <Item
                            name="farmTypeId"
                            label="النوع"
                            rules={[{ required: true, message: `ادخل النوع` }]}
                        >
                            <SelectorFetchComponent  entity='FarmType' />
                        </Item>
   
                        <Item
                            label='اسم البحيرة'
                            name="LakeId"
                        >
                            <SelectorFetchComponent ChildE="lakegov" parentE="GovEvents" entity='lake' />
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

            </div>
        )
    }
}
