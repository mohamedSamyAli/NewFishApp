import React, { Component } from 'react'
import { Form, Input, Collapse, Upload, Button, DatePicker, Divider } from 'antd'
import SelectorFetchComponent from '../../../../components/FormComponent/SelectorFetchComponent'
import FishUnit from './FormComponents/Data.js/BoatData/FishUnit';
import ProductionFisherWay from './FormComponents/Data.js/BoatData/ProductionFisherWay';
import ProductionByKind from './FormComponents/Data.js/BoatData/ProductionByKind';
const { Panel } = Collapse;
const { Item } = Form
export default class FarmF extends Component {

    render() {
        return (
            <div className="collapsable__Sections">
                <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['1','2']}>
                    <Panel accordion={true} header="وحدات الصيد" key='1'>
                        <FishUnit />
                    </Panel>
                    <Panel accordion={true} header="الانتاج حسب حرف الصيد" key='2'>
                        <ProductionFisherWay />
                    </Panel>
                    <Panel accordion={true} header="الانتاج حسب النوع" key='3'>
                        <ProductionByKind />
                    </Panel>
                </Collapse>
            </div>
        )
    }   
}

