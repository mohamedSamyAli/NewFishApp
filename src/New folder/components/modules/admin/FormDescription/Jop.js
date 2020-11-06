import React from 'react';
import * as premissions from '../components/FormComponent/premissions'
import PremissionsComponent from '../components/FormComponent/PremissionComponent'
import { Checkbox} from 'antd';
import {gettextField} from"./helpers"
const CheckboxGroup = Checkbox.Group;

const schema = [
    
    gettextField("uJobName"," اسم الوظيفه",true),
    
    [
        {
            config:{
                name:"p5"
            },
            
            render: (props) => (
                <CheckboxGroup name="p5" {...props}>
                    <Checkbox value={1}>
                        مسؤول النظام
                    </Checkbox>
                </CheckboxGroup>
         )
         
        }
        ,
        {
            config:{
                name:"p1"
            },
            
            render: (props) =><PremissionsComponent {...props} options={premissions.descripOptions} titlename="البيانات الوصفيه" titleKey={2} />

         
        },
        {
            config:{
                name:"p2"
            },
            
            render: (props) =><PremissionsComponent {...props}  options={premissions.spatialOptions} titlename=" البيانات المكانيه" titleKey={3} />


         
        },
        {
            config:{
                name:"p3"
            },
            
            render: (props) =><PremissionsComponent {...props} options={premissions.QueriesOptions} titlename="استفسارات سابقة التعريف" titleKey={13} />

         
        },
        {
            config:{
                name:"p4"
            },
            
            render: (props) =>( <CheckboxGroup {...props} name = "p4">
            <Checkbox value={4}  key="4" >
                التقارير
            </Checkbox>
                </CheckboxGroup>)
        }
    ]
        

]


export default schema