import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';
import formSchema from "../FormDescription/Association"

const  schema = {
    
    id:"id",
    formSchema,
    endPoint:"Association",
    data: (data)=> {
       return  data.map((e)=>{
            return{
                ...e,
                //gov:e.gov.govName
            }
        }) 
    }
    ,
    columns: [
        {
            width:"200px",
            title: 'كود الجمعيه',
            dataIndex: 'id',
            key: 'id'
        },
        {
            width:"200px",

            title: 'اسم الجمعيه',
            dataIndex: 'name',
            key: 'name',
        },
        {
            width:"200px",
            title: 'الصلاحيات التابع لها',
            key: 'gov',
            dataIndex: ['governorate','name']
        },
        
    ]
} 
export default  schema