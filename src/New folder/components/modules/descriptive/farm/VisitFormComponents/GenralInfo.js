import React, { Component } from 'react'
import { Form, Input, Collapse,DatePicker } from 'antd'
import SelectorFetchComponent from '../../../../../components/FormComponent/SelectorFetchComponent'
const { Item } = Form
export default class GenralInfo extends Component {
    render() {
        return (
            <div>
                    <Item
                            name={["farmVisit","farmId"]}
                            label="كود المزرعه"
                        >
                            <Input></Input>
                        </Item>

                        <Item
                            name={["farmVisit","visitDate"]}
                            label="التاريخ"
                            rules={[
                                { validator:(_, value) => {
                                    console.log(value)
                                    return value <new Date()? Promise.resolve() : Promise.reject('غير مسموح بتاريخ اكبر من اليوم') }
                                },
                              ]}
                        >
                            <DatePicker />
                        </Item>
                        <Item
                            name={["farmVisit","ownerName"]}
                            label="اسم صاحب المزرعه"
                            rules={[{ required: true, message: 'يجب ادخال اسم صاحب المزرعه' }]} 
                            >
                            <Input></Input>
                        </Item>
                        <Item
                            name={["farmVisit","farmName"]}
                            label="اسم المزرعه"
                            rules={[{ required: true, message: 'يجب اسم المزرعه' }]} 

                        >
                            <Input></Input>
                        </Item>
  
                        <Item
                            name={["farmVisit","ownerJob"]}
                            label="الوظيفه"
                        >
                            <Input />
                        </Item>
                        <Item
                            name={["farmVisit","ownerNID"]}
                            label="رقم البطاقه"
                            rules={[{
                                required: true,
                                // type: "number",
                                len: 14,
                                message: "يجب ادخال الرقم القومى المكون من 14 رقم"
                            }]}
                        >
                            <Input />
                        </Item>
                        {/* <Item
                            name={["farmVisit","ownerNID"]}
                            label="عمر المزرعة السمكية"
                            rules={[{ required: true, message: `ادخل المنطقه` }]}
                        >
                            <SelectorFetchComponent entity='age' />
                        </Item> */}
            </div>
        )
    }
}
