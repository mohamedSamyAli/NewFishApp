import React, { Component } from 'react'
import { Form, Input } from 'antd'
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent'

const { Item } = Form
export default class Water extends Component {
    render() {
        return (
            <div>
                <Item
                    label="مصدر المياه"
                    name={["farmVisit","farmSample","waterSourceId"]}
                    >
                    <SelectorFetchComponent entity="WaterSource" />
                </Item>
                <Item
                    label="نوعية المياه"
                    name={["farmVisit","farmSample","waterTypeId"]}
                    >
                    <SelectorFetchComponent entity='WaterType' />
                </Item>
                <Item
                    label="معدل تغير المياه بالمتر المكعب"
                    name={["farmVisit","farmSample","waterRate"]}
                    normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                </Item>
            </div>
        )
    }
}
