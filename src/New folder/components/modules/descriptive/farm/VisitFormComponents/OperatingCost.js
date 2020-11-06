import React, { Component } from 'react'
import { Form, Input, InputNumber } from 'antd'
const { Item } = Form


const Fieldsum = ({ getFieldValue, setFieldsValue }) => ({
    validator(rule, value) {
        let FC = getFieldValue("farmVariableCosts")
        let sum = FC[0].val +
            FC[1].val +
            FC[2].val +
            FC[3].val +
            FC[4].val +
            FC[5].val +
            FC[6].val

        setFieldsValue({ farmVisit: { totalVariableCost: sum } })
        return Promise.resolve();

    },
})

export default class OperatingCost extends Component {
    render() {
        return (
            <div>
                <Form.List name="farmVariableCosts">
                    {
                        () => {
                            return (<div>
                                <Item
                                    name={[0, "val"]}
                                    label="الاعلاف"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[Fieldsum]}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                <Item
                                    name={[1, "val"]}
                                    label="الاسمده العضويه والكميائيه"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[Fieldsum]}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                <Item
                                    name={[2, "val"]}
                                    label="الطاقه"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[Fieldsum]}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                <Item
                                    name={[3, "val"]}
                                    label="الصيانه"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[Fieldsum]}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                <Item
                                    name={[4, "val"]}
                                    label="ضرائب ورسوم"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[Fieldsum]}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                <Item
                                    name={[5, "val"]}
                                    label="اجور"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[Fieldsum]}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                <Item
                                    name={[6, "val"]}
                                    label="اخرى"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[Fieldsum]}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                            </div>
                            )
                        }
                    }
                </Form.List>
                <Item
                    name={["farmVisit", "totalVariableCost"]}
                    label="الاجمالى"
                    normalize={parseFloat}
                    initialValue={0}
                    
                >
                    <Input type="number" disabled />
                </Item>
            </div>
        )
    }
}
