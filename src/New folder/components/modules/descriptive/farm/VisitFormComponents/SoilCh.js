import React, { Component } from 'react'
import { Form, Input} from 'antd'
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent'

const { Item } = Form

export default class SoilCh extends Component {
    render() {
        return (
            <div>
                 <Item
                            label="نوع التربه"
                            name={["farmVisit","farmSample","SoilTypeId"]}
                        >
<SelectorFetchComponent entity="soiltypelt"/>
                        </Item>
                  <Item
                            label="درجة الملوحه لكل جرام /لتر"
                            name={["farmVisit","farmSample","soilsalinty"]}
                            normalize={parseFloat}
                        >
                            <Input  type="number"/>
                        </Item>
                        <Item
                            label="درجة الحموضه PH"
                            name={["farmVisit","farmSample","soilPh"]}
                            normalize={parseFloat}
                            >
                                <Input  type="number"/>
                        </Item>
                        <Item
                            label="نسبة المواد العضويه"
                            name={["farmVisit","farmSample","organic"]}
                            normalize={parseFloat}
                            >
                                <Input  type="number"/>
                        </Item>
                        <Item
                            label="تركيز الكربونات ملجم/لتر"
                            name={["farmVisit","farmSample","carbonate"]}
                            normalize={parseFloat}
                            >
                                <Input  type="number"/>
                        </Item>
                        <Item
                            label="تركيز الفوسفات ملجم/لتر"
                            name={["farmVisit","farmSample","phosphat"]}
                            normalize={parseFloat}
                            >
                                <Input  type="number"/>
                        </Item>
                        <Item
                            label="تركيز الكبريتات ملجم/لتر"
                            name={["farmVisit","farmSample","sulphate"]}
                            normalize={parseFloat}
                            >
                                <Input  type="number"/>
                        </Item>
            </div>
        )
    }
}
