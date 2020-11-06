import React from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Select, Divider } from 'antd'
import SelectorFetchComponent from '../../components/FormComponent/SelectorFetchComponent'
import PCSK from './PCSK';
const { Panel } = Collapse;
const { Option } = Select;
const { Item } = Form


export default function SW() {
    return (
        <div className="collapsable__Sections">

            <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['232225']}>
                <Panel accordion={true} header="معلومات عامه" key='232'>
                    <Item
                        name={["gov", "govId"]}
                        label="المحافظه"
                        rules={[{ required: true, message: `ادخل المحافظه` }]}
                    >
                        <SelectorFetchComponent parentE="GovEvents" entity='gov' />
                    </Item>
                    <Item
                        name='fisherDesk'
                        label="مكتب الصيد"
                        rules={[{ required: true, message: `ادخل المنطقه` }]}
                    >
                        <SelectorFetchComponent ChildE="fisherDesk" parentE="GovEvents" entity='fisherDesk' />
                    </Item>
                    <Item
                        name='port'
                        label="اسم الميناء/نقطة السروح"
                        rules={[{ required: true, message: `ادخل المنطقه` }]}
                    >
                        <SelectorFetchComponent entity='port' />
                    </Item>
                    <Item
                        name="date"
                        label="التاريخ"
                        rules={[{ required: true, message: `ادخل التاريخ` }]}
                    >
                        <DatePicker />
                    </Item>
                    <Item
                        name='ND'
                        label="الاجهزه الملاحيه"
                    >
                        <Input />
                    </Item>
                </Panel>
                <Panel accordion={true} header="بيانات المركب" key='2'>
                    <Item
                        name='BoatName'
                        label="اسم المركب"
                    >
                        <Input />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="رقم المركب(الكود)"
                    >
                        <Input />
                    </Item>


                    <Item
                        name='BoatNumber'
                        label="الطول(متر)"
                    >
                        <Input type='number' />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="قوة الحصان (حصان)"
                    >
                        <Input type='number' />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="مادة الصنع"
                    >
                        <SelectorFetchComponent entity='boatmateriallt' />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="الحموله الكليه(طن)"
                    >
                        <Input type='number' />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="الحموله الصافيه(طن)"
                    >
                        <Input type='number' />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="رقم الموتور"
                    >
                        <Input type='number' />
                    </Item>
                    <Item
                        name='fisherWay'
                        label="رقم المركب(الكود)"
                    >
                        <Input type="number" />
                    </Item>
                </Panel>
                <Panel accordion={true} header="عمليات الصيد" key="3">
                    <Item
                        name='BoatNumber'
                        label="ايام العمل(يوم)"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="المسافه من الشاطئ(متر)"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="العمق(متر)"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="مادة الصنع"
                    >
                        <SelectorFetchComponent entity='boattypelt' />
                    </Item>
                    <Item
                        name='UnitNumb'
                        label="عدد الوحدات"
                        initialValue='1'
                    >
                        <Input disabled />
                    </Item>
                    <Divider type="horizontal" orientation="center" />
                    <h5>قيمة الصيد بالجنيه</h5>
                    <Item
                        name='BoatNumber'
                        label="قيمة قارب الصيد"
                    >
                        <Input type="number" />
                    </Item><Item
                        name='BoatNumber'
                        label="قيمة معدات الصيد"
                    >
                        <Input type="number" />
                    </Item>
                    <Divider type="horizontal" orientation="center" />
                    <h5>قيمة التشغيل بالجنيه</h5>
                    <Item
                        name='BoatNumber'
                        label="قيمة اهلاك الشباك"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="قيمة اهلاك قارب الصيد"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="مصاريف اخرى (الطعم,الغذاء,وقود,...إلخ)"
                    >
                        <Input type="number" />
                    </Item>
                    <Divider type="horizontal" orientation="center" />
                    <Item
                        name='BoatNumber'
                        label="كمية الإنتاج لوحدة الصيد بالكجم"
                    >
                        <Input type="number" />
                    </Item>
                </Panel>
                <Panel accordion={true} header="كمية الانتاج حسب حرف الصيد بالكجم" key="4">
                    <Item
                        name='BoatNumber'
                        label="الحرف"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="عدد الوحدات"
                        initialValue="1"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='BoatNumber'
                        label="كمية الانتاج بالكجم"
                    >
                        <Input type="number" />
                    </Item>
                </Panel>
                <Panel accordion={true} header="كمية الإنتاج حسب حرف الصيد بالكجم" key="5">
                    <PCSK />
                </Panel>


                <Panel accordion={true} header="عدد الصيادين" key="6">
                    <table class="customtable" width="fit-content" border="1" align="right">
                        <tr>
                            <th scope="col" bgcolor="#c6c4c4"><label style={{ fontSize: "14px", fontWeight: "bold" }}>الحيازة</label></th>
                            <th scope="col" bgcolor="#c6c4c4"><label style={{ fontSize: "14px", fontWeight: "bold" }}>عدد الصيادين</label></th>
                            <th scope="col" bgcolor="#c6c4c4"><label style={{ fontSize: "14px", fontWeight: "bold" }}>متوسط دخل الصياد سنويا بالجنيه</label></th>
                        </tr>
                        <tr>
                            <td align="right"><label style={{ fontSize: "14px", fontWeight: "bold" }}>مالك</label></td>
                            <td align="right">
                                <Input type="text" id="PB_OWNER" name="PB_OWNER" dir="rtl" tabindex="60" /></td>
                            <td align="right">
                                <Input type="text" id="PB_OWNER_INCOME" name="PB_OWNER_INCOME" dir="rtl" tabindex="61" /></td>
                        </tr>
                        <tr>
                            <td align="right"><label style={{ fontSize: "14px", fontWeight: "bold" }}>عامل</label></td>
                            <td align="right">
                                <Input type="text" id="PB_WORKER" name="PB_WORKER" dir="rtl" tabindex="62" /></td>
                            <td align="right">
                                <Input type="text" id="PB_WORKER_INCOME" name="PB_WORKER_INCOME" dir="rtl" tabindex="63" /></td>
                        </tr>
                    </table>
                </Panel>

            </Collapse>

        </div>
    )
}
