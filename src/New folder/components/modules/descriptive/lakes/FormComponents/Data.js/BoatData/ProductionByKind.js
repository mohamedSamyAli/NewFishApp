import { Button, Divider, Input, Form } from 'antd';
import React, { Component } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SelectorFetchComponent from '../../../../../../FormComponent/SelectorFetchComponent';

const TotalValue=({ getFieldValue, setFieldsValue }) => ({
    validator(rule, value) {
        
        let allvalues = getFieldValue("boatProductionFishKinds")
        
console.log(allvalues)
        
        setFieldsValue({boatProductionFishKinds:allvalues.map(e=>{return {...e,TotalProduction:e.firstWeigth+e.secoundWeigth+e.ThirdWeigth}})})
        return Promise.resolve();
        
    },
})

export default class ProductionByKind extends Component {
    render() {
        return (
            <div>
                <Form.List
                name="boatProductionFishKinds"
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
                                        <th rowspan="2" scope="col"><label>الصنف</label></th>
                                        <th colspan="3" scope="col"><label>التحجيم (كجم)</label></th>
                                        <th rowspan="2" scope="col"><label>اجمالى الانتاج(كجم)</label></th>
                                        <th rowspan="2" scope="col"><label>عدد وحدات الصيد</label></th>
                                        <th rowspan="2" scope="col"><label>متوسط سعر الصرف بالجنيه</label></th>
                                    </tr>
                                    <tr>
                                        <th scope="col"><label>أولى</label></th>
                                        <th scope="col"><label>ثانيه</label></th>
                                        <th scope="col"><label>ثالثه</label></th>
                                    </tr>
                                    {fields.map((field, i) => (
                                        <tr>
                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'fishKindId']}
                                                    fieldKey={[field.fieldKey, 'fishKindId']}
                                                >
                                                    <SelectorFetchComponent entity='fishKind' />
                                                </Form.Item>
                                            </td>
                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'firstWeigth']}
                                                    fieldKey={[field.fieldKey, 'firstWeigth']}
                                                    initialValue={0}
                                                    dependencies={['boatProductionFishKinds']}
                                                    rules= {[
                                                        TotalValue]}
                                                    normalize={parseFloat}
                                                >
                                                    <Input type="number"  min={0}/>
                                                </Form.Item>
                                            </td>
                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'secoundWeigth']}
                                                    fieldKey={[field.fieldKey, 'secoundWeigth']}
                                                    normalize={parseFloat}
                                                    initialValue={0}
                                                    rules= {[
                                                        TotalValue]}
                                                >
                                                    <Input type="number" min={0} />
                                                </Form.Item>
                                            </td>
                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'ThirdWeigth']}
                                                    fieldKey={[field.fieldKey, 'ThirdWeigth']}
                                                    normalize={parseFloat}
                                                    initialValue={0}

                                                    rules= {[
                                                        TotalValue]}
                                                >
                                                    <Input type="number" min={0} />
                                                </Form.Item>
                                            </td>
                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'TotalProduction']}
                                                    fieldKey={[field.fieldKey, 'TotalProduction']}
                                                    
                                                    normalize={parseFloat}
                                                >
                                                    <Input type="number" disabled />
                                                </Form.Item>
                                            </td>



                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'unitCount']}
                                                    fieldKey={[field.fieldKey, 'unitCount']}
                                                    normalize={parseFloat}
                                                    initialValue={1}
                                                    >
                                                        <Input type="number" disabled />
                                                    </Form.Item>
                                            </td>
                                            <td>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'KindAvergeValue']}
                                                    fieldKey={[field.fieldKey, 'KindAvergeValue']}
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
            </div>
        )
    }
}
