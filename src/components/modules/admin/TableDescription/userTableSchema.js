import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';

import formSchema from "../FormDescription/User"

const  schema = {
    formName:"ادارة المستخدمين",
    id:"userId",
    formSchema,
    endPoint:"usersInfo",
    data: (data)=> {
       return  data.map((e)=>{
           return{
               ...e,
               userJob:e.userJob.ujobName
           }
       })
    }
    ,
    columns: [
        {
            title: 'كود المستخدم',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'اسم المستخدم',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'الاسم بالكامل ',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'الوظيفه ',
            dataIndex: 'ujobName',
            key: 'ujobName',
        },
        {
            title: 'المحافظه التابع لها',
            key: 'userGovId',
            dataIndex: 'userGovId'
            
        }
    ]
} 
export default  schema