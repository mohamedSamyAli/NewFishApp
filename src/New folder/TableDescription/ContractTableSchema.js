import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';
import GenaricTable from '../components/main/table/GenaricTable'
import formSchema from "../FormDescription/Com_Form/Rent"

let type = ["مزرعه" ,"خور","ترع","مصارف","مناطق التزام","اشغالات الميناء","حرم بحيرات"]

const schema = {
    id:"id",
    formSchema,
    endPoint:"rentalcontract",
    data: (data)=> {
       return  data.map((e,i)=>{
            return{
                ...e,
                key:i,
            }
        }) 
    }
    ,
    columns: [
        {
            title: 'نوع القطعه',
            dataIndex:"areaType" ,
            key: 'areaType',
            render: text => <a>{type[text-1]}</a>,
        },
        {
            title: 'الرقم الارشيفي للعقد',
            dataIndex: "contractCode",
            key: 'contractCode',
        },
        {
            title: 'الميناء',
            dataIndex: 4,
            key: 'lakeId',
        },
        {
            title: 'المحافظه',
            dataIndex: ["gov","govName"],
            key: 'govName',
        },
        
    ]
    // ,expand: record => {
    // return(<div class="smsm">
    // <GenaricTable data={record.lakeBoatvisits} schema={visit}/>
    // </div>
    // )
    // }
} 


export default  schema

