import React, { Component } from 'react'
import { Form, Input } from 'antd'

const { Item } = Form
export default class Fertility extends Component {
    render() {
        return (
            <div>
                <Item
                            label="قياس الخصوبة الأولية مللى جرام/لتر"
                            name={["farmVisit","farmBioChar","inv"]}
                            normalize={parseFloat}
                        >
                            <Input type="number" />
                        </Item>
                        <Item
                            label="تقدير كلوروفيل A مللى جرام/لتر"
                            name={["farmVisit","farmBioChar","Beninv"]}
                            normalize={parseFloat}

                        >
                            <Input type="number" />
                        </Item>
            </div>
        )
    }
}
