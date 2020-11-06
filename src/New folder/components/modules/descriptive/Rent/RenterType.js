import React, { Component, useState } from 'react'
import { Form, Input, Select } from 'antd'
import SelectorFetchComponent from '../../../FormComponent/SelectorFetchComponent';

const { Option } = Select;
const { Item } = Form

const RenterType = (props) => {
    let { type } = props

    return (<>
        {
            (type == 1 || type == 3) && (<div>
                <Item
                    name={["rentContract", "name"]}
                    label="اسم الشخص"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "title"]}
                    label="اللقب"
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "address"]}
                    label="العنوان"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "telephone"]}
                    label="رقم الهاتف"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "nID"]}
                    label="الرقم القومى"
                    rules={[{
                        required: true,
                        len: 14,
                        message: "يجب ادخال الرقم القومى المكون من 14 رقم"
                    }]}
                >
                    <Input ></Input>
                </Item>
                <Item
                    name={["rentContract", "job"]}
                    label="الوظيفه"
                >
                    <Input></Input>
                </Item>
            </div>)
        }
        {
            type == 2 && (<div>
                <Item
                    name={["rentContract", "companyTypeId"]}
                    label="نوع الشركه"
                    rules={[{ required: true }]}
                >
                    <SelectorFetchComponent entity="CompanyType"/>
                </Item><Item
                    name={["rentContract", "companyName"]}
                    label="اسم الشركه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "name"]}
                    label="اسم مفوض الشركه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "address"]}
                    label="عنوان الشركه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "telephone"]}
                    label="رقم الهاتف"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "nID"]}
                    label="الرقم القومى"
                    rules={[{
                        required: true,
                        len: 14,
                        message: "يجب ادخال الرقم القومى المكون من 14 رقم"
                    }]}
                >
                    <Input ></Input>
                </Item>
                <Item
                    name={["rentContract", "commercialID"]}
                    label="رقم السجل التجارى"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
            </div>)
        }
        {
            type == 4 && (<div>
                    <Item
                        name={["rentContract", "associationID"]}
                        label="اسم الجمعيه"
                        rules={[{ required: true }]}
                    >
                        <SelectorFetchComponent entity="Association"/>
                    </Item>
                <Item
                    name={["rentContract", "name"]}
                    label="اسم مفوض الجمعيه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "nID"]}
                    label="الرقم القومى"
                    rules={[{
                        required: true,
                        len: 14,
                        message: "يجب ادخال الرقم القومى المكون من 14 رقم"
                    }]}
                    
                >
                    <Input ></Input>
                </Item>
                <Item
                    name={["rentContract", "address"]}
                    
                    label="عنوان الجمعيه"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "telephone"]}
                    label="رقم الهاتف"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["rentContract", "commercialID"]}
                    label="رقم السجل التجارى"
                    rules={[{ required: true }]}
                >
                    <Input></Input>
                </Item>
            </div>)
        }

    </>
    )
}

export default RenterType