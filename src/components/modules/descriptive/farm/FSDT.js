import React, { Component } from 'react';
import { Table, Tag, Space, Form, Input, Button } from 'antd';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import Column from 'antd/lib/table/Column';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SelectorFetchComponent from '../../../../components/FormComponent/SelectorFetchComponent';

class FSDT extends Component {

    render() {
        return (
            <div>
                <Form.List name="farmFishSamples">
                    {(fields, dn) => {
                        if (fields.length === 0) {
                            dn.add()
                            fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                        }
                        return (
                            <div>
                                <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                    <tr>
                                        <th width="63" rowspan="2" scope="col"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>الاسم</label></th>
                                        <th width="54" rowspan="2" scope="col"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>الطول بالسم</label></th>
                                        <th colspan="2" scope="col"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>الوزن الكلي للعينة </label></th>
                                        <th width="54" rowspan="2" scope="col"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>المنطقة</label></th>
                                        <th width="54" rowspan="2" scope="col"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>الجنس</label></th>
                                        <th width="54" rowspan="2" scope="col"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>مرحلة النضوج</label></th>
                                        <th width="54" rowspan="2" scope="col"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>وزن المناسل بالجم</label></th>
                                        <th width="54" rowspan="2" scope="col"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>نسبة الغذاء</label></th>
                                    </tr>
                                    <tr>
                                        <th width="71" scope="col"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>الوزن بالجم</label></th>
                                        <th width="64" scope="col"><label style={{ fontSize: "14px", fontWeight: "bolder" }}>الوزن الصافي
                                        <br />
                                            بالجم
                                            </label>
                                        </th>
                                    </tr>
                                    {fields.map((field, i) => (
                                        <tr>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'FishKindId']}
                                                    fieldKey={[field.fieldKey, 'FishKindId']}
                                                >
                                                    <SelectorFetchComponent entity="FishKind" />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'length']}
                                                    fieldKey={[field.fieldKey, 'length']}
                                                    normalize={parseFloat}
                                                >
                                                    <Input type="number" />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'totalweight']}
                                                    fieldKey={[field.fieldKey, 'totalweight']}

                                                    normalize={parseFloat}
                                                >
                                                    <Input type="number" />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'netweight']}
                                                    fieldKey={[field.fieldKey, 'netweight']}

                                                    normalize={parseFloat}
                                                >
                                                    <Input type="number" />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'location']}
                                                    fieldKey={[field.fieldKey, 'location']}

                                                    normalize={parseFloat}
                                                >
                                                    <Input type="number" />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'gender']}
                                                    fieldKey={[field.fieldKey, 'gender']}

                                                >
                                                    <Input />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'matstage']}
                                                    fieldKey={[field.fieldKey, 'matstage']}

                                                    normalize={parseFloat}
                                                >
                                                    <Input type="number" />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'guttwt']}
                                                    fieldKey={[field.fieldKey, 'guttwt']}

                                                    normalize={parseFloat}
                                                >
                                                    <Input type="number" />
                                                </Form.Item>
                                            </td>
                                            <td align="center">
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'foodConditionId']}
                                                    fieldKey={[field.fieldKey, 'foodConditionId']}
                                                >
                                                    <SelectorFetchComponent entity="FoodCondition" />
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
        );
    }
}

export default FSDT;