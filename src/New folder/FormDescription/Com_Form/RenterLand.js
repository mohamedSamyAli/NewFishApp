import React, { Component, useState } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Select, Divider } from 'antd'
import DateQuerterComponent from '../../components/FormComponent/DateQuerterComponent'
import SelectorFetchComponent from '../../components/FormComponent/SelectorFetchComponent'
import { getManytextFields_FormItem } from '../helpers'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'
import LandBorder from './LandBorder'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const { Option } = Select;
const { Item } = Form

let LT = ["المزرعه",
"الخور",
"ترع",
"مصارف",
"مناطق التزام",
"اشغالات الميناء",
"حرم بحيرات"]


const RenterLand = (props) => {
    let { type } = props
    return (<>
        {
            type <=5 && (<div>
                <Item
                    name="areaCode"
                    label= {`كود ${LT[type-1]}`}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["gov","govId"]}
                    label="اسم المحافظه"
                >
                    <SelectorFetchComponent entity='gov' />
                </Item>
                <div className="form__sectionDivider">
                    <Divider />
                    <h4 className="form__sectionDivider-text">
                        المساحه الكليه
                        </h4>
                    <Item
                        name="fdan"
                        label="فدان"
                    >
                        <Input></Input>
                    </Item>
                    <Item
                        name="kerat"
                        label="قيراط"
                    >
                        <Input></Input>
                    </Item>
                    <Item
                        name="sahm"
                        label="سهم"
                    >
                        <Input></Input>
                    </Item>
                </div>
             
            </div>)
        }
        {
            type >=6 && (<div>
               
           
               <Item
                    name="areaCode"
                    label= {`كود ${LT[type-1]}`}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["gov","govId"]}
                    label="اسم المحافظه"
                >
                    <SelectorFetchComponent entity='gov' />
                </Item>
                <Item
                    name="activity"
                    label= "نوع النشاط"
                >  <Input></Input>
                </Item>
                <div className="form__sectionDivider">
                    <Divider />
                    <h4 className="form__sectionDivider-text">
                    احداثيات المكان
                        </h4>
                        <Divider />

                    <Form.List label="احداثيات المكان"  name="latLongs">
                {(fields, dn) => {
                    if (fields.length === 0) {
                        dn.add()
                        fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                    }
                    return (
                        <div>
                            <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                <tr>
                                    <td align="center" bgcolor="#c6c4c4" ><label style={{fontSize:"14px", fontWeight: "bold"}}>Latitude</label></td>
                                    <td align="center" bgcolor="#c6c4c4"><label style={{fontSize:"14px", fontWeight: "bold"}}>Longitude</label></td>
                                </tr>
                                {fields.map((field, i) => (
                                    <tr>
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lat']}
                                                fieldKey={[field.fieldKey, 'lat']}
                                            >
                                                <Input  />
                                            </Form.Item>
                                        </td>
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'lon']}
                                                fieldKey={[field.fieldKey, 'lon']}
                                            >
                                                <Input/>
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
                <Item
                    name="totalArea"
                    label= "المساحه الكليه بالمتر"
                >
                    <Input></Input>
                </Item>



                

            </div>)
        }
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