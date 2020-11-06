import React from 'react';
import * as premissions from '../FormComponent/premissions'
import PremissionsComponent from '../FormComponent/PremissionComponent'
import { Checkbox, Input, Form, Button } from 'antd';
const CheckboxGroup = Checkbox.Group;

function UserJop(props) {

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    const onFinish = (e) => {
        console.log(e)
    }
    return (
        <div>
            {/* <Form
                name="validate_other"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            > */}
                <Form.Item
                    label="اسم الوظيفه"
                    name={["uJobName",'smsm']}
                     rules={[{ required: true, message:'ادخل اسم الوظيفه'}]}
                >
                    <Input/>
                </Form.Item>
                <div style={{ display: "flex" }}>
                    <Form.Item name="p5">
                        <CheckboxGroup name="p5">
                        <Checkbox  value={1}>
                            مسؤول النظام
                </Checkbox>
                        </CheckboxGroup>
                    </Form.Item>
                    <Form.Item name="p1">
                        <PremissionsComponent key="544" options={premissions.descripOptions} titlename="البيانات الوصفيه" titleKey={2} />
                    </Form.Item>
                    <Form.Item name="p2">
                        <PremissionsComponent key="545" options={premissions.spatialOptions} titlename=" البيانات المكانيه" titleKey={3} />
                    </Form.Item>
                    <Form.Item name="p3">
                        <PremissionsComponent key="547" options={premissions.QueriesOptions} titlename="استفسارات سابقة التعريف" titleKey={13} />
                    </Form.Item>
                    <Form.Item name="p4">
                            <CheckboxGroup name = "p4">

                        <Checkbox value={4}  key="4" >
                            التقارير
                        </Checkbox>
                            </CheckboxGroup>
                        
                    </Form.Item>
                </div>
                {/* <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item> */}
            {/* </Form> */}
        </div>
    );
}
export default UserJop;