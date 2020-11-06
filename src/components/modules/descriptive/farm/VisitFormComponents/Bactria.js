import React, { Component } from 'react'
import { Form, Input} from 'antd'
const { Item } = Form
export default class Bactria extends Component {
    render() {
        return (
            <div>
               
               <Item
                            label="العدد الكلى للبكتيريا لكل سنتيمتر مكعب من المياه"
                            name={["farmVisit","farmBioChar","tob"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="العدد الإحتمالى لبكتيريا القولون الكلية لكل 100 سنتيمتر مكعب"
                            name={["farmVisit","farmBioChar","tocb"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="العدد الإحتمالى لبكتيريا القولون البرازية لكل 100 سنتيمتر مكعب"
                            name={["farmVisit","farmBioChar","pcb"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="العدد الكلى للهوائم الحيوانية لكل سنتيمتر مكعب	"
                            name={["farmVisit","farmBioChar","zooplankton"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item> 
            </div>
        )
    }
}
