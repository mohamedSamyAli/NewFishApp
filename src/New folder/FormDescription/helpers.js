import React from 'react';
import { Checkbox, Input, Form, Button, InputNumber } from 'antd';

export const gettextField=(name,label,required,type)=>{

    let CField = type? Input[type] : Input;
    return  {
        config:{
            name,
            label,
            rules:required?[{ required: true, message:`ادخل${label}`}]:[]
        },
        render:(props)=><CField {...props}/>

    }

}

export const getManytextFields = (names,labels,required,type)=>{
    return names.map((e,i)=>{
        return gettextField(names[i],labels[i],required[i],type[i])
    })
}


export const getManytextFields_FormItem = (names,labels,required,type)=>{
    return names.map((e,i)=>{
        return gettextField_FormItem(names[i],labels[i],required[i],type[i])
    })
}


export const gettextField_FormItem=(name,label,required,type)=>{

    let CField = type? Input[type] : Input;

    let config={
        name,
        label,
        rules:required?[{ required: true, message:`ادخل${label}`}]:[]
    }

    return (<Form.Item
        key={config.name}
        {...config}
        >
        <CField/>
    </Form.Item>)
}