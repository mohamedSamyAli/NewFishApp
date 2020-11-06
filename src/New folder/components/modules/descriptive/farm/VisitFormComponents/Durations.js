import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Divider } from 'antd'

const { Item } = Form
export default class Durations extends Component {
    render() {
        return (
            <div>
                <Item
                    name={["farmVisit","farmingStartDate"]}
                    label="تاريخ الاستزراع"
                    dependencies={[["farmVisit",'farmingCollectingDate']]}
                    rules= {[
                        ({ getFieldValue ,setFieldsValue}) => ({
                            validator(rule, value) {
                                
                                let start = getFieldValue(["farmVisit","farmingStartDate"])
                                let end   = getFieldValue(["farmVisit","farmingCollectingDate"])
                                if (!start && !end ){
                                    return Promise.resolve();
                                }

                                let temp =end._d-start._d
                                
                                if (temp>0) {
                                    setFieldsValue({farmVisit:{farmingDaysCount:Math.floor(Math.abs(temp/1000/24/60/60))}})
                                    return Promise.resolve();
                                }
                              return Promise.reject('تاريخ البدايه اكبر من تاريخ الحصاد');
                            },
                          })]}
                >
                    <DatePicker/>
                </Item>  
                <Item
                    name={["farmVisit","farmingCollectingDate"]}
                    label="تاريخ الحصاد"
                    
                >
                    <DatePicker/>
                </Item>  
                <Item
                    name={["farmVisit","farmingDaysCount"]}
                    label="مدة الاستزراع (يوم)"
                >
                    <Input type="number" disabled/>
                </Item>  

            </div>
        )
    }
}
