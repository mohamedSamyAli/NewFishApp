import React, { Component } from 'react';

const farmTS = [
    {
        width: '200px',
        title: 'المراكب',
        dataIndex: 'visitCount',
        key: 'visitCount',
        fixed: 'left',
    render: (text, record) => <p>{record.farmVisits?  record.farmVisits.length:0}</p> 
    },
    {
        width: '200px',
        title: 'تاريخ الزياره',
        dataIndex: ["visitDate"],
        key: 'Code',

    },
    {
        width: '200px',
        title: 'البحيره',
        dataIndex: ["lake","name"],
        key: 'lakeName',
    },
    {
        width: '200px',
        title: 'المركز',
        key: 'Markaz',
        dataIndex: ["markaz","name"]
    },
    {
        width: '200px',
        title: 'المحافظه',
        key: 'govName',
        dataIndex: ["markaz","governorate","name"]
    }
]
export default  farmTS