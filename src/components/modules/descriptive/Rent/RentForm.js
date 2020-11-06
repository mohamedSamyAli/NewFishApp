import React, { Component, useState } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Select, Checkbox } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import RenterType from './RenterType'
import RenterLand from './RenterLand'
import PaidMony from './PaidMony';
import DeservedMony from './DeservedMony';
import Decision from './Decision';
import InsuranceData from './InsuranceData';
import SelectorFetchComponent from '../../../FormComponent/SelectorFetchComponent';

const { Panel } = Collapse;
const { Option } = Select;
const { Item } = Form



const Rent = () => {
    const [type, settype] = useState(1)
    const [ltype, setLtype] = useState(1)
    // TFC.Triger = ({ getFieldValue, setFieldsValue, getFieldsValue }) => {

    //     let values = getFieldsValue("*")

    //     //#region totalPaid
    //     let sum = values.paidMonies.reduce(function (a, b) {
    //         return parseInt(a) + parseInt(b.value);
    //     }, 0);
    //     setFieldsValue({ totalPaid: sum ? sum : 0 })
    //     //#endregion

    //     //#region totalPrice

    //     if (values.hasOwnProperty("sahm")) {
    //         let totalArea = parseInt(values.fdan)
    //         if(values.sahm || values.kerat){
    //              totalArea += 1 
    //         }else{

    //         }
    //         setFieldsValue({ totalPrice: parseFloat(values.unitePrice) * Math.floor(totalArea) })

    //     } else {
    //         setFieldsValue({ totalPrice: parseFloat(values.unitePrice) * parseInt(values.totalArea) })

    //     }


    //     //#endregion


    // }
    const onRenterChange = (e) => {
        if (e)
   
        settype(e)
        console.log(e)
    }
    const onRenterLChange = (e) => {
        if (e)
            setLtype(e)
        console.log(e)
    }
    return (

                    <Collapse  activeKey={[1,2,3,4,5,6,7]} >
                        <Panel forceRender={true}  header="بيانات المستاجر" key={1}>
                            <Item
                                name={["rentContract", "renterTypeId"]}
                                label="نوع المستأجر"
                                getValueProps={onRenterChange}
                                initialValue={1}
                                rules={[{ required: true }]}
                            >
                                <SelectorFetchComponent entity="RenterType" />
                            </Item>
                            <RenterType type={type} />
                        </Panel>
                        <Panel forceRender={true}  header="بيانات القطعه المؤجره" key={2}>
                            <Item
                                name={["rentContract", "partTypeId"]}
                                label="نوع القطعه"
                                getValueProps={onRenterLChange}
                                initialValue={1}
                                rules={[{ required: true }]}
                            >
                                <SelectorFetchComponent entity="PartType" />
                            </Item>
                            <RenterLand type={ltype} />
                        </Panel>
                        <Panel forceRender={true}  header="بيانات عامه عن العقد" key={3}>
                            <Item
                                name={["rentContract", "initialValue"]}
                                label={"القيمه الابتدائيه لتأجير" + `${type > 5 ? "المتر" : "الفدان"}`}
                                normalize={(v) => parseFloat(v)}
                            >
                                <Input type="number" />
                            </Item>
                            <Item
                            
                                name={["rentContract", "totalValue"]}
                                label="السعر الكلى"
                                normalize={(v) => parseFloat(v)}
                            >
                                <Input type="number" />
                            </Item>
                            <Item
                                name={["rentContract", "annualIncrease"]}
                                label="الزياده السنويه"
                                rules={[]}
                                normalize={(v) => parseFloat(v)}
                            >
                                <Input type="number"  min={0} max={100}  prefix={<p>%</p>}/>
                            </Item>
                            <Item
                                name={["rentContract", "valueIncreaseTypeId"]}
                                label="نوع الزياده الثانويه فى الايجار"
                                initialValue={1}
                            >
                                <SelectorFetchComponent entity="ValueIncreaseType"/>
                            </Item>
                            <Item
                                name={["rentContract", "startDate"]}
                                label="تاريخ بداية الايجار"
                                dependencies={[["rentContract", 'endDate']]}
                                rules={[{ required: true },
                                ({ getFieldValue, setFieldsValue }) => ({
                                    validator(rule, value) {
                                        
                                        let start = getFieldValue(["rentContract", "startDate"])
                                        let end = getFieldValue(["rentContract", "endDate"])
                                        if (!start || !end) {
                                            return Promise.resolve();
                                        }

                                        let temp = end._d - start._d

                                        if (temp > 0) {
                                            setFieldsValue({ farmVisit: { farmingDaysCount: Math.floor(Math.abs(temp / 1000 / 24 / 60 / 60)) } })
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('تاريخ البدايه اكبر من تاريخ الحصاد');
                                    },
                                })]}
                            >
                                <DatePicker />
                            </Item>
                            <Item
                                name={["rentContract", "endDate"]}
                                label="تاريخ نهاية الايجار"
                                rules={[{ required: true }]}
                            >
                                <DatePicker />
                            </Item>
                            <Item
                                name={["rentContract", "archivedContractNumber"]}
                                label="الرقم الارشيفي للعقد">
                                <Input />
                            </Item>
                            <Item
                                name={["rentContract", "refId"]}
                                label="نسخه مصوره من العقد">
                                <Upload >
                                    <Button>
                                        <UploadOutlined /> Click to upload
                                </Button>
                                </Upload>
                            </Item>                
                            </Panel>
                        <Panel forceRender={true}  header="التأمين" key={4}>
                            <InsuranceData />
                        </Panel>
                        <Panel forceRender={true}  header="المبلغ الذى تم تسديده" key={5}>
                            <PaidMony />
                        </Panel>
                        <Panel forceRender={true}  header="الأموال المستحقه وغرامة التأخير" key={6}>
                            <DeservedMony />
                        </Panel>
                        <Panel forceRender={true}  header="قرارات إداريه" key={7}>
                            <Decision />
                        </Panel>
                    </Collapse>
    )
}
export default Rent