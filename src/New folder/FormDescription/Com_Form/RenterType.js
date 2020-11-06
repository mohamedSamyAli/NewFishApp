import React, { Component, useState } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Select } from 'antd'
import DateQuerterComponent from '../../components/FormComponent/DateQuerterComponent'
import SelectorFetchComponent from '../../components/FormComponent/SelectorFetchComponent'
import { getManytextFields_FormItem } from '../helpers'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const { Option } = Select;
const { Item } = Form

const RenterType = (props) => {
    let { type } = props

    return (<>
        {
           (type==1 || type==3) && (<div>
            <Item
                name="personName"
                label="اسم الشخص"
                >
                <Input></Input>
            </Item>
            <Item
                name="nikname"
                label="اللقب"
                >
                <Input></Input>
            </Item>
            <Item
                name="adress"
                label="العنوان"
                >
                <Input></Input>
            </Item>
            <Item
                name="phoneNumber"
                label="رقم الهاتف"
                >
                <Input></Input>
            </Item>
            <Item
                name="personNationalId"
                label="الرقم القومى"
                >
                <Input></Input>
            </Item>
            <Item
                name="personJob"
                label="الوظيفه"
                >
                <Input></Input>
            </Item>
        </div>)     
    }
    {
           type==2 && (<div>
            <Item
                name="companyType"
                label="نوع الشركه"
                initialValue="1"
                >
                <Select
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option key='1' value='1'>استثماريه</Option>
            <Option key='2' value='2'>غير استثماريه</Option>

        </Select>
            </Item><Item
                name="companyName"
                label="اسم الشركه"
                >
                <Input></Input>
            </Item>
            <Item
                name="personName"
                label="اسم مفوض الشركه"
                >
                <Input></Input>
            </Item>
            <Item
                name="adress"
                label="عنوان الشركه"
                >
                <Input></Input>
            </Item>
            <Item
                name="phoneNumber"
                label="رقم الهاتف"
                >
                <Input></Input>
            </Item>
            <Item
                name="personNationalId"
                label="الرقم القومى"
                >
                <Input></Input>
            </Item>
            <Item
                name="companyId"
                label="رقم السجل التجارى"
                >
                <Input></Input>
            </Item>
        </div>)     
    }
    {
           type==4&& (<div>
            <Item
                name="personName"
                label="اسم مفوض الجمعيه"
                >
                <Input></Input>
            </Item>
            <Item
                name="companyId"
                label="الرقم القومى"
                >
                <Input></Input>
            </Item>
            <Item
                name="companyName"
                label="اسم الجمعيه"
                >
                <Input></Input>
            </Item>
            <Item
                name="adress"
                label="عنوان الجمعيه"
                >
                <Input></Input>
            </Item>
            <Item
                name="phoneNumber"
                label="رقم الهاتف"
                >
                <Input></Input>
            </Item>
            <Item
                name="companyId"
                label="رقم السجل التجارى"
                >
                <Input></Input>
            </Item>
        </div>)     
    }
    </>
    )
    }

export default RenterType