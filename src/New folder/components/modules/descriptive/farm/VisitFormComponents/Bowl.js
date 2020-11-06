import { Button, Divider, Input, Form } from 'antd';
import React, { Component } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent';


export default class Bowl extends Component {
    render() {
        return (

            <Form.List name="farmHods">
                {(fields, dn) => {
                    if (fields.length === 0) {
                        dn.add()
                        fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                    }
                    return (
                        <div>
                            <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                <tr>
                                    <th>رقم الحوض وحجمه</th>
                                    <th>نوع الحوض</th>
                                    <th>نمط الاستزراع</th>
                                    <th>الانواع المستزرعه</th>
                                    <th>نوع السمك</th>
                                    <th>متوسط السمك بالكجم</th>
                                    <th>الانتاج الكلى بالكجم</th>
                                    <th>الكميه بالاف وحده</th>
                                    <th>متوسط سعر الكيلو بالجنيه</th>
                                </tr>
                                {fields.map((field, i) => (
                                    <tr>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'code']}
                                                fieldKey={[field.fieldKey, 'code']}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'hodTypeId']}
                                                fieldKey={[field.fieldKey, 'hodTypeId']}
                                            >
                                                <SelectorFetchComponent entity='HodType' />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'hodPatternId']}
                                                fieldKey={[field.fieldKey, 'hodPatternId']}
                                            >
                                                <SelectorFetchComponent entity='HodPattern' />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'hodFarmingTypeId']}
                                                fieldKey={[field.fieldKey, 'hodFarmingTypeId']}
                                            >
                                                <SelectorFetchComponent entity='HodFarmingType' />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'fishKindId']}
                                                fieldKey={[field.fieldKey, 'fishKindId']}
                                            >
                                                <SelectorFetchComponent entity='FishKind' />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'fishAvgInKg']}
                                                fieldKey={[field.fieldKey, 'fishAvgInKg']}
                                                normalize={parseFloat}
                                            >
                                                <Input type="number" />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'totalProdKg']}
                                                fieldKey={[field.fieldKey, 'totalProdKg']}
                                                normalize={parseFloat}
                                                >
                                                    <Input type="number" />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'prodInUnit']}
                                                fieldKey={[field.fieldKey, 'prodInUnit']}
                                                normalize={parseFloat}
                                                >
                                                    <Input type="number" />
                                            </Form.Item>
                                        </td>
                                        <td>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'kgAvgPrice']}
                                                fieldKey={[field.fieldKey, 'kgAvgPrice']}
                                                normalize={parseFloat}
                                                >
                                                    <Input type="number" />
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




        )
    }
}
