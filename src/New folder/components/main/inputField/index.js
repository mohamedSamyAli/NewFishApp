import React from 'react';
import { Form, Input } from 'antd';
import './inputField.css';

const InputField = (props) => {
    return (
        <>
          <Form.Item size="small"
            label= {props.label}
            name= {props.name}
            rules={[...props.rules]}
        >
            <Input  type={props.type}/>
        </Form.Item>
        </>
      );
}
 
export default InputField;