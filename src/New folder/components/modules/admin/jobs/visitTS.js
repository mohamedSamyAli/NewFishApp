import React, { Component } from 'react';

const farmTS = [
    {
        title: 'التاريخ',
        dataIndex: ["visitDate"],
        key: 'visitDate',
    },
    {
        title: 'المساحه',
        key: 'areaF',
        dataIndex: ["areaF"]
    },
    {
        title: 'اسم المالك',
        key: 'ownerName',
        dataIndex: ["ownerName"]
    },
    {
        title: 'اسم المشرف',
        key: 'superVisor',
        dataIndex:["superVisor","user","userName"]
    },
    {
        title: 'اسم المساح',
        key: 'surveyor',
        dataIndex:["surveyor","user","userName"]
    },

]
export default  farmTS