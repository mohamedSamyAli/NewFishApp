import React, { Component } from 'react'
import { Form, Input} from 'antd'
const { Item } = Form
export default class FloatingPlants extends Component {
    render() {
        return (
            <div>
                  <Item
                            label="عدد وحدات الهائمات النباتية"
                            name={["farmVisit","farmBioChar", "phy"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <lable>عدد وحدات عائلات الهائمات النباتية </lable>
                        <Item
                            label="الدياتومات"
                            name={["farmVisit","farmBioChar", "dia"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الطحالب الخضراء"
                            name={["farmVisit","farmBioChar", "galgea"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الطحالب الخضراء المزرقة"
                            name={["farmVisit","farmBioChar", "bgalgea"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="اخرى"
                            name={["farmVisit","farmBioChar", "otheralgea"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="تركيزات الكلوروفيل أ لكل مللي جرام / لتر ماء"
                            name={["farmVisit","farmBioChar", "cla"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="عدد الطحالب الملتصقة فوق النباتات لكل جرام وزن صافى من النبات"
                            name={["farmVisit","farmBioChar", "algeaplant"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>


            </div>
        )
    }
}
