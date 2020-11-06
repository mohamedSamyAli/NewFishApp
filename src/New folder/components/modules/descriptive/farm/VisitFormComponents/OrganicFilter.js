import React, { Component } from 'react'
import { Form, Input } from 'antd'

const { Item } = Form
export default class OrganicFilter extends Component {
    render() {
        return (
            <div>
                <Form.List name="farmOrganicFertilizers">
                    {
                        () => {
                            return (<div>
                                <Item
                                    name={[0, "val"]}
                                    label="سماد بلدى م3/الفدان"
                                >
                                    <Input />
                                </Item>
                                <Item
                                    name={[1, "val"]}
                                    label="زرق دواجن م3/الفدان"
                                >
                                    <Input />
                                </Item>
                                <Item
                                    name={[2, "val"]}
                                    label="أخرى م3/الفدان"
                                >
                                    <Input />
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
