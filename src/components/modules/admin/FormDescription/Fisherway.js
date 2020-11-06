import React from 'react';

import {gettextField} from"./helpers"

import { Select } from 'antd';

const { Option } = Select;

const schema = [
    gettextField("name"," الاسم ",true),
        {
            config:{
                label:'تابعه لى',
                name:"fisherWayRelationId",
                rules:[{ required: true, message:`مطلوب`}]


            },
            render: (props) => (
                <Select
                showSearch
                style={{ width: 200 }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                {...props}
                >
                <Option key={1} value={1}>مياه بحرية</Option>
                <Option key={2} value={2}>بحيرات</Option>
                <Option key={3} value={3}>بحيرات ومياه بحريه</Option>
              </Select>
         )
         
        }
       
        

]


export default schema