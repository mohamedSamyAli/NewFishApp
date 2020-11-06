import React, { Component } from 'react';
import { Table, Tag, Space, Form, Input, Button } from 'antd';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import Column from 'antd/lib/table/Column';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SelectorFetchComponent from './SelectorFetchComponent';

class SpProdutionComponent extends Component {

    render() {
        return (
            <div>
                

                        
                      
                    <Form.List name="users">
                    {(fields, dn) => {
                        if (fields.length === 0) {
                            dn.add()
                            fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                        }
                        

                        return (
                            <div>
                                <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                    <tr>
                        {/* <td rowspan="2" align="center"> */}
                        {/* </td> */}
                        <td colspan="2" align="center"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>فتحة / بوغاز</label></td>
                        <td colspan="3" align="center"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>مياة مالحة</label></td>
                        <td colspan="3" align="center"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>مياة عذبة</label></td>
                    </tr>
                    <tr>
                        <td align="center"><label style={{ fontSize: "14px", fontWeight: "bold" }}>النوع</label></td>
                        <td align="center"><label style={{ fontSize: "14px", fontWeight: "bold" }}>الأسم</label></td>
                        <td align="center"><label style={{ fontSize: "14px", fontWeight: "bold" }}>معدل التدفق</label></td>
                        <td align="center"><label style={{ fontSize: "14px", fontWeight: "bold" }}>سرعة التيار</label></td>
                        <td align="center"><label style={{ fontSize: "14px", fontWeight: "bold" }}>درجة الملوحة(جم/لتر)</label></td>
                        <td align="center"><label style={{ fontSize: "14px", fontWeight: "bold" }}>معدل التدفق</label></td>
                        <td align="center"><label style={{ fontSize: "14px", fontWeight: "bold" }}>سرعة التيار</label></td>
                        <td align="center"><label style={{ fontSize: "14px", fontWeight: "bold" }}>درجة الملوحة(جم/لتر)</label></td>
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
                                            <SelectorFetchComponent entity="gov"/>
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
                                                i > 0 ? <MinusCircleOutlined style={{marginRight:"10px"}}
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
        );
    }
}

export default SpProdutionComponent;