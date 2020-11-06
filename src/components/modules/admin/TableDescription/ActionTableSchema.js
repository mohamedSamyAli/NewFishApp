import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';

import formSchema from "../FormDescription/Association"

const schema = {
    formSchema,
    endPoint: "actionlog",
    data: (data) => {
        return data.map((e) => {
            return {
                ...e,
            }
        })
    }
    ,
    columns: [
        {
            title: 'م',
            dataIndex: 'logId',
            key: 'logId'
        },
        {
            title: 'الاسم بالكامل',
            dataIndex: 'assName',
            key: 'assName',
        },
        {
            title: 'المحافظه التابع لها',
            key: 'gov',
            dataIndex: "logId"
        },
        {
            title: 'التاريخ',
            key: 'actionTime',
            dataIndex: "actionTime"
        },
        {
            title: 'الصفحه',
            key: 'actionPage',
            dataIndex: "actionPage"
        },
        {
            title: 'الحدث',
            key: 'action',
            dataIndex: "action"
        },
        {
            title: 'ip',
            key: 'actionIp',
            dataIndex: "actionIp"
        },
    ]
}
export default schema