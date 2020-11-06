import React from 'react';
import { gettextField, getManytextFields } from "./helpers"
import GovSelectorComponent from '../components/FormComponent/SelectorFetchComponent';
import { Input } from 'antd';

const schema = [
    gettextField("name", "الاسم", true)
    ,
    {
        config: {
            name: ['governorateId'],
            label: "المحافظه",
        },
        render: (props) => <GovSelectorComponent entity='gov' {...props} />

    },
    {
        config: {
            label: 'Longitude',
            name: "lng",
            normalize:(v)=>parseFloat(v)
        },
        render: (props) => <Input type="number" {...props} />

    },
    {
        config: {
            label: 'Latitude',
            name: "lat",
            normalize:(v)=>parseFloat(v),
            
        },
        render: (props) => <Input type="number" {...props} />

    }

]


export default schema