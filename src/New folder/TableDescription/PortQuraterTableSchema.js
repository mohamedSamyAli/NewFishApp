import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';
import GenaricTable from '../components/main/table/GenaricTable'
import formSchema from "../FormDescription/Com_Form/SW"

const schema = {
    formSchema,
    endPoint:"port",
    //endPoint:"lakequarter",
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
            title: 'النوع',
            dataIndex: "pvPorttypeId",
            // dataIndex: 'visitCount',
            key: 'visitCount',
            render: text => <a>{text}</a>,
        },
        {
            title: 'الكود',
            dataIndex: "portId",
            // dataIndex: 'pqName',
            key: 'pqName',
        },
        {
            title: 'الاسم',
            dataIndex: "portName",
            // dataIndex: ['port','portName'],
            key: 'lakeId',
        },
        {
            title: 'التاريخ',
            dataIndex: "pvDate",
            key: 'lakeName',
        },
        {
            title: 'المحافظه',
            key: 'govName',
            dataIndex: ['gov','govName'],
            // dataIndex: 'govName'
        },
        {
            title: 'تاريخ التشغيل',
            key: 'poperationDate',
            dataIndex: "poperationDate"
            // dataIndex: ['portBoats',0,'boat','fisheryDisk','fdName']
        }
        ,
        {
            title: 'المساحه الكليه ',
            key: 'pvTotalarea',
            dataIndex: "pvTotalarea"
            // dataIndex: ['portBoats',0,'boat','fisheryDisk','fdName']
        },
        {
            title: 'المساحه الكليه للمسطح بالمتر المربع',
            key: 'pvWaterarea',
            dataIndex: "pvWaterarea"
            // dataIndex: ['portBoats',0,'boat','fisheryDisk','fdName']
        },
        {
            title: 'المساحه الغير مستغله',
            key: 'pvUnusedarea',
            dataIndex: "pvUnusedarea"
            // dataIndex: ['portBoats',0,'boat','fisheryDisk','fdName']
        }
    ]
    // ,expand: record => {
    // return(<div class="smsm">
    // <GenaricTable data={record.lakeBoatvisits} schema={visit}/>
    // </div>
    // )
    // }
} 


export default  schema

