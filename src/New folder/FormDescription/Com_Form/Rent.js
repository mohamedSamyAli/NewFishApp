import React, { Component, useState } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Select, Checkbox } from 'antd'
import DateQuerterComponent from '../../components/FormComponent/DateQuerterComponent'
import SelectorFetchComponent from '../../components/FormComponent/SelectorFetchComponent'
import { getManytextFields_FormItem } from '../helpers'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import RenterType from './RenterType'
import RenterLand from './RenterLand'
const { Panel } = Collapse;
const { Option } = Select;
const { Item } = Form

const RenterSelector = (props) => {
    return (
        <Select
            {...props}
            defaultValue="1"
            showSearch
            style={{ width: 200 }}
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option key='1' value='1'>شخص</Option>
            <Option key='2' value='2'>شركه</Option>
            <Option key='3' value='3'>شخص وشركاء</Option>
            <Option key='4' value='4'>جمعيه</Option>
        </Select>
    )
}
const RenterLandSelector = (props) => {
    return (
        <Select
            {...props}
            defaultValue="1"
            showSearch
            style={{ width: 200 }}
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option key='1' value='1'>مزرعه</Option>
            <Option key='3' value='2'>خور</Option>
            <Option key='5' value='3'>ترع</Option>
            <Option key='6' value='4'>مصارف</Option>
            <Option key='7' value='5'>مناطق التزام</Option>
            <Option key='4' value='6'>اشغالات الميناء</Option>
            <Option key='4' value='7'>حرم بحيرات</Option>
        </Select>
    )
}
const Rent = (props) => {
    const [type, settype] = useState(1)
    const [ltype, setLtype] = useState(1)
    let { TFC } = props
    TFC.Triger = ({ getFieldValue, setFieldsValue, getFieldsValue }) => {

        let values = getFieldsValue("*")

        //#region totalPaid
        let sum = values.paidMonies.reduce(function (a, b) {
            return parseInt(a) + parseInt(b.value);
        }, 0);
        setFieldsValue({ totalPaid: sum ? sum : 0 })
        //#endregion


        //#region totalPrice
        
        if (values.hasOwnProperty("sahm")) {
            let totalArea = parseInt(values.fdan)
            if(values.sahm || values.kerat){
                 totalArea += 1 
            }else{

            }
            setFieldsValue({ totalPrice: parseFloat(values.unitePrice) * Math.floor(totalArea) })

        } else {
            setFieldsValue({ totalPrice: parseFloat(values.unitePrice) * parseInt(values.totalArea) })

        }
      

        //#endregion


    }
    const onRenterChange = (e) => {
        if (e)
            settype(e)
        console.log(e)
    }
    const onRenterLChange = (e) => {
        if (e)
            setLtype(e)
        console.log(e)
    }
    return (
        <div className="collapsable__Sections">
            <Collapse className="checkbox__collapsable-groups" >
                <Panel accordion={true} header="بيانات المستاجر" key='1'>
                    <Item
                        name="renterType"
                        label="نوع المستأجر"
                        getValueProps={onRenterChange}
                        initialValue={'1'}
                    >
                        <RenterSelector />
                    </Item>
                    <RenterType type={type} />
                </Panel>
                <Panel accordion={true} header="بيانات القطعه المؤجره" key='2'>
                    <Item
                        name="areaType"
                        label="نوع القطعه"
                        getValueProps={onRenterLChange}
                        initialValue={'1'}
                    >
                        <RenterLandSelector />
                    </Item>
                    <RenterLand type={ltype} />
                </Panel>
                <Panel accordion={true} header="بيانات عامه عن العقد" key='3'>
                    <Item
                        name="unitePrice"
                        label={"القيمه الابتدائيه لتأجير" + `${type > 5 ? "المتر" : "الفدان"}`}
                    >
                        <Input></Input>
                    </Item>
                    <Item
                        name="totalPrice"
                        label="السعر الكلى">
                        <Input></Input>
                    </Item>
                    <Item
                        name="annualIncrease"
                        label="الزياده السنويه">
                        <Input></Input>
                    </Item>
                    <Item
                        name="increaseType"
                        label="نوع الزياده الثانويه فى الايجار">
                        <Select
                            {...props}
                            defaultValue="1"
                            showSearch
                            style={{ width: 200 }}
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option key='1' value='1'>بسيطه</Option>
                            <Option key='3' value='2'>مركبه</Option>
                        </Select>
                    </Item>
                    <Item
                        name="startDate"
                        label="تاريخ بداية الايجار">
                        <DatePicker />
                    </Item>
                    <Item
                        name="endDate"
                        label="تاريخ نهاية الايجار">
                        <DatePicker />
                    </Item>
                    <Item
                        name="name"
                        label="الرقم الارشيفي للعقد">
                        <Input />
                    </Item>
                    <Item
                        name="refId"
                        label="نسخه مصوره من العقد">
                        <Upload >
                            <Button>
                                <UploadOutlined /> Click to upload
                                </Button>
                        </Upload>
                    </Item>
                </Panel>
                <Panel accordion={true} header="التأمين" key='4'>
                    <Item
                        name="insurDate"
                        label="تاريخ السداد">
                        <DatePicker />
                    </Item>
                    <Item
                        name="insurValue"
                        label="المبلغ">
                        <Input />
                    </Item>
                    <Item
                        name="insurNum"
                        label="رقم ايصال سداد المطالبه">
                        <Input />
                    </Item>
                    <Item
                        name="insurStatus"
                        label="حالة مبلغ التامين">
                        <Select
                            {...props}
                            defaultValue="1"
                            showSearch
                            style={{ width: 200 }}
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option key='1' value='1'>مصادره</Option>
                            <Option key='3' value='2'>استرداد</Option>
                            <Option key='3' value='2'>تحويل</Option>
                        </Select>
                    </Item>
                </Panel>
                <Panel accordion={true} header="المبلغ الذى تم تسديده" key='5'>
                    <Form.List name="paidMonies"

                    >
                        {(fields, dn) => {
                            if (fields.length === 0) {
                                dn.add()
                                fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                            }
                            return (
                                <div>
                                    <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                        <tr>
                                            <td align="center" bgcolor="#c6c4c4" ><label style={{ fontSize: "14px", fontWeight: "bold" }}>التاريخ</label></td>
                                            <td align="center" bgcolor="#c6c4c4"><label style={{ fontSize: "14px", fontWeight: "bold" }}>المبلغ</label></td>
                                            <td align="center" bgcolor="#c6c4c4"><label style={{ fontSize: "14px", fontWeight: "bold" }}>رقم ايصال سداد المطالبه</label></td>
                                        </tr>
                                        {fields.map((field, i) => (
                                            <tr>
                                                <td align="center">
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'pdate']}
                                                        fieldKey={[field.fieldKey, 'pdate']}
                                                    >
                                                        <DatePicker />
                                                    </Form.Item>
                                                </td>
                                                <td align="center">
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'value']}
                                                        fieldKey={[field.fieldKey, 'value']}
                                                    // rules={[
                                                    //     ({ getFieldValue, setFieldsValue }) => ({
                                                    //         validator(rule, value) {


                                                    //             let temp = getFieldValue('paidMonies')
                                                    //             
                                                    //             //value = parseInt(value) ? parseInt(value) : 0
                                                    //             let sum = temp.reduce(function(a, b){
                                                    //                 return parseInt(a) + parseInt(b.value);
                                                    //                 }, 0);

                                                    //             setFieldsValue({ totalPaid: sum? sum:0 })
                                                    //             if (true) {
                                                    //                 return Promise.resolve();
                                                    //             }
                                                    //             // return Promise.reject('المساحه المستخدمه اكبر من المساحه الكليه');
                                                    //         },
                                                    //     })]}
                                                    >
                                                        <Input type="number" />
                                                    </Form.Item>
                                                </td>
                                                <td align="center">
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'reciept']}
                                                        fieldKey={[field.fieldKey, 'reciept']}
                                                     normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                                                    </Form.Item>
                                                </td>
                                                <td className="Htable">
                                                    {
                                                        i > 0 ? <MinusCircleOutlined style={{ marginRight: "10px" }}
                                                            onClick={() => {
                                                                dn.remove(field.name);
                                                            }}
                                                        /> : null
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </table>
                                    <Form.Item>
                                        <Button
                                            type="dashed"
                                            onClick={() => {
                                                dn.add();
                                            }}
                                            block
                                        >
                                            <PlusOutlined /> إضافة صف
                                        </Button>
                                    </Form.Item>
                                </div>
                            );
                        }}
                    </Form.List>
                    <Item
                        name="totalPaid"
                        label="اجمالى المبالغ المدفوعه"

                    >
                        <Input disabled />
                    </Item>
                </Panel>
                <Panel accordion={true} header="الأموال المستحقه وغرامة التأخير" key='6'>
                    <Item
                        name="deservedMony"
                        label="الاموال المستحقه"
                    >
                        <Input />
                    </Item>
                    <Item
                        name="delayFine"
                        label="غرامة التاخير"
                    >
                        <Input />
                    </Item>
                </Panel>
                <Panel accordion={true} header="قرارات إداريه" key='7'>
                    <Form.List name="eliminations">
                        {(fields, dn) => {
                            if (fields.length === 0) {
                                dn.add()
                                fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                            }
                            return (
                                <div>
                                    <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                        <tr>
                                            <td align="center" bgcolor="#c6c4c4" ><label style={{ fontSize: "14px", fontWeight: "bold" }}>التاريخ</label></td>
                                            <td align="center" bgcolor="#c6c4c4"><label style={{ fontSize: "14px", fontWeight: "bold" }}>رقم القرار</label></td>
                                            <td align="center" bgcolor="#c6c4c4"><label style={{ fontSize: "14px", fontWeight: "bold" }}>الغاء القرار</label></td>
                                        </tr>
                                        {fields.map((field, i) => (
                                            <tr>
                                                <td align="center">
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'ddate']}
                                                        fieldKey={[field.fieldKey, 'ddate']}
                                                    >
                                                        <DatePicker />
                                                    </Form.Item>
                                                </td>
                                                <td align="center">
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'column1']}
                                                        fieldKey={[field.fieldKey, 'column1']}
                                                     normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                                                    </Form.Item>
                                                </td>
                                                <td align="center">
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'canceld']}
                                                        fieldKey={[field.fieldKey, 'canceld']}
                                                        valuePropName="checked"
                                                        normalize={(v) => v ? 1 : 0}
                                                    //rules={[{ required: true, message: 'Missing first name' }]}
                                                    >
                                                        <Checkbox />
                                                    </Form.Item>
                                                </td>
                                                <td className="Htable">
                                                    {
                                                        i > 0 ? <MinusCircleOutlined style={{ marginRight: "10px" }}
                                                            onClick={() => {
                                                                dn.remove(field.name);
                                                            }}
                                                        /> : null
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </table>
                                    <Form.Item>
                                        <Button
                                            type="dashed"
                                            onClick={() => {
                                                dn.add();
                                            }}
                                            block
                                        >
                                            <PlusOutlined /> إضافة صف
                                        </Button>
                                    </Form.Item>
                                    <Item
                                        name="total"
                                        label="اجمالى المبالغ المدفوعه"
                                    >
                                        <Input />
                                    </Item>
                                </div>
                            );
                        }}
                    </Form.List>

                    <Item
                        name="basicPrice"
                        label="سعر اساسى"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name="managerialBlock"
                        label="حجز إدارى"
                        valuePropName="checked"
                        normalize={(v) => v ? 1 : 0}
                    >
                        <Checkbox />
                    </Item>
                </Panel>
            </Collapse>
        </div>
    )
}
export default Rent