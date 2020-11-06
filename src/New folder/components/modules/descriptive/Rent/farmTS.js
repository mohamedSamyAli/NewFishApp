import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';

let type = ["مزرعه" ,"خور","ترع","مصارف","مناطق التزام","اشغالات الميناء","حرم بحيرات"]

const schema =[
        {
            title: 'نوع القطعه',
            dataIndex:["rentContract","partType","name"],
            key: 'areaType',
        },
        {
            title: 'الرقم الارشيفي للعقد',
            dataIndex: ["rentContract","archivedContractNumber"],
            key: 'contractCode',
        },
        {
            title:"اسم المحافظه",
            dataIndex:["rentContract","governorate","name"]
        },
        {
            title: 'المحافظه',
            dataIndex: ["rentContract","governorate","name"],
            key: 'govName',
        },
        
    ]

export default  schema

