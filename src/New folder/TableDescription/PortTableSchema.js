import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';
import GenaricTable from '../components/main/table/GenaricTable'
import formSchema from "../FormDescription/Com_Form/Port"

const schema = {
    formSchema,
       endPoint:"portquarter",
    
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
            title: 'المراكب',
            dataIndex: 0,
            // dataIndex: 'visitCount',
            key: 'visitCount',
            render: text => <a>{text}</a>,
        },
        {
            title: 'الربع السنوى',
            dataIndex: 5,
            // dataIndex: 'pqName',
            key: 'pqName',
        },
        {
            title: 'الميناء',
            dataIndex: 4,
            // dataIndex: ['port','portName'],
            key: 'lakeId',
        },
        {
            title: 'المحافظه',
            dataIndex: 2,
            // dataIndex: ['port','gov','govName'],
            key: 'lakeName',
        },
        {
            title: 'الاجهزه الملاحيه',
            key: 'govName',
            dataIndex: 1
            // dataIndex: 'govName'
        },
        {
            title: 'مكتب المصايد',
            key: 'gafrdName',
            dataIndex: 3
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

