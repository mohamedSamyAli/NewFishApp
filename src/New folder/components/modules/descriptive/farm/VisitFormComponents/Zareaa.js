import { Button, Divider, Input, Form } from 'antd';
import React, { Component } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent';
export default class Zareaa extends Component {
    render() {
        return (
            <div>
                <Form.List name="farmFishSeeds">
                    {(fields, dn) => {
                        if (fields.length === 0) {
                            dn.add()
                            fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                        }
                        return (
                            <div>
                                <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                    <tr>
                                        <th rowspan="2" scope="col"><label>الصنف</label></th>
                                        <th colspan="3" scope="col"><label>عدد الزريعة بالألف</label></th>
                                        <th rowspan="2" scope="col"><label>سعر<br /> الألف بالجنيه</label></th>
                                        <th rowspan="2" scope="col"><label>المصدر</label></th>
                                    </tr>
                                    <tr>
                                        <th scope="col"><label>النوع</label></th>
                                        <th scope="col"><label>العدد</label></th>
                                        <th scope="col"><label>م.الوزن<br />للسمكة الواحدة </label></th>
                                    </tr>
                                    {fields.map((field, i) => (
                                        <tr>
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
                                                    name={[field.name, 'fishSeedTypeId']}
                                                    fieldKey={[field.fieldKey, 'fishSeedTypeId']}
                                                >
                                                    <SelectorFetchComponent entity='FishSeedType' />
                                                </Form.Item>
                                            </td>
                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'count']}
                                                    fieldKey={[field.fieldKey, 'count']}
                                                    normalize={parseFloat}
                                                >
                                                     <Input type="number" />
                                                </Form.Item>
                                            </td>
                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'avgWeight']}
                                                    fieldKey={[field.fieldKey, 'avgWeight']}
                                                    normalize={parseFloat}
                                                    >
                                                         <Input type="number" />
                                                </Form.Item>
                                            </td>
                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    normalize={parseFloat}
                                                    >
                                                         <Input type="number" />
                                                </Form.Item>
                                            </td>
                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'fishSeedSourceId']}
                                                    fieldKey={[field.fieldKey, 'fishSeedSourceId']}
                                                >
                                                    <SelectorFetchComponent entity='fishSeedSource' />
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
}
