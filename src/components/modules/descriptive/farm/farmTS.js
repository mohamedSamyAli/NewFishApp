import React, { Component } from 'react';

const farmTS = [
    {
        width: '80px',
        title: 'الزيارات',
        dataIndex: 'visitCount',
        key: 'visitCount',
        fixed: 'left',
    render: (text, record) => <p>{record.farmVisits?  record.farmVisits.length:0}</p> 
    },
    {
        width: '100px',
        title: 'كود المزرعه',
        dataIndex: ["farm","code"],
        key: 'Code',

    },
    {
        width: '100px',
        title: 'البحيره',
        dataIndex: ["farm","lake","name"],
        key: 'lakeName',
        render: (text, record) => <p>{text?text:"لا يوجد"}</p> 

    },
    {
        width: '100px',
        title: 'المحافظه',
        key: 'govName',
        dataIndex: ["farm","markaz","governorate","name"]
    },
    {
        width: '100px',
        title: 'منطقة الثروه السمكيه',
        key: 'regionName',
        dataIndex: ["farm","markaz","governorate","region","name"]
    },
    {
        width: '100px',
        title: 'المالك',
        dataIndex: ["farm","lastVisit","ownerName"],
        key: 'fOwner',
    },
    {
        width: '100px',
        title: 'المركز',
        dataIndex: ["farm","markaz","name"],
        key: 'markazName',
    },
    {
        width: '100px',
        title: "القريه",
        dataIndex: ["farm","village"],
        key: 'Vname',
    },
    // {
    //     title: 'المساحه',
    //     key: 'area',
    //     dataIndex: 'lbvUsedarea'
    // },

]
export default  farmTS