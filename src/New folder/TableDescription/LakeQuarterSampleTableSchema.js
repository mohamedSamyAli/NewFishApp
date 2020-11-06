import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';
import GenaricTable from '../components/main/table/GenaricTable'
import ModalComponent from '../components/ModalComponent';
import formSchema from "../FormDescription/Com_Form/LakeQS"

const sample = {
    formSchema,
    endPoint: "lakesample",
    data: (data) => {  
        return data.map((e, i) => {
            return {
                ...e,
                key: i,
            }
        })
    },
    columns: [
        {
            title: 'طباعه',
            dataIndex: 'visitCount',
            key: 'visitCount',
        },
        {
            title: 'حذف ',
            dataIndex: 'lvsVisitid',
            key: 'lvsVisitid',
        },
        {
            title: 'كود المحطه / رقم العينه',
            dataIndex: "lsCode",
            key: 'lsCode',
        },
        {
            title: 'التاريخ',
            dataIndex: ["lakevisitSample","lvsDate"],
            key: 'lvsDate',
        },
        {
            title: 'اسم البحيره',
            key: 'lakeName',
            dataIndex: ["lakevisitSample","lakeQuarter","lake","lakeName"],
        },
        {
            title: 'اسم الموقع',
            key: 'lsStation',
            dataIndex: 'lsStation'
        },
        {
            title: 'اسم المحافظه',
            key: 'govName',
            dataIndex: ["lakevisitSample","lakeQuarter","lake","gov","govName"]
        },
        {
            title: 'منطقة الثروه السمكيه',
            key: 'gafrdName',
            dataIndex: ["lakevisitSample","lakeQuarter","lake","gov","gafrd","gafrdName"]
        },
        {
            title: 'ELEVATION',
            key: 'lsElevation',
            dataIndex: "lsElevation"
        },
        {
            title: 'LONGITUDE',
            key: 'lsLongitude',
            dataIndex: 'lsLongitude'
        },
        {
            title: 'LATITUDE',
            key: 'lsLatitude',
            dataIndex: 'lsLatitude'
        }
    ]
}


const visit = {
    formSchema,
    endPoint: "lakevisitsample",
    data: (data) => {
        
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
            render: (text, record) => { return (<ModalComponent><GenaricTable schema={{ ...sample, endPoint: sample.endPoint + "/" + record.lvsCode }} /></ModalComponent>) }

        },
        {
            title: 'رقم الزياره ',
            dataIndex: 'lvsVisitid',
            key: 'lvsVisitid',
        },
        {
            title: 'الربع',
            dataIndex: ["lakeQuarter","lqName"],
            key: 'lqName',
        },
        {
            title: 'التاريخ',
            dataIndex: "lvsDate",
            key: 'lvsDate',
        },
        {
            title: 'اسم المحافظه',
            key: 'lbvTotalarea',
            dataIndex: ["lakeQuarter","lake","gov","govName"]
        },
        {
            title: 'المركز',
            key: 'markazName',
            dataIndex: ["lakeSamples",0,"markaz","markazName"]
        },
        {
            title: 'منطقة الثروه السمكيه',
            key: 'lbvUsedarea',
            dataIndex: ["lakeQuarter","lake","gov","gafrd","gafrdName"]
        }
    ]
}
const schema = {
    formSchema,
    endPoint: "lakequartersamples",
    //endPoint:"lakequarter",
    data: (data) => {
        return data.map((e, i) => {
            return {
                ...e,
                key: i,
                govName: e.lake.gov.govName,
                //visitCount:e.lakeBoatvisits.length,
                lakeId: e.lake.lakeId,
                lakeName: e.lake.lakeName
            }
        })
    }
    ,
    columns: [
        {
            title: 'الزيارات',
            dataIndex: 'visitCount',
            key: 'visitCount',
            render: (text, record) => { return (<ModalComponent><GenaricTable schema={{ ...visit, endPoint: visit.endPoint + "/" + record.lqCode }} /></ModalComponent>) }
        },
        {
            title: 'الربع السنوى',
            dataIndex: 'lqName',
            key: 'lqName',
        },
        {
            title: 'كود البحيره',
            dataIndex: 'lakeId',
            key: 'lakeId',
        },
        {
            title: 'اسم البحيره',
            dataIndex: 'lakeName',
            key: 'lakeName',
        },
        {
            title: 'المحافظه',
            key: 'govName',
            dataIndex: 'govName'
        },
        {
            title: 'المنطقه',
            key: 'gafrdName',
            dataIndex: ['lake', 'gov', 'gafrd', 'gafrdName']
        }
    ]
    // ,expand: record => {
    // return(<div class="smsm">
    // <GenaricTable data={record.lakeBoatvisits} schema={visit}/>
    // </div>
    // )
    // }
}


export default schema