import React, { Component } from 'react';
import { Table, Space, Form, Button, Modal, Input } from 'antd';
import SelectorFetchComponent from '../../../../FormComponent/SelectorFetchComponent';
const { Item } = Form
export default class Workers extends Component {
    render() {
        return (
            <div>
                <Item
                    label="العنصر البشري"
                    name={['farmVisit','workerLevelId']}
                >
                    <SelectorFetchComponent entity='WorkerLevel' />
                </Item>

                <Item
                    name={["VWorkers","Director"]}
                    label="مدير"
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["VWorkers","TechLabor"]}
                    label="عامل فنى"
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["VWorkers","Labor"]}
                    label="عامل عادى"
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["VWorkers","DailyLabor"]}
                    label="يوميه"
                >
                    <Input></Input>
                </Item>
                <Item
                    name={["VWorkers","Guard"]}
                    label="حارس"
                >
                    <Input></Input>
                </Item>
            </div>
        )
    }
}
