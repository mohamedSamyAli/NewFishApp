import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';

import formSchema from "../FormDescription/Jop"

const  schema = {
    formName:"ادارة الوظائف",
    id:"uJobId",
    sendParser:(e=>{
        var rolArr = e.roleLts.map(l=>l.roleId)
        
        return{
            ...e,
            p1:rolArr.filter(value => [18, 19, 20, 21, 22, 23, 5, 6, 7, 12, 2].includes(value)),
            p2:rolArr.filter(value => [8, 9, 10, 11, 24, 25, 3].includes(value)),
            p3:rolArr.filter(value => [14, 15, 16, 17, 13].includes(value)),
            p4:rolArr.filter(value => [4].includes(value)),
            p5:rolArr.filter(value => [1].includes(value)),
        }
    }),
    formSchema,
    endPoint:"userjob",
    data: (data)=> {
       return  data.map((e)=>{
            return{
                ...e,
                roleLts:e.roleLts.map(f=>f.roleDesc)
            }
        }) 
    }
    ,
    columns: [
        {
            title: 'كود الوظيفه',
            dataIndex: 'uJobId',
            key: 'uJobId',
            render: text => <a>{text}</a>,
        },
        {
            title: 'اسم الوظيفه',
            dataIndex: 'uJobName',
            key: 'uJobName',
        },
        {
            title: 'الصلاحيات التابع لها',
            key: 'roleLts',
            width: 400,
            dataIndex: 'roleLts',
            render: tags => (
                <>
                    {tags.map(tag => {
                      
                        return (
                            <Tag key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
    ]
} 
export default  schema