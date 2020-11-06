import React, { Component } from 'react'
import { Form, Input, Button, DatePicker, Checkbox } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SelectorFetchComponent from '../../../FormComponent/SelectorFetchComponent';

const { Item } = Form

export default class Decision extends Component {
    render() {
        return (
            <div>
                <Form.List name="rentContractDecisions">
                    {(fields, dn) => {
                        // if (fields.length === 0) {
                        //     dn.add()
                        //     fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                        // }
                        return (
                            <div>
                                <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                    <tr>
                                        <td align="center" bgcolor="#c6c4c4"  width="200px"><label style={{ fontSize: "14px", fontWeight: "bold"  }}>التاريخ</label></td>
                                        <td align="center" bgcolor="#c6c4c4" width="200px"><label style={{ fontSize: "14px", fontWeight: "bold"  }}>رقم القرار</label></td>
                                        <td align="center" bgcolor="#c6c4c4" width="200px"><label style={{ fontSize: "14px", fontWeight: "bold"  }}>الغاء القرار</label></td>
                                        <td align="center" bgcolor="#c6c4c4" width="200px"><label style={{ fontSize: "14px", fontWeight: "bold"  }}>تاريخ الغاء القرار</label></td>
                                        <td align="center" bgcolor="#c6c4c4" width="200px"><label style={{ fontSize: "14px", fontWeight: "bold" ,  }}>ملاحظات</label></td>
                                    </tr>
                                    {fields.map((field, i) => (
                                        <tr>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'decisionDate']}
                                                    fieldKey={[field.fieldKey, 'decisionDate']}
                                                >
                                                    <DatePicker />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'decisionNumber']}
                                                    fieldKey={[field.fieldKey, 'decisionNumber']}
                                                // normalize={(v) => parseFloat(v)}
                                                >
                                                    <Input ></Input>
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'isActive']}
                                                    fieldKey={[field.fieldKey, 'isActive']}
                                                    valuePropName="checked"
                                                    normalize={(v) => v ? 1 : 0}
                                                >
                                                    <Checkbox />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'cancleDate']}
                                                    fieldKey={[field.fieldKey, 'cancleDate']}
                                                >
                                                    <DatePicker />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'comments']}
                                                    fieldKey={[field.fieldKey, 'comments']}
                                                // normalize={(v) => v ? 1 : 0}
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
                                {/* <Item
                                    name="total"
                                    label="اجمالى المبالغ المدفوعه"
                                    normalize={(v) => parseFloat(v)}
                                    >
                                        <Input type="number" />
                                </Item> */}
                            </div>
                        );
                    }}
                </Form.List>

                <Item
                    name={["rentContract", "basicPrice"]}
                    label="سعر اساسى"
                    normalize={(v) => parseFloat(v)}
                >
                    <Input type="number" />
                </Item>
                <Item
                    name={["rentContract", "isBlocked"]}
                    label="حجز إدارى"
                    valuePropName="checked"
                // normalize={(v) => v ? 1 : 0}
                >
                    <Checkbox />
                </Item>
                <Form.Item
                    name={["rentContract", "blockDate"]}
                    label="تاريخ الحجز الادارى"
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name={["rentContract", "BlockTypeId"]}
                    label="نوع الحجز الادارى"
                >
                    <SelectorFetchComponent entity="BlockType"/>
                </Form.Item>
                <Item
                    name={["rentContract", "Blocked"]}
                    label="حالة الحجز الادارى "
                    valuePropName="checked"
                // normalize={(v) => v ? 1 : 0}
                >
                <Checkbox >تم</Checkbox>
                </Item>
                <Form.Item
                    name={["rentContract", "blockComment"]}
                    label="تعليق على الحجز الادارى"
                // normalize={(v) => v ? 1 : 0}
                >
                    <Input.TextArea />
                </Form.Item>
            </div>
        )
    }
}
