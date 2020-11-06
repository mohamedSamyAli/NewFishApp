import React, { Component } from 'react';
import { Table, Tag, Space, Form, Input, Button } from 'antd';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import Column from 'antd/lib/table/Column';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SelectorFetchComponent from '../../components/FormComponent/SelectorFetchComponent';


export default function PCSK() {
    return (
        <div>
            <Form.List name="usersssss">
                {(fields, dn) => {
                    if (fields.length === 0) {
                        dn.add()
                        fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                    }
                    return (
                        <div>
                            <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                <tr>
                                    <td align="center" bgcolor="#c6c4c4" ><label style={{fontSize:"14px", fontWeight: "bold"}}>الصنف</label></td>
                                    <td align="center" bgcolor="#c6c4c4"><label style={{fontSize:"14px", fontWeight: "bold"}}>اجمالى الانتاج بالكجم</label></td>
                                    <td align="center" bgcolor="#c6c4c4"><label style={{fontSize:"14px", fontWeight: "bold"}}>عدد وحدات الصيد</label></td>
                                    <td align="center" bgcolor="#c6c4c4"><label style={{fontSize:"14px", fontWeight: "bold"}}>متوسط سعر الصنف بالجنيه</label></td>
                                </tr>
                                {fields.map((field, i) => (
                                    <tr>
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'first']}
                                                fieldKey={[field.fieldKey, 'first']}
                                                rules={[{ required: true, message: 'Missing first name' }]}
                                            >
                                                <SelectorFetchComponent entity="species" />
                                            </Form.Item>
                                        </td>
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'first']}
                                                fieldKey={[field.fieldKey, 'first']}
                                                rules={[{ required: true, message: 'Missing first name' }]}
                                            >
                                                <Input placeholder="First Name" />
                                            </Form.Item>
                                        </td>
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'first']}
                                                fieldKey={[field.fieldKey, 'first']}
                                                rules={[{ required: true, message: 'Missing first name' }]}
                                            >
                                                <Input placeholder="First Name" />
                                            </Form.Item>
                                        </td>
                                        
                                        <td align="center">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'first']}
                                                fieldKey={[field.fieldKey, 'first']}
                                                rules={[{ required: true, message: 'Missing first name' }]}
                                            >
                                                <Input placeholder="First Name" />
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
    )
}
