import React, { Component } from 'react'
import { Form, Input } from 'antd'
import SelectorFetchComponent from '../../../../../components/FormComponent/SelectorFetchComponent'
const { Item } = Form
export default class Weather extends Component {
    render() {
        return (
            <div>
                <Item
                            name={["farmWeather",  "temp"]} 
                            label="درجة الحراره C"
                        normalize={parseFloat}
>
                            <Input></Input>
                        </Item>
                        <Item
                            name={["farmWeather",  "humedity"]} 
                            label="الرطوبه%"
                        normalize={parseFloat}
>
                            <Input></Input>
                        </Item>
                        <Item
                            name={["farmWeather",  "windspeed"]} 
                            label="سرعة الرياح(عقده)"
                        normalize={parseFloat}
>
                            <Input></Input>
                        </Item>
                        <Item
                            name={["farmWeather",  "rain"]} 
                            label="الامطار(m m)"
                        normalize={parseFloat}
>
                            <Input></Input>
                        </Item>
                        <Item
                             name={["farmWeather",  "evap"]} 
                            label="البخر(m m)"
                        normalize={parseFloat}
>
                            <Input></Input>
                        </Item>
                        <Item
                             name={["farmWeather",  "windDirectionId"]} 
                            label="اتجاه الرياح"
                        >
                            
                            <SelectorFetchComponent entity='WindDirection' />
                        </Item>
              
            </div>
        )
    }
}
