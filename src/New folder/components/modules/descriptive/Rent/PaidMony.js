import React, { Component } from 'react'
import { Form, Input, Button, DatePicker } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Item } = Form
export default class PaidMony extends Component {
    render() {
        return (
            <div>
                <Form.List name="rentContractPayments">
                    {(fields, dn) => {
                        // if (fields.length === 0) {
                        //     dn.add()
                        //     fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                        // }
                        return (
                            <div>
                                <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                    <tr>
                                        <td align="center" bgcolor="#c6c4c4"  width="200px"><label style={{ fontSize: "14px", fontWeight: "bold" }}>التاريخ</label></td>
                                        <td align="center" bgcolor="#c6c4c4" width="200px"><label style={{ fontSize: "14px", fontWeight: "bold" }}>المبلغ</label></td>
                                        <td align="center" bgcolor="#c6c4c4" width="200px"><label style={{ fontSize: "14px", fontWeight: "bold" }}>رقم ايصال سداد المطالبه</label></td>
                                        <td align="center" bgcolor="#c6c4c4" width="200px"><label style={{ fontSize: "14px", fontWeight: "bold" }}>ملاحظات</label></td>
                                    </tr>
                                    {fields.map((field, i) => (
                                        <tr>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'paymentDate']}
                                                    fieldKey={[field.fieldKey, 'paymentDate']}
                                                >
                                                    <DatePicker />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'val']}
                                                    fieldKey={[field.fieldKey, 'val']}
                                                    dependencies={["rentContractPayments"]}
                                                    rules={[
                                                        ({ getFieldValue, setFieldsValue }) => ({
                                                            validator(rule, value) {
                                                                let sum = 0
                                                                let allvalues = getFieldValue("rentContractPayments")
                                                                
                                                                allvalues.forEach(element => {
                                                                    if(element && element.val){
                                                                        sum += element.val
                                                                    }
                                                                    
                                                                });
                                                                setFieldsValue({rentContract:{totalPayments:sum}})
                                                                return Promise.resolve();
                                                                
                                                            },
                                                        })]}
                                                        
                                                 normalize={(v) => parseFloat(v)}
                                                >
                                                    <Input type="number" />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'receiptNumber']}
                                                    fieldKey={[field.fieldKey, 'receiptNumber']}
                                                >
                                                    <Input type="number"></Input>
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'comments']}
                                                    fieldKey={[field.fieldKey, 'comments']}
                                                >
                                                    <Input.TextArea />
                                                </Form.Item>
                                            </td>
                                            <td className="Htable">
                                                {
                                                     <MinusCircleOutlined style={{ marginRight: "10px" }}
                                                        onClick={() => {
                                                            dn.remove(field.name);
                                                        }}
                                                    /> 
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
                    name={["rentContract", "totalPayments"]}
                    label="اجمالى المبالغ المدفوعه"
                >
                    <Input disabled />
                </Item>
            </div>
        )
    }
}
