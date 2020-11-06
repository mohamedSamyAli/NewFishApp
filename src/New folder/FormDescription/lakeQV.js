import React from 'react';
import * as premissions from '../components/FormComponent/premissions'
import PremissionsComponent from '../components/FormComponent/PremissionComponent'
import { Checkbox, Input} from 'antd';
import {gettextField, getManytextFields} from"./helpers"
import DateQuerterComponent from '../components/FormComponent/DateQuerterComponent';
import GovSelectorComponent from '../components/FormComponent/SelectorFetchComponent';
const CheckboxGroup = Checkbox.Group;

const schema = [
    
    {
        config:{
            name:"date",
            lable:"التاريخ"
        },
        render: (props) => <DateQuerterComponent {...props}/>
    },
    {
        config: {
            name: 'userGovId',
            label: "المحافظه",
            rules: [{ required: true, message: `ادخل المحافظه` }]
        },
        render: (props) =><GovSelectorComponent parentE="GovEvents"  entity='gov' {...props} />
    },
    {
        config: {
            name: 'markz',
            label: "المركز",
            rules: [{ required: true, message: `ادخل المحافظه` }]
        },
        render: (props) => <GovSelectorComponent ChildE="markaz" parentE="GovEvents" entity='markaz' {...props}/>
    },
    ,
    {
        config: {
            name: 'fisherDesk',
            label: "المركز",
            rules: [{ required: true, message: `ادخل المحافظه` }]
        },
        render: (props) => <GovSelectorComponent ChildE="fisherDesk" parentE="GovEvents" entity='fisherDesk' {...props} />
    },
    {
        config: {
            name: 'gafard',
            label: "المنطقه",
            rules: [{ required: true, message: `ادخل المنطقه` }]
        },
        render: (props) => <GovSelectorComponent  ChildE="gafard" parentE="GovEvents" entity='gafard' {...props} />
    },
    {
        config:{
            name:"tarea",
            label:"المساحة الكلية للبحيرة (بالفدان)",
            dependencies:['uarea'],
            rules: [
                ({ getFieldValue ,setFieldsValue}) => ({
                    validator(rule, value) {
                        

                        let temp =parseInt(getFieldValue('uarea'))
                        value = parseInt(value)?parseInt(value):0
                        setFieldsValue({unarea:-temp+value})
                        if (true) {
                            return Promise.resolve();
                        }
                      return Promise.reject('المساحه المستخدمه اكبر من المساحه الكليه');
                    },
                  })]
        },
        render:(props)=><Input type="number" {...props}/>

    },
    {
        config:{
            name:"uarea",
            label:"المساحة المستغلة فى الصيد داخل البحيرة (بالفدان)",
            dependencies:['tarea'],
            rules: [
                ({ getFieldValue ,setFieldsValue}) => ({
                    validator(rule, value) {
                        

                        let temp =parseInt(getFieldValue('tarea'))
                        value = parseInt(value)?parseInt(value):0
                        setFieldsValue({unarea:temp-value})
                        if (temp >= value) {
                            return Promise.resolve();
                        }
                      return Promise.reject('المساحه المستخدمه اكبر من المساحه الكليه');
                    },
                  })]
        },
        render:(props)=><Input type="number" {...props}/>
    },
    {
        config:{
            name:"unarea",
            label:"المساحة الغير مستغلة فى الصيد (المساحات المغطاة بالنباتات المائية) (بالفدان)",
        },
        render:(props)=><Input disabled type="number" {...props}/>

    },
    {
        config: {
            name: 'boatD',
            label: "درجة المركب",
        },
        render: (props) => <GovSelectorComponent   entity='boatdegree' {...props} />
    },
    {
        config: {
            name: 'boatM',
            label: "نوع المركب",
        },
        render: (props) => <GovSelectorComponent   entity='boatmaterial' {...props} />
    }
,    ...getManytextFields(["boatN", 'ownerN','usedNet','usedboat','others',"productionKG","fisher"], ["رقم المركب","اسم المالك","قيمة استهلاك الشباك","قيمة استهلاك قارب الصيد","مصاريف أخرى","الإنتاج لوحدة الصيد(كجم)","عدد الصيادين"], [true, true,false,false,false,true,false], [null, null]),
,
    {
        config: {
            name: 'ass',
            label: "اسم الجمعيه",
        },
        render: (props) => <GovSelectorComponent ChildE="associationgov" parentE="GovEvents"   entity='associationgov' {...props} />
    }
    ,    ...getManytextFields(["hn", 'sn','st'], ["عدد أيام الصيد / الشهر","عدد السرحات / اليوم","زمن السرحة / الدقائق"], [false,true,false], [null, null]),
    
    {
        config: {
            name: 'fisherway',
            label: "الحرف",
        },
        render: (props) => <GovSelectorComponent  entity='fisherway' {...props} />
    },
    {
        config:{
            name:"unarea",
            label:"عدد وحدات الصيد",
        },
        render:(props)=><Input disabled {...props} value="1" type="number" />

    },
    gettextField("produKG","كمية الانتاج (كج)",true)
]
export const formTriger = [
    (form)=>{
console.log(form)
    }
]

export default schema