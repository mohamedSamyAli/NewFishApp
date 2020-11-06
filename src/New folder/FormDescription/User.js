import React from 'react';
import { gettextField, getManytextFields } from "./helpers"
import GovSelectorComponent from '../components/FormComponent/SelectorFetchComponent';

const schema = [
    ...getManytextFields(["Name", 'fullName'], ['الاسم', 'الاسم بالكامل'], [true, true], [null, null]),
    {
        config: {
            name: ['userJob', 'uJobId'],
            label: "الوظيفه",
            rules: [{ required: true, message: `ادخل الوظيفه` }]
        },
        render: (props) => <GovSelectorComponent entity='role' {...props} />

    },
    {
        config: {
            name: 'userGovId',
            label: "المحافظه",
            rules: [{ required: true, message: `ادخل المحافظه` }]
        },
        render: (props) => <GovSelectorComponent mode="multiple" entity='gov' {...props} />

    },
    gettextField("userPass","كلمة السر",true,"Password")
]


export default schema