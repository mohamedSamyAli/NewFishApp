import React, { Component } from 'react'
import { Form, Input, Collapse} from 'antd'

import HMTable from './HMTable'

const { Panel } = Collapse;
const { Item } = Form
export default class WaterCh extends Component {
    render() {
        return (
            <div>
                <Item
                            label="C درجة الحرارة"
                            name={["farmVisit","farmChemicalChar","temp"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأس الهيدروجينى للعينه"
                            name={["farmVisit","farmChemicalChar","ph"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأملاح الذائبة لكل جرام/لتر"
                            name={["farmVisit","farmChemicalChar","Ds"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="القلوية لكل مللى جرام/لتر"
                            name={["farmVisit","farmChemicalChar","tal"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأكسجين الذائب لكل مللى جرام /لتر"
                            name={["farmVisit","farmChemicalChar","dox"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأكسجين المستهلك حيويا لكل مللى جرام أكسجين/لتر"
                            name={["farmVisit","farmChemicalChar","bod"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأكسجين المستهلك كيميائيا لكل مللى جرام أكسجين/لتر"
                            name={["farmVisit","farmChemicalChar","cod"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="تركيزات ايون الكلوريد لكل جرام / لتر"
                            name={["farmVisit","farmChemicalChar","cli"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="عسر المياه لكل مللى جرام /لتر"
                            name={["farmVisit","farmChemicalChar","whd"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأمونيوم-نيتروجين لكل مللى جرام/لتر"
                            name={["farmVisit","farmChemicalChar","amm"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="النيتريت- نيتروجين لكل مللى جرام/لتر"
                            name={["farmVisit","farmChemicalChar","nit2"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="النترات- نيتروجين لكل مللى جرام/لتر"
                            name={["farmVisit","farmChemicalChar","nit3"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="الأورثوفوسفات-فوسفات لكل مللى جرام/لتر"
                            name={["farmVisit","farmChemicalChar","rpho"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <Item
                            label="السيليكات-سيليكا لكل مللى جرام/لتر"
                            name={["farmVisit","farmChemicalChar","rsi"]}
                         normalize={(v)=>parseFloat(v)}
                >
                    <Input type="number"></Input>
                        </Item>
                        <HMTable/>
            </div>
        )
    }
}
