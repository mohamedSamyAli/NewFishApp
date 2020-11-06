import React, { Component } from 'react'
import { Form, Collapse } from 'antd'

import Genral from './FormComponents/Data.js/Genral';
import Area from './FormComponents/Data.js/Area';
const { Panel } = Collapse;
const { Item } = Form
export default class LakeVisitF extends Component {

    render() {
        return (
            <div className="collapsable__Sections">
                <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['0','1']}>
                    <Panel accordion={true} header="معلومات عامه" key='0'>
                       <Genral/>
                    </Panel>
                    <Panel accordion={true} header=" عامه" key='1'>
                       <Area/>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}
