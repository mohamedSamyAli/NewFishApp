import { Input,Form } from 'antd'
import React, { Component } from 'react'

export default class Area extends Component {
    render() {
        return (
            <div>
                 <Form.Item
                    name="totalArea"
                    label="المساحة الكلية للبحيرة (بالفدان)"
                    dependencies={['totalUsedArea']}
                    normalize={parseFloat}

                    rules={[
                        ({ getFieldValue, setFieldsValue }) => ({
                            validator(rule, value) {
                                let temp = parseInt(getFieldValue('totalUsedArea'))
                                value = parseInt(value) ? parseInt(value) : 0
                                setFieldsValue({ totalUnUsedArea: -temp + value })
                                if (true) {
                                    return Promise.resolve();
                                }
                                // return Promise.reject('المساحه المستخدمه اكبر من المساحه الكليه');
                            },
                        })]}
                        >
                    <Input type="number" />
                </Form.Item>
                <Form.Item
                    name="totalUsedArea"
                    label="المساحة المستغلة فى الصيد داخل البحيرة (بالفدان)"
                    dependencies={['totalArea']}
                    normalize={parseFloat}
                    rules={[
                        ({ getFieldValue, setFieldsValue }) => ({
                            validator(rule, value) {


                                let temp = parseInt(getFieldValue('totalArea'))
                                value = parseInt(value) ? parseInt(value) : 0
                                setFieldsValue({ totalUnUsedArea: temp - value })
                                if (temp >= value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('المساحه المستخدمه اكبر من المساحه الكليه');
                            },
                        })]}
                        >
                    <Input type="number" />
                </Form.Item>
                <Form.Item
                    normalize={parseFloat}
                    name="totalUnUsedArea"
                    label="المساحة الغير مستغلة فى الصيد (المساحات المغطاة بالنباتات المائية) (بالفدان)"
                    >
                    <Input disabled type="number" />
                </Form.Item>
            </div>
        )
    }
}
