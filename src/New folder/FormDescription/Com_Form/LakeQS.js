import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button } from 'antd'
import DateQuerterComponent from '../../components/FormComponent/DateQuerterComponent'
import SelectorFetchComponent from '../../components/FormComponent/SelectorFetchComponent'
import { getManytextFields_FormItem } from '../helpers'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import HMTable from './HMTable'
import SpProdutionComponent from '../../components/FormComponent/SpProdutionComponent'
import FSDT from './FSDT'
const { Panel } = Collapse;
const { Item } = Form
export default class LakeQS extends Component {
    render() {
        return (
            <div className="collapsable__Sections">

                <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['232225']}>

                    <Panel accordion={true} header="معلومات عامه" key='232'>

                        <Item
                            name="date"
                            label="التاريخ"
                        >
                            <DateQuerterComponent />
                        </Item>
                        <Item
                            name='userGovId'
                            label="المحافظه"
                            rules={[{ required: true, message: `ادخل المحافظه` }]}
                        >
                            <SelectorFetchComponent parentE="GovEvents" entity='gov' />
                        </Item>
                        <Item
                            label='اسم البحيره/نهر النيل/مفيض توشكي/قناة السويس'
                            name="lakegov"
                            rules={[{ required: true, message: `مطلوب` }]}
                        >
                            <SelectorFetchComponent ChildE="lakegov" parentE="GovEvents" entity='lakegov' />
                        </Item>
                        <Item
                            name="mok3"
                            label="الموقع"
                        >
                            <Input></Input>
                        </Item>
                        <Item
                            name='markz'
                            label="المركز"
                            rules={[{ required: true, message: `ادخل المركز` }]}
                        >
                            <SelectorFetchComponent ChildE="markaz" parentE="GovEvents" entity='markaz' />
                        </Item>
                        <Item
                            name='gafard'
                            label="المنطقه"
                            rules={[{ required: true, message: `ادخل المنطقه` }]}
                        >
                            <SelectorFetchComponent ChildE="fisherDesk" parentE="GovEvents" entity='fisherDesk' />
                        </Item>
                        <Item
                            name="ٍSampleN"
                            label="رقم العينه كود المحطه"
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        
                        <Item
                            name="mok3"
                            label="العلامات الارضيه ان وجدت"
                        >
                            <Input />
                        </Item>
                    </Panel>
                    <Panel accordion={true} header="الاحداثيات" key="الاحداثيات" >
                        {getManytextFields_FormItem(
                            ["elev", "long", "lat"],
                            ['ارتفاع منسوب الارض(متر) Elevation', 'Longitude', 'Latitude'],
                            [],
                            [])}
                        <Item
                            name="pic"
                            label="الصوره ان وجدت"
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>
                                    <UploadOutlined /> Click to upload
                                </Button>
                            </Upload>
                        </Item>
                    </Panel>
                    <Panel accordion={true} header="المناخ" key="المناخ" >

                        {getManytextFields_FormItem(
                            ["boatN", 'ownerN', 'usedNet', 'usedboat', 'others'],
                            [
                                "درجة الحراره C"
                                , "الرطوبه%"
                                , "سرعة الرياح(عقده)"
                                , "الامطار(m m)"
                                , "البخر(m m)"
                            ]
                            , [false, false, false, false, false],
                            [])}
                        <Item
                            name='WD'
                            label="اتجاح الرياح"
                        >
                            <SelectorFetchComponent entity='winddirectionlt' />
                        </Item>
                    </Panel>
                    <Panel accordion={true} header="عينات التربه" key="عينات التربه" >
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
                        <Item
                            label="درجة الملوحه لكل جرام /لتر"
                            name="sD"
                        >
                            <Input />
                        </Item>
                        <Item
                            label="درجة الحموضه PH"
                            name="PH"
                        >
                            <Input />
                        </Item>
                    </Panel>
                    <Panel accordion={true} header=" التحليل الكميائي" key="التحليل الكميائي" >
                        <Item
                            label="نسبة المواد العضويه"
                            name="sdfdd"
                        >
                            <Input />
                        </Item>
                        <Item
                            label="تركيز الكربونات ملجم/لتر"
                            name="fgkr"
                        >
                            <Input />
                        </Item>
                        <Item
                            label="تركيز الفوسفات ملجم/لتر"
                            name="fgkr"
                        >
                            <Input />
                        </Item>
                        <Item
                            label="تركيز الكبريتات ملجم/لتر"
                            name="fgkr"
                        >
                            <Input />
                        </Item>
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
                    <Panel accordion={true} header="الجدول الغبالجوانب البيئية-الفيزيائة كيميائية " key="الجوانب البيئية-الفيزيائة كيميائية " >
                        <Item
                            label="C درجة الحرارة"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأس الهيدروجينى للعينه"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأملاح الذائبة لكل جرام/لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="القلوية لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأكسجين الذائب لكل مللى جرام /لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأكسجين المستهلك حيويا لكل مللى جرام أكسجين/لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأكسجين المستهلك كيميائيا لكل مللى جرام أكسجين/لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="تركيزات ايون الكلوريد لكل جرام / لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="عسر المياه لكل مللى جرام /لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأمونيوم-نيتروجين لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="النيتريت- نيتروجين لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="النترات- نيتروجين لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأورثوفوسفات-فوسفات لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="السيليكات-سيليكا لكل مللى جرام/لتر"
                            name={["chemicalChar", "cc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>

                    </Panel>
                    <Panel accordion={true} header="البكتريا" key="البكتريا" >

                        <Item
                            label="العدد الكلى للبكتيريا لكل سنتيمتر مكعب من المياه"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="العدد الإحتمالى لبكتيريا القولون الكلية لكل 100 سنتيمتر مكعب"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="العدد الإحتمالى لبكتيريا القولون البرازية لكل 100 سنتيمتر مكعب"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="العدد الكلى للهوائم الحيوانية لكل سنتيمتر مكعب	"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                    </Panel>
                    <Panel accordion={true} header="تقدير الخصوبة الطبيعية للمياه" key="تقدير الخصوبة الطبيعية للمياه" >

                        <Item
                            label="قياس الخصوبة الأولية مللى جرام/لتر"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="تقدير كلوروفيل A مللى جرام/لتر"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                      
                    </Panel>
                    <Panel accordion={true} header="اللافقاريات" key="اللافقاريات" >
                        <Item
                            label="العدد الكلى للافقاريات الملتصقة بالنباتات المائية لكل 100 جرام"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="العدد الكلى للافقاريات القاعية لكل متر مربع"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                      
                    </Panel>
                    <Panel accordion={true} header="الجدول الغبي" key="الجدول الغبي">
                        <SpProdutionComponent />
                    </Panel>
                    <Panel accordion={true} header="الجدول بتاع السمك" key="الجدول بتاع السمك">
                        <FSDT />
                    </Panel>
                    <Panel accordion={true} header="الهائمات النباتية" key="الهائمات" >
                        <Item
                            label="عدد وحدات الهائمات النباتية"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <lable>عدد وحدات عائلات الهائمات النباتية </lable>
                        <Item
                            label="الدياتومات"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الطحالب الخضراء"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الطحالب الخضراء المزرقة"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="اخرى"
                            name={["bioChar", "bc"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                      
                    </Panel> 
                </Collapse>
            </div>
        )
    }
}
