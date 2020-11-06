import { Tag, Space } from 'antd';
import React from 'react';

import formSchema from "../FormDescription/Gafrd"

const schema = {
    formName:"ادارة المناطق",
    id: "id",
    formSchema,
    endPoint: "Region",
    // sendParser: (e) => { 
    //     return { 
    //         ...e, 
    //         gov: e.govs.map(l => l.govId) 
    //     } 
    //     },
    data: (data) => {
        return data.map((e) => {
            return {
                ...e,
                //govs: e.govs.map(f => f.govName)
            }
        })
    }
    ,
    columns: [
        {
            title: 'كود المنطقه',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'اسم المنطقه',
            dataIndex: 'name',
            key: 'name',
        },
        // {
        //     title: 'المحافظات التابع لها',
        //     key: 'govs',
        //     dataIndex: 'govs',
        //     render: tags => (
        //         <>
        //             {tags.map(tag => {
        //                 return (
        //                     <Tag key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // }
    ]
}
export default schema