import { Table, Tag, Space } from 'antd';
import React, { Component } from 'react';

let type = ["مزرعه", "خور", "ترع", "مصارف", "مناطق التزام", "اشغالات الميناء", "حرم بحيرات"]

const schema = [
    {
        width: '100px',
        title: 'نوع القطعه',
        dataIndex: ["rentContract", "partType", "name"],
        key: 'areaType',

    },
    {
        width: '100px',
        title: 'الرقم الارشيفي للعقد',
        dataIndex: ["rentContract", "archivedContractNumber"],
        key: 'contractCode',

    },
    {
        width: '100px',
        title: "اسم المحافظه",
        dataIndex: ["rentContract", "governorate", "name"]
    },
    {
        width: '100px',
        title: 'المحافظه',
        dataIndex: ["rentContract", "governorate", "name"],
        key: 'govName',
    },

]

export default schema

