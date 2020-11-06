import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';

import formSchema from "../FormDescription/species"

const schema = {
    id:"id",

    formSchema,
    endPoint: "FishKind",
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
            dataIndex: 'id',
            key: 'id',
            render:(r)=><p>{r+1}</p>
            
        },
        {
            title: 'الاسم بالكامل',
            dataIndex: 'name',
            key: 'name'
           

        }
    ]
}
export default schema