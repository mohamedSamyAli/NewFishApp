import React, { Component } from 'react'
import { Form, Collapse, Checkbox } from 'antd'
import * as premissions from './premissions.js'
import PremissionsComponent from './PremissionComponent.js'
const { Panel } = Collapse;
const { Item } = Form
const CheckboxGroup = Checkbox.Group;

export default class LakeVisitF extends Component {

    render() {
        return (
            <div className="collapsable__Sections">
                <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['0']}>
                    <Panel accordion={true} header="معلومات عامه" key='0'>
                        <Item>

                            <CheckboxGroup name="p5">
                                <Checkbox value={1}>
                                    مسؤول النظام
                    </Checkbox>
                            </CheckboxGroup>
                        </Item>
                        <div class="blockWraper" style={{ display: "inline-block" }}>
                            {
                                premissions.descripOptions.map(e => <Item name={"pp" + e.key} ><PremissionsComponent style={{ height: "150px" }} options={premissions.Pagepremission} titlename={e.name} titleKey={e.key + 12550} /></Item>)
                            }
                        </div>
                        <Item name={"pp" + 1321} >
                            <PremissionsComponent options={premissions.spatialOptions} titlename=" البيانات المكانيه" titleKey={30} />
                        </Item>
                        <Item name={"pp" + 12354} >
                            <PremissionsComponent options={premissions.QueriesOptions} titlename="استفسارات سابقة التعريف" titleKey={103} />
                        </Item>
                        <Item name={"pp" + 12354} >
                            <Checkbox value={4} key="4" >
                                التقارير
                            </Checkbox>
                        </Item>
                    </Panel>

                </Collapse>
            </div>
        )
    }
}
