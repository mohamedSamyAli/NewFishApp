import React, { Component } from 'react'
import { Form, Input, InputNumber } from 'antd'
const { Item } = Form
export default class FixedCost extends Component {
    render() {
        return (
            <div>
                <Form.List name="farmFixedCosts">
                    {
                        () => {
                            return (<div>
                                
                                <Item
                                    name={[0, "val"]}
                                    label="الارض"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[
                                        ({ getFieldValue, setFieldsValue }) => ({
                                            validator(rule, value) {
                
                                                let FC = getFieldValue("farmFixedCosts")
                                                let sum = FC[0].val + 
                                                          FC[1].val + 
                                                          FC[2].val + 
                                                          FC[3].val
                
                                                          setFieldsValue({farmVisit:{totalFixedCost: sum} })
                                                          return Promise.resolve();
                
                                            },
                                        })]}
                                >
                                    <Input type="number" min={0} />
                                </Item>

                                <Item
                                    name={[1, "val"]}
                                    label="تكلفة الاحواض"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[
                                        ({ getFieldValue, setFieldsValue }) => ({
                                            validator(rule, value) {
                
                                                let FC = getFieldValue("farmFixedCosts")
                                                let sum = FC[0].val + 
                                                          FC[1].val + 
                                                          FC[2].val + 
                                                          FC[3].val
                
                                                          setFieldsValue({farmVisit:{totalFixedCost: sum} })
                                                          return Promise.resolve();
                
                                            },
                                        })]}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                <Item
                                    name={[2, "val"]}
                                    label="المعدات"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[
                                        ({ getFieldValue, setFieldsValue }) => ({
                                            validator(rule, value) {
                
                                                let FC = getFieldValue("farmFixedCosts")
                                                let sum = FC[0].val + 
                                                          FC[1].val + 
                                                          FC[2].val + 
                                                          FC[3].val
                
                                                          setFieldsValue({farmVisit:{totalFixedCost: sum} })
                                                          return Promise.resolve();
                
                                            },
                                        })]}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                <Item
                                    name={[3, "val"]}
                                    label="المبانى"
                                    initialValue={0}
                                    normalize={parseFloat}
                                    rules={[
                                        ({ getFieldValue, setFieldsValue }) => ({
                                            validator(rule, value) {
                                                let FC = getFieldValue("farmFixedCosts")
                                                let sum = FC[0].val + 
                                                          FC[1].val + 
                                                          FC[2].val + 
                                                          FC[3].val
                
                                                setFieldsValue({farmVisit:{totalFixedCost: sum} })
                                                return Promise.resolve();
                
                                            },
                                        })]}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                            </div>
                            )
                        }
                    }
                </Form.List>
                <Item
                    name={["farmVisit", "totalFixedCost"]}
                    label="الاجمالى"

                >
                    <Input type="number" disabled />
                </Item>
            </div>
        )
    }
}
