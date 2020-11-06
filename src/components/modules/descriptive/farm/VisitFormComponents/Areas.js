import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Divider } from 'antd'

const { Item } = Form

const areaRul = ({ getFieldValue ,setFieldsValue}) => ({
    validator(rule, value) {
        
        let areaS=0
        let areaQ=0
        let areaF=0
    
        let alldata = getFieldValue("farmHeazas")
        alldata.forEach(element => {
            areaS+=element.areaS?element.areaS:0
            areaQ+=element.areaQ?element.areaQ:0
            areaF+=element.areaF?element.areaF:0
        });
        
        areaQ += parseInt(areaS/24)
        areaS = areaS%24

        areaF += parseInt(areaQ/24)
        areaQ = areaQ%24

        setFieldsValue({farmVisit:{areaF,areaQ,areaS}})
            return Promise.resolve();
    
    },
  })


export default class Areas extends Component {
    render() {
        return (
            <div>/
                <Item
                    name={["farmVisit", "areaF"]}
                    label="فدان"
                    normalize={parseFloat}
                >
                    <Input type="number" disabled/>
                </Item>
                <Item
                    name={["farmVisit", "areaQ"]}
                    label="قيراط"
                    normalize={parseFloat}
                >
                    <Input type="number" disabled/>
                </Item>
                <Item
                    name={["farmVisit", "areaS"]}
                    label="سهم"
                    normalize={parseFloat}
                >
                    <Input type="number" disabled/>
                </Item>
                <Form.List name="farmHeazas" 
                >
                    {() => {
                        return (


                            <table class="customtable" border="1"  >
                                <thead>

                                    <tr>
                                        <th rowspan="2" scope="col" width="175"><label style={{ fontSize: "18px", fontWeight: "bold" }}>نوع الملكية</label></th>
                                        <th colspan="3" scope="col"><label style={{ fontSize: "18px", fontWeight: "bold" }}>المساحة </label></th>
                                        <th width="226" rowspan="2" scope="col">&nbsp;</th>
                                        <th width="31" rowspan="2" scope="col">&nbsp;</th>
                                    </tr>
                                    <tr>
                                        <th width="30" scope="col"><label style={{ fontSize: "14px", fontWeight: "bold" }}>سهم</label></th>
                                        <th width="49" scope="col"><label style={{ fontSize: "14px", fontWeight: "bold" }}>قيراط</label></th>
                                        <th width="49" scope="col"><label style={{ fontSize: "14px", fontWeight: "bold" }}>فدان</label></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><label style={{ fontSize: "14px", fontWeight: "bolder" }}>حكومية</label>   </td>
                                        <td>
                                            <Item
                                                name={[0, "areaS"]}
                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                             

                                            >
                                                <input type="number" />
                                            </Item>
                                            
                                        </td>
                                        <td>
                                            <Item
                                                name={[0, "areaQ"]}
                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[0, "areaF"]}
                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item>
                                        </td>
                                        <td >&nbsp;</td>
                                        <td >&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td ><label style={{ fontSize: "14px", fontWeight: "bolder" }}>تمليك</label>   </td>
                                        <td>
                                            
                                            <Item
                                                name={[1, "areaS"]}
                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[1, "areaQ"]}
                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[1, "areaF"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td >&nbsp;</td>
                                        <td >&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td ><label style={{ fontSize: "14px", fontWeight: "bolder" }}> إيجار منفرد</label>   </td>
                                        <td>
                                            
                                            <Item
                                                name={[2, "areaS"]}
                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[2, "areaQ"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[2, "areaF"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <label style={{ fontSize: "14px", fontWeight: "bolder" }}>من</label>

                                            <Item
                                                name={[2, "rentStartDate"]}

                                            >
                                                <DatePicker />
                                            </Item></td>
                                        <td>
                                            <label style={{ fontSize: "14px", fontWeight: "bolder" }}>إلى</label>
                                            <Item
                                                name={[2, "rentEndDate"]}
                                                dependencies={[["farmHeazas", 2, "rentStartDate"]]}
                                                rules= {[
                                                    ({ getFieldValue ,setFieldsValue}) => ({
                                                        validator(rule, value) {
                                                            
                                                            let alldata = getFieldValue("farmHeazas")
                                                            let start = alldata[2].rentStartDate
                                                            let end   = alldata[2].rentEndDate
                                                            
                                                            if (!start || !end ){
                                                                return Promise.resolve();
                                                            }
                                                            
                                                            let temp =end._d-start._d
                                                            
                                                            if (temp>0) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject('تاريخ بداية الايجار اكبر من تاريخ نهاية الايجار');
                                                        },
                                                      })]}

                                            >
                                                <DatePicker />
                                            </Item>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td ><label style={{ fontSize: "14px", fontWeight: "bolder" }}> إيجار مشاركة</label>   </td>
                                        <td>
                                          
                                            <Item
                                                name={[3, "areaS"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[3, "areaQ"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[3, "areaF"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td name="ESDate2" dir="rtl">
                                            <label style={{ fontSize: "14px", fontWeight: "bolder" }}>فترة التأجير من</label>

                                            <Item
                                                name={[3, "rentStartDate"]}

                                            >
                                                <DatePicker />
                                            </Item>
                                        </td>

                                        <td name="EEDate2" dir="rtl" >
                                            <label style={{ fontSize: "14px", fontWeight: "bolder" }}>إلى</label>

                                            <Item
                                                name={[3, "rentEndDate"]}
                                                dependencies={[["farmHeazas", 3, "rentStartDate"]]}
                                                rules= {[
                                                    ({ getFieldValue ,setFieldsValue}) => ({
                                                        validator(rule, value) {
                                                            
                                                            let alldata = getFieldValue("farmHeazas")
                                                            let start = alldata[3].rentStartDate
                                                            let end   = alldata[3].rentEndDate
                                                            
                                                            if (start && end ){
                                                                let temp =end._d-start._d
                                                                if (temp>0) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject('تاريخ بداية الايجار اكبر من تاريخ نهاية الايجار');
                                                            }
                                                            
                                                            return Promise.resolve();
                                                        },
                                                      })]}
                                            >
                                                <DatePicker />
                                            </Item>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td ><label style={{ fontSize: "14px", fontWeight: "bolder" }}> مخالف</label>   </td>
                                        <td>

                                            <Item
                                                name={[4, "areaS"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[4, "areaQ"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[4, "areaF"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td >&nbsp;</td>
                                        <td >&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td ><label style={{ fontSize: "14px", fontWeight: "bolder" }}> أخرى</label></td>
                                        <td>
        
                                            <Item
                                                name={[5, "areaS"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[5, "areaQ"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                        <td>
                                            <Item
                                                name={[5, "areaF"]}

                                                normalize={parseFloat}
                                                width="50"
                                                //dependencies={[["farmVisit", "areaF"]]}
                                                rules= {[areaRul]}
                                            >
                                                <input type="number" />
                                            </Item></td>
                                            <td></td>
                                            <td></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        )
                    }}
                </Form.List>

            </div>
        )
    }
}
