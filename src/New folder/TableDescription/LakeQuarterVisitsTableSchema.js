import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';
import GenaricTable from '../components/main/table/GenaricTable'
import ModalComponent from '../components/ModalComponent';
import TableSchema from '../TableDescription'
import formSchema  from "../FormDescription/Com_Form/LakeQV"


const boats = {
    endPoint: "lakeboat",
    data: (data) => {
        console.log(data)
        return data.map((e, i) => {
            return {
                ...e,
                key: i,
                //markazName: e.markaz.markazName,
                //visitCount:e.lakeBoats.length,
            }
        })
    },
    columns: [
        {
            dataIndex: ['lakeBoatvisit', 'lbvDate'],
            key: 'lbv_date',
            title: "تاريخ الزيارة"
        },
        {
            dataIndex: ['boat', 'boatId'],
            key: 'boat_id',
            title: "كود المركب"
        },
        {
            dataIndex: 'lbOwner',
            key: 'lb_owner',
            title: "اسم المالك"
        },
        {
            dataIndex: 'lbBoatProd',
            key: 'lb_boat_prod',
            title: "الانتاج"
        },
        {
            dataIndex: 'lbTridur',
            key: 'lb_tridur',
            title: "زمن السرحة",
        },
        {
            dataIndex: 'lbTripno',
            key: 'key',
            title: "عدد السرحات",
        },
        {
            dataIndex: 'lbFishingday',
            key: 'lb_fishingday',
            title: "ايام الصيد"
        },
        {
            dataIndex: 'lbBoatFishermen',
            key: 'lbBoatFishermen',
            title: "عدد الصيادين"
        },
        {
            dataIndex: 'lbOtherCons',
            key: 'lb_other_cons',
            title: "مصاريف اخرى"
        },
        {
            dataIndex: 'lbBoatCons',
            key: 'lb_boat_cons',
            title: "استهلاك القارب"
        },
        {
            dataIndex: 'lbNetCons',
            key: 'lb_net_cons',
            title: "استهلاك الشباك"
        },
        {
            dataIndex: 'lbFtoolsValue',
            key: 'lb_ftools_value',
            title: "قيمة معدات الصيد"
        },
        {
            dataIndex: 'lbBoatValue',
            key: 'lb_boat_value',
            title: "قيمة القارب"
        },
        {
            dataIndex: ['boatDegreeLt', 'boatDName'],
            key: 'boat_d_name',
            title: "درجة المركب"
        },
        {
            dataIndex: ['boatMaterialLt', 'boatMaterialName'],
            key: 'boat_material_name',
            title: "مادة الصنع"
        },
        {
            dataIndex: ['fisherwayLt', 'fisherwayName'],
            key: 'fisherway_name',
            title: "حرفة الصيد"
        },
        {
            dataIndex: 'ass_name',
            key: 'ass_name',
            title: "الجمعية"
        },
    ]
}

const visit = {
    endPoint: "lakeboatvisit",
    data: (data) => {
        console.log(data)
        return data.map((e, i) => {
            return {
                ...e,
                key: i,
                markazName: e.markaz.markazName,
                //visitCount:e.lakeBoats.length,
            }
        })
    }
    ,
    columns: [
        {
            title: 'المراكب',
            dataIndex: 'visitCount',
            key: 'visitCount',
            fixed: 'left',
            render: (text, record) => { return (<ModalComponent><GenaricTable schema={{ ...boats, endPoint: boats.endPoint + "/" + record.lbvCode }} /></ModalComponent>) }


        },
        {
            title: 'الربع السنوى',
            dataIndex: ['lakeQuarter', 'lqName'],
            key: 'lqName',
            fixed: 'left',

        },
        {
            title: 'اسم البحيره',
            dataIndex: ['lakeQuarter', 'lake', 'lakeName'],
            key: 'lakeName',
            width:"10rem"
        },
        {
            title: 'المحافظه',
            key: 'govName',
            dataIndex: ['lakeQuarter', 'lake', 'gov', 'govName']
        },
        {
            title: 'المنطقه',
            key: 'gafrdName',
            dataIndex: ['lakeQuarter', 'lake', 'gov', 'gafrd', 'gafrdName']
        },
        {
            title: 'تاريخ',
            dataIndex: 'lbvDate',
            key: 'lbvDate',
        },
        {
            title: 'مركز',
            dataIndex: 'markazName',
            key: 'markazName',
        },
        {
            title: 'كود الزياره ',
            dataIndex: 'lbvVisitId',
            key: 'lbvVisitId',
        },
        {
            title: 'المساحه الكليه',
            key: 'lbvTotalarea',
            dataIndex: 'lbvTotalarea'
        },
        {
            title: 'المساحه المستخدمه',
            key: 'lbvUsedarea',
            dataIndex: 'lbvUsedarea'
        }
    ]
    // ,expand: record => <GenaricTable data={record.lakeBoatvisits} schema={visit}/>
}
const schema = {
    formSchema,
    endPoint: "lakequartervisits",
    //endPoint:"lakequarter",
    data: (data) => {
        return data.map((e, i) => {
            return {
                ...e,
                key: i,
                //govName: e.lake.gov.govName,
                //visitCount:e.lakeBoatvisits.length,
                //lakeId: e.lake.lakeId,
                //lakeName: e.lake.lakeName
            }
        })
    }
    ,
    columns: [
        {
            title: 'الزيارات',
            dataIndex: 'visitCount',
            key: 'visitCount',
            fixed: 'left',
            render: (text, record) => { return (<ModalComponent><GenaricTable schema={{ ...visit, endPoint: visit.endPoint + "/" + record.lqCode }} /></ModalComponent>) }
        },
        {
            title: 'الربع السنوى',
            dataIndex: 'lqName',
            key: 'lqName',
        },
        {
            title: 'كود البحيره',
            dataIndex: ['lake', 'lakeId'],
            key: 'lakeId',
        },
        {
            title: 'اسم البحيره',
            dataIndex: ['lake', 'lakeName'],
            key: 'lakeName',
        },
        {
            title: 'المحافظه',
            key: 'govName',
            dataIndex: ['lake', 'gov', 'govName']
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