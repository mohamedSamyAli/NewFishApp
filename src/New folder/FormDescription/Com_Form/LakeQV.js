import React, { Component } from 'react'
import { Form, Input,Collapse } from 'antd'
import DateQuerterComponent from '../../components/FormComponent/DateQuerterComponent'
import SelectorFetchComponent from '../../components/FormComponent/SelectorFetchComponent'
import { getManytextFields_FormItem } from '../helpers'
const { Panel } = Collapse;
export default class LakeQV extends Component {
    render() {
        return (
            <div className="collapsable__Sections">

<Collapse className="checkbox__collapsable-groups" defaultActiveKey={['0']}>

<Panel  header="معلومات عامه" key="0" >
                <Form.Item
                    name="date"
                    lable="التاريخ"
                    
                    >
                    <DateQuerterComponent />
                </Form.Item>
                <Form.Item
                    name='userGovId'
                    label="المحافظه"
                    rules={[{ required: true, message: `ادخل المحافظه` }]}
                    >
                    <SelectorFetchComponent parentE="GovEvents" entity='gov' />
                </Form.Item>
                <Form.Item
                    name='markz'
                    label="المركز"
                    rules={[{ required: true, message: `ادخل المركز` }]}
                >
                    <SelectorFetchComponent ChildE="markaz" parentE="GovEvents" entity='markaz' />
                </Form.Item>
                <Form.Item
                    name='fisherDesk'
                    label="مكتب الصيد"
                    rules={[{ required: true, message: `ادخل مكتب الصيد` }]}
                    >
                    <SelectorFetchComponent ChildE="fisherDesk" parentE="GovEvents" entity='fisherDesk' />
                </Form.Item>
                <Form.Item
                    name='gafard'
                    label="المنطقه"
                    rules={[{ required: true, message: `ادخل المنطقه` }]}
                    >
                    <SelectorFetchComponent ChildE="fisherDesk" parentE="GovEvents" entity='fisherDesk' />
                </Form.Item>
                </Panel>  
                <Panel accordion={true} header="المساحات" key="المساحات" >
                <Form.Item
                    name="tarea"
                    label="المساحة الكلية للبحيرة (بالفدان)"
                    dependencies={['uarea']}
                    rules={[
                        ({ getFieldValue, setFieldsValue }) => ({
                            validator(rule, value) {
                                let temp = parseInt(getFieldValue('uarea'))
                                value = parseInt(value) ? parseInt(value) : 0
                                setFieldsValue({ unarea: -temp + value })
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
                    name="uarea"
                    label="المساحة المستغلة فى الصيد داخل البحيرة (بالفدان)"
                    dependencies={['tarea']}
                    rules={[
                        ({ getFieldValue, setFieldsValue }) => ({
                            validator(rule, value) {
                                

                                let temp = parseInt(getFieldValue('tarea'))
                                value = parseInt(value) ? parseInt(value) : 0
                                setFieldsValue({ unarea: temp - value })
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
                    name="unarea"
                    label="المساحة الغير مستغلة فى الصيد (المساحات المغطاة بالنباتات المائية) (بالفدان)"
                    >
                    <Input disabled type="number" />
                </Form.Item>
                </Panel>
                <Panel  header="وحدات الصيد" key="وحدات الصيد" >
                <Form.Item
                    name='boatD'
                    label="درجة المركب"
                    >
                    <SelectorFetchComponent entity='boatdegree' />
                </Form.Item>
                <Form.Item
                    name='boatM'
                    label="نوع المركب"
                    >
                    <SelectorFetchComponent entity='boatmaterial' />
                </Form.Item>
                {getManytextFields_FormItem(
                    ["boatN", 'ownerN', 'usedNet', 'usedboat', 'others', "productionKG", "fisher"],
                    ["رقم المركب", "اسم المالك", "قيمة استهلاك الشباك", "قيمة استهلاك قارب الصيد", "مصاريف أخرى", "الإنتاج لوحدة الصيد(كجم)", "عدد الصيادين"]
                    ,[true, true, false, false, false, true, false],
                    [null, null])}
                <Form.Item
                    name='ass'
                    label= "اسم الجمعيه"
                    >
                <SelectorFetchComponent ChildE="associationgov" parentE="GovEvents" entity='associationgov'/>
                </Form.Item>
                {getManytextFields_FormItem(["hn", 'sn','st']
                , ["عدد أيام الصيد / الشهر","عدد السرحات / اليوم","زمن السرحة / الدقائق"]
                , [false,true,false],
                [null, null])}

</Panel>

                </Collapse>
            </div >
        )
    }
}
