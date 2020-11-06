import React, { Component, useState } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Select, Divider } from 'antd'
import SelectorFetchComponent from '../../../FormComponent/SelectorFetchComponent';
import SelectWithAdd from '../../../FormComponent/SelectWithAdd';
import LandBorder from './LandBorder'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Item } = Form

let LT = ["المزرعه",
    "الخور",
    "ترع",
    "مصارف",
    "بركه",
    "مناطق التزام",
    "اشغالات الميناء",
    "حرم بحيرات"]

const RenterLand = (props) => {
    let { type } = props
    
    return (<>
        <Item
            name={["rentContract", "governorateId"]}
            label="اسم المحافظه"
            rules={[{ required: true }]}
        >
            <SelectorFetchComponent parentE="GovEvents" entity='gov' />
        </Item>
        {
            type <= 5 && (<div>
                {
                        <Item
                            name={["rentContract", "partCode"]}
                            label={`كود ${LT[type - 1]}`}
                            rules={[{ required: true }]}
                        >
                            <SelectorFetchComponent ChildE="FarmCode" parentE="GovPartTypeEvents" entity='FarmGov' />
                        </Item>
            
                }
                <div className="form__sectionDivider">
                    <Divider />
                    <h4 className="form__sectionDivider-text">
                        المساحه الكليه
                        </h4>
                    <Item
                        name={["rentContract", "totalAreaF"]}
                        dependencies={["rentContract", "totalAreaQ"], ["rentContract", "totalAreaS"]}
                        label="فدان"
                        initialValue={0}
                        rules={[
                            ({ getFieldValue, setFieldsValue }) => ({
                                validator(rule, value) {
                                    let allvalues = getFieldValue("rentContract")
                                    
                                    console.log(allvalues.totalAreaQ + allvalues.totalAreaS + allvalues.totalAreaF)
                                    if (allvalues.totalAreaQ + allvalues.totalAreaS + allvalues.totalAreaF > 0) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('يجب ادخال المساحه');

                                },
                            })]}

                        normalize={(v) => v ? parseInt(v) : 0}
                    >
                        <Input type="number" min={0} ></Input>
                    </Item>
                    <Item
                        name={["rentContract", "totalAreaQ"]}
                        label="قيراط"
                        normalize={(v) => v ? parseInt(v) : 0}
                        initialValue={0}
                    >
                        <Input type="number" min={0}></Input>
                    </Item>
                    <Item
                        name={["rentContract", "totalAreaS"]}
                        label="سهم"
                        initialValue={0}
                        normalize={(v) => v ? parseInt(v) : 0}
                    >
                        <Input type="number" min={0}></Input>
                    </Item>
                </div>
            </div>)
        }
        {
            type >= 6 && (<div>

                {/* {
                    type == 8 && (
                        <Item
                            name={["rentContract", "partCode"]}
                            label={`كود ${LT[type - 1]}`}
                            rules={[{ required: true }]}
                        >
                            <SelectorFetchComponent ChildE="lake" parentE="GovEvents" entity='lake' />
                        </Item>
                    )
                } */}
                <Item
                    name={["rentContract", "partCode"]}
                    label={`كود ${LT[type - 1]}`}
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "rentLandActivit"]}
                    label="نوع النشاط"
                > 
                <SelectWithAdd/>
                </Item>

                <Item
                    name={["rentContract", "totalArea"]}
                    label="المساحه الكليه بالمتر"
                >
                    <Input></Input>
                </Item>
            </div>)
        }
        <div className="form__sectionDivider">
            <Divider />
            <h4 className="form__sectionDivider-text">
                احداثيات المكان
                        </h4>
            <Divider />

            <Form.List label="احداثيات المكان" name="rentContractCoordinates">
                {(fields, dn) => {
                    if (fields.length === 0) {
                        dn.add()
                        fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                    }
                    return (
                        <div>
                            <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                <tr>
                                    <td align="center" bgcolor="#c6c4c4" ><label style={{ fontSize: "14px", fontWeight: "bold" }}>Latitude</label></td>
                                    <td align="center" bgcolor="#c6c4c4"><label style={{ fontSize: "14px", fontWeight: "bold" }}>Longitude</label></td>
                                </tr>
                                {fields.map((field, i) => (
                                    <tr>
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                                normalize={(v) => parseFloat(v)}
                                            >
                                                <Input type="number"></Input>
                                            </Form.Item>
                                        </td>
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lng']}
                                                fieldKey={[field.fieldKey, 'lng']}
                                                normalize={(v) => parseFloat(v)}
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
        </div>
        <div className="form__sectionDivider">
            <Divider />
            <h4 className="form__sectionDivider-text">
                حدود القطعه
                        </h4>
            <Divider />
            <LandBorder />
            <Divider />
        </div>

    </>
    )
}

export default RenterLand