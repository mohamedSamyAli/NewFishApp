import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';
import formSchema from "../FormDescription/Fisherway"

var fisherwaytype = ["مياه بحرية","بحيرات","بحيرات و مياة بحريه"];

const  schema = {
    formName:"ادارة حرف الصيد",
    id:"fisherwayId",
    formSchema,
    endPoint:"Fisherway",
    data: (data)=> {
       return  data.map((e)=>{
            return{
                ...e,
                fisherwayType:fisherwaytype[e.fisherwayType-1]
            }
        }) 
    }
    ,
    columns: [
        {
            title: 'كودالحرفه',
            dataIndex: 'id',
            key: 'fisherwayId'
        },
        {
            title: 'اسم الحرفه',
            dataIndex: 'name',
            key: 'fisherwayName',
        },
        {
            title: 'تابعة لى',
            key: 'fisherwayType',
            dataIndex: ['fisherWayRelation',"name"]
        },
        
    ]
} 

export default  schema