import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';
import GenaricTable from '../components/main/table/GenaricTable'
import ModalComponent from '../components/ModalComponent';
import formSchema  from "../FormDescription/Com_Form/FarmVS"


const sample = {
    endPoint: "farmsample",
    data: (data) => {
        console.log(data)
        return data.map((e, i) => {
            return {
                ...e,
                key: i,
            }
        })
    }
    ,
    columns: [
        {
            title: 'تعديل',
            dataIndex: 'visitCount',
            key: 'visitCount',
            fixed: 'left',
        },
        {
            title: 'طباعه',
            dataIndex: "fvVisitId",
        },
        {
            title: 'حذف',
            dataIndex: ['farmQuarter', 'fqName'],
            key: 'fqName',
        },
        {
            title: 'تاريخ الزياره',
            key: 'fvDate',
            dataIndex:['farmVisit','fvDate']
        },
        {
            title: 'كود المزرعه',
            key: 'farmCode',
            dataIndex: ['farmVisit','farmQuarter','farm','farmCode']
        },
        {
            title: 'اسم المزرعه',
            dataIndex: ['farmVisit','fvFarmName'],
            key: 'fvFarmName',
        },
        {
            title: 'المالك',
            dataIndex: ['farmVisit','fvOwner'],
            key: 'fvOwner',
        },
        {
            title: "المحافظه",
            dataIndex: ['farmQuarter', 'farm', 'gov', 'govName'],
            key: 'govName',
        },
        {
            title: 'المركز',
            key: 'lbvTotalarea',
            dataIndex: ['farmQuarter', 'farm', 'markaz', 'markazName']
        }
    ]
}

const visit = {
    endPoint: "farmvisit",
    data: (data) => {
        console.log(data)
        return data.map((e, i) => {
            return {
                ...e,
                key: i,
            }
        })
    }
    ,
    columns: [
        {
            title: 'العينات',
            dataIndex: 'visitCount',
            key: 'visitCount',
            fixed: 'left',
            render: (text, record) => { return (<ModalComponent><GenaricTable schema={{ ...sample, endPoint: sample.endPoint + "/" + record.fvisitCode }} /></ModalComponent>) }
        },
        {
            title: 'كود الزياره',
            dataIndex: "fvVisitId",
        },
        {
            title: 'الربع السنوي',
            dataIndex: ['farmQuarter', 'fqName'],
            key: 'fqName',
        },
        {
            title: 'كود المزرعه',
            key: 'govName',
            dataIndex: ['farmQuarter', 'farm', 'farmCode']
        },
        {
            title: 'اسم المزرعه',
            key: 'fvFarmName',
            dataIndex: "fvFarmName"
        },
        {
            title: 'المالك',
            dataIndex: 'fvOwner',
            key: 'fvOwner',
        },
        {
            title: 'المحافظه',
            dataIndex: ['farmQuarter', 'farm', 'gov', 'govName'],
            key: 'markazName',
        },
        {
            title: "المركز",
            dataIndex: ['farmQuarter', 'farm', 'markaz', 'markazName'],            key: 'lbvVisitId',
        },
        {
            title: 'القريه',
            key: 'lbvTotalarea',
            dataIndex: 'lbvTotalarea'
        },
        {
            title: 'المحطه',
            key: 'lbvUsedarea',
            dataIndex: 'lbvUsedarea'
        },
        {
            title: 'المساحه-ف',
            key: 'fvAreaf',
            dataIndex: 'fvAreaf'
        },
        {
            title: 'المساحه-ط',
            key: 'fvAreaq',
            dataIndex: 'fvAreaq'
        },
        {
            title: 'المساحه-س',
            key: 'fvAreas',
            dataIndex: 'fvAreas'
        }
    ]
}




const schema = {
    formSchema,
    endPoint:"farmquarter",
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
            title: 'الزيارات',
            dataIndex: '10',
            key: 'visitCount',
            render: (text, record) => { return (<ModalComponent><GenaricTable schema={{ ...visit, endPoint: visit.endPoint + "/" + record[1] }} /></ModalComponent>) }
        },
        {
            title: 'الربع السنوى',
            dataIndex: 0,
            key: 'fqName',
        },
        {
            title: 'كود الربع السنوى',
            dataIndex: 1,
            key: 'fqId',
        },
        {
            title: 'كود المزرعه',
            dataIndex: 2,
            key: 'fname',
        },
        {
            title: 'المحافظه',
            key: 'govName',
            dataIndex: 3
        },
        {
            title: 'المركز',
            key: 'govName3',
            dataIndex: 4
        },
        {
            title: 'اسم المزرعه',
            key: 'govName4',
            dataIndex: 5
        },
        {
            title: 'مالك المزرعه',
            key: 'govName5',
            dataIndex: 6
        },
        {
            title: 'رقم البطاقه',
            key: 'gafrdName6',
            dataIndex: 7
        }
    ]
} 


export default  schema