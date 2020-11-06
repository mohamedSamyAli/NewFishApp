import React, { Component } from 'react'
import { Form, Input } from 'antd'

const { Item } = Form
export default class NonOrganicFilter extends Component {
    render() {
        return (
            <div>
                <Form.List name="farmNonOrganicFertilizers">
                    {
                        () => {
                            return (<div>
                <Item
                    name={[0,"val"]}
                    label="يوريا كجم/الفدان"
                >
                    <Input/>
                </Item>
                <Item
                    name={[1,"val"]}
                    label="نترات امونيا م3/الفدان"
                >
                    <Input/>
                </Item>
                <Item
                    name={[2,"val"]}
                    label="سوبر فوسفات كجم/الفدان"
                >
                    <Input/>
                </Item>
                <Item
                    name={[3,"val"]}
                    label="أخرى كجم/الفدان"
                >
                    <Input/>
                </Item>
                </div>
                )
            }
        }
</Form.List>
            </div>
        )
    }
}
