import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Divider } from 'antd'
import SelectorFetchComponent from '../../../../components/FormComponent/SelectorFetchComponent'
import { getManytextFields_FormItem } from '../../../../FormDescription/helpers'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import HMTable from './VisitFormComponents/HMTable'
import SpProdutionComponent from '../../../../components/FormComponent/SpProdutionComponent'
import FSDT from './FSDT'
import VisitCoor from './VisitFormComponents/VisitCoor';
import Areas from './VisitFormComponents/Areas';
import GenralInfo from './VisitFormComponents/GenralInfo';
import Bowl from './VisitFormComponents/Bowl';
import Weather from './VisitFormComponents/Weather';
import SoilCh from './VisitFormComponents/SoilCh';
import Water from './VisitFormComponents/Water';
import WaterCh from './VisitFormComponents/WaterCh';
import Bactria from './VisitFormComponents/Bactria';

import Workers from './VisitFormComponents/Workers';
import FloatingPlants from './VisitFormComponents/FloatingPlants';
import Invertebrates from './VisitFormComponents/Invertebrates';
import Zareaa from './VisitFormComponents/Zareaa';
import Food from './VisitFormComponents/Food';
import OrganicFilter from './VisitFormComponents/OrganicFilter';
import NonOrganicFilter from './VisitFormComponents/NonOrganicFilter';
import Durations from './VisitFormComponents/Durations';
import FixedCost from './VisitFormComponents/FixedCost';
import OperatingCost from './VisitFormComponents/OperatingCost';
import Fertility from './VisitFormComponents/Fertility';
const { Panel } = Collapse;
const { Item } = Form
export default class FarmF extends Component {

    render() {
        return (
            <div className="collapsable__Sections">
                <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['1', 'مساحات']}>

                    <Panel accordion={true} header="معلومات عامه" key='1'>
                        <GenralInfo />
                    </Panel>
                    <Panel accordion={true} header="مساحات" key='مساحات'>
                        <Areas />
                    </Panel>
                    <Panel accordion={true} header="الاحداثيات" key="الاحداثيات" >
                        <VisitCoor />
                    </Panel>
                    <Panel accordion={true} header="الاحواض" key="الاحواض" >
                        <Bowl />
                    </Panel>
                    <Panel accordion={true} header="العاملين" key='العاملين'>
                        <Workers />
                    </Panel>
                    <Panel accordion={true} header="المناخ" key="المناخ" >
                        <Weather />
                    </Panel>
                    <Panel accordion={true} header="المياه" key="المياه" >
                        <Water />
                    </Panel>
                    <Panel accordion={true} header=" الخواص الكميائيه للتربه" key="الخواص الك للتربه" >
                        <SoilCh />
                    </Panel>
                    <Panel accordion={true} header="الخواص الكميائيه للمياه" key="الخواص الكميائيه للمياه" >
                        <WaterCh />
                    </Panel>
                    <Panel accordion={true} header="الهائمات النباتية" key="الهائمات" >
                        <FloatingPlants />
                    </Panel>
                    <Panel accordion={true} header="البكتريا" key="البكتريا" >
                        <Bactria />
                    </Panel>
                    <Panel accordion={true} header="اللافقاريات" key="اللافقاريات" >
                        <Invertebrates />
                    </Panel>
                    <Panel accordion={true} header="تقدير الخصوبة الطبيعية للمياه" key="تقدير الخصوبة الطبيعية للمياه" >
                        <Fertility/>
                    </Panel>
                    <Panel accordion={true} header="الذريعه" key="الذريعه" >
                        <Zareaa />
                    </Panel>
                    <Panel accordion={true} header="العينات البيولوجية" key="العينات البيولوجية">
                        <FSDT />
                    </Panel>
                    <Panel accordion={true} header="الأعلاف" key="الأعلاف">
                        <Food />
                    </Panel>
                    <Panel accordion={true} header="الاسمده العضويه" key="الاسمده العضويه">
                        <OrganicFilter />
                    </Panel>
                    <Panel accordion={true} header="الاسمده غير العضويه" key="الاسمده غير العضويه">
                        <NonOrganicFilter />
                    </Panel>
                    <Panel accordion={true} header="طول فترة الاستزارع" key="الاسمده غير العضويطول فترة الاستزارع">
                        <Durations />
                    </Panel>
                    <Panel accordion={true} header="التكاليف الاستثمارية الثابتة" key="التكاليف الاستثمارية الثابتة">
                        <FixedCost />
                    </Panel>
                    <Panel accordion={true} header="تكاليف التشغيل بالجنيه" key="تكاليف التشغيل بالجنيه">
                        <OperatingCost />
                    </Panel>

                </Collapse>
            </div>
        )
    }
}
//#region ignored
/* <Panel accordion={true} header="عينات التربه" key="عينات التربه" >
    <Item
    label="نسبة الرطوبه%"
    name="rotoba"
    >
        <Input />
    </Item>
    <Item
        name='WD'
        label="التحليل الميكانيكي للتربه"
    >
        <SelectorFetchComponent entity='soiltypelt' />
    </Item>
</Panel>
<Panel accordion={true} header=" الخواص الكميائيه للتربه" key="الخواص الك للتربه" >
    <SoilCh />
</Panel>
<Panel accordion={true} header="النباتات" key="النباتات" >
    <Item
        name='plants'
        label="النباتات"
    >
        <SelectorFetchComponent entity='plantlt' />
    </Item>
</Panel>
<Panel accordion={true} header=" الهيدرولوجيا" key="الهيدرولوجيا " >
    <Item
        label="منسوب المياه (متر)"
        name="sdfdd"
    >
        <Input />
    </Item>
    <HMTable style={{ margin: "20px" }} />
</Panel>
<Panel accordion={true} header="تقدير الخصوبة الطبيعية للمياه" key="تقدير الخصوبة الطبيعية للمياه" >

    <Item
        label="قياس الخصوبة الأولية مللى جرام/لتر"
        name={["bioChar", "bc"]}
    >
        <Input type="number" />
    </Item>
    <Item
        label="تقدير كلوروفيل A مللى جرام/لتر"
        name={["bioChar", "bc"]}
    >
        <Input type="number" />
    </Item>

</Panel>

<Panel accordion={true} header="الجدول الغبي" key="الجدول الغبي">
    <SpProdutionComponent />
</Panel> */
//#endregion
