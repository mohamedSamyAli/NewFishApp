import React from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Select, InputNumber } from 'antd'
import DateQuerterComponent from '../../components/FormComponent/DateQuerterComponent'
import SelectorFetchComponent from '../../components/FormComponent/SelectorFetchComponent'
import { getManytextFields_FormItem } from '../helpers'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const { Option } = Select;

const { Item } = Form

const CustomSelector = (props)=>{
    return (
        <Select
                showSearch
                style={{ width: 200 }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                {...props}
            >
             <Option key='1' value='1'>يوجد</Option>
             <Option key='0' value='0'>لايوجد</Option>
            </Select>
    )
}


const Port=(props) => {
    return (
        <div  className="collapsable__Sections">

            <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['232']}>

                <Panel accordion={true} header="معلومات عامه" key='232'>
                    <Item
                        name="porttype"
                        label="نوع الاستمارة"
                        rules={[{ required: true, message: `ادخل نوع الاستماره` }]}

                    >
                        <SelectorFetchComponent entity="porttypelt" />
                    </Item>

                    <Item
                        name="date"
                        label="التاريخ"
                        rules={[{ required: true, message: `ادخل التاريخ` }]}

                    >
                        <DatePicker />
                    </Item>
                    <Item
                        name='code'
                        label="الكود"
                        rules={[{ required: true, message: `ادخل الكود` }]}

                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='gha'
                        label="الجهه التابعه لها"
                    >
                        <Input />
                    </Item>
                    <Item
                        name='name'
                        label="الاسم"
                        rules={[{ required: true, message: `ادخل الاسم` }]}
                    >
                        <Input />
                    </Item>
                    <Item
                        name={["gov", "govId"]}
                        label="المحافظه"
                        rules={[{ required: true, message: `ادخل المحافظه` }]}
                    >
                        <SelectorFetchComponent parentE="GovEvents" entity='gov' />
                    </Item>
                    <Item
                        name='gafard'
                        label="المنطقه"
                        rules={[{ required: true, message: `ادخل المنطقه` }]}
                    >
                        <SelectorFetchComponent ChildE="gafard" parentE="GovEvents" entity='gafard' disabled />
                    </Item>
                    <Item
                        name='position'
                        label="الموقع"
                    >
                        <Input />
                    </Item>
                </Panel>
                <Panel accordion={true} header=" المساحات وموعد التشغيل " key='المساحات' >

                    <Item
                        name='totalArea1'
                        label=" المساحه الكليه بالمتر المربع"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='totalArea'
                        label=" المساحه الكليه للمسطح المائي بالمتر المربع"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='date'
                        label="موعد التشغيل الفعلى بالسنه"
                    >
                        <DatePicker picker="year" />
                    </Item>
                </Panel>
                <Panel accordion={true} header="الارصفه والاعماق" key="الارصفه">

                    <Item
                        name='platformNumber'
                        label="عدد الارصفه"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='platformlengthNumber1'
                        label="مجموع طول الارصفه بالمتر"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='platformlengthNumber2'
                        label="الاعماق حد ادنى بالمتر"
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='platformlengthNumber3'
                        label="الاعماق حد اقصي بالمتر"
                    >
                        <Input type="number" />
                    </Item>
                </Panel>
                <Panel accordion={true} header="الاحداثيات" key="coordinate">
                    <Item
                        name='lat'
                        label="Latitude"
                        rules={[{ required: true, message: `ادخل الاحداثى` }]}

                    >
                        <Input type="number" />
                    </Item>
                    <Item
                        name='Long'
                        label="longitude"
                        rules={[{ required: true, message: `ادخل الاحداثي` }]}

                    >
                        <Input type="number" />
                    </Item>
                </Panel>
                <Panel accordion={true} header="البنيه الأساسيه المتوفرة" >
                <Item
                name="WT5"
                label="شبكة المياه"
                >
                <CustomSelector/>
                </Item>
                <Item
                name="WT6"
                label="شبكة الكهرباء"
                >
                <CustomSelector/>
                </Item>
                <Item
                name="WT7"
                label="شبكة صرف صحى"
                >
                <CustomSelector/>
                </Item>
                <Item
                name="WT8"
                label="غاز طبيعي"
                >
                <CustomSelector/>
                </Item>
                <Item
                name="WT9"
                label="عدد محطات الوقود"
                >
                    <Input type="number" />
                </Item>
                <Item
                name="WT11"
                label="عدد مصانع الثلج"
                >
                    <Input type="number" />
                </Item>
                <Item
                name="WT12"
                label="عدد المخازن الكلى "
                >
                    <Input type="number" />
                </Item>
                <Item
                name="WT13"
                label="عدد المخازن المستغل "
                >
                    <Input type="number" />
                </Item>
                <Item
                name="WT14"
                label="عدد القزق"
                >
                    <Input type="number" />
                </Item>
                <Item
                name="WT15"
                label="المساحات الموجودة بالميناء و التي لم تستغل و يمكن إستغلالها بالمتر المربع"
                >
                    <Input type="number" />
                </Item>
                <Item
                name="vip"
                label="الجهات الأمنية المتواجدة بالميناء"
                >
                    <Input.TextArea/>
                </Item>
                <Item
                name="sos"
                label="المساعدات الملاحية الموجودة بالميناء"
                >
                    <Input.TextArea/>
                </Item>
                <Item
                name="capicity"
                label="قدرة الميناء من حيث الإستيعاب للمراكب"
                >
                    <Input type="number" />
                </Item>
                </Panel>
                <Panel accordion={true} header="خطط الوقايه من" key="safetyPaln">
                <Item
                name="WT4"
                label="التلوث بالزيت"
                >
                <SelectorFetchComponent entity="portchoicelt" />
                </Item>
                <Item
                name="WT3"
                label="امكانية التخلص من المخلفات الصلبه"
                >
                <SelectorFetchComponent entity="portchoicelt" />
                </Item>
                <Item
                name="WT2"
                label="امكانية التخلص من الزيوت المرتجعه من المراكب"
                >
                <SelectorFetchComponent entity="portchoicelt" />
                </Item>
                <Item
                name="WT1"
                label="الحريق"
                >
                <SelectorFetchComponent entity="portchoicelt" />
                </Item>   
                </Panel>
           
            </Collapse>
        </div>
    )
}
export default Port