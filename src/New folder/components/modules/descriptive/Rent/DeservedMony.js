import React, { Component } from 'react'
import { Button, Form, Input} from 'antd'
import { mapDispatchToProps, mapStateToProps } from "../../../../../src/components/reduxMaping"
import { connect } from 'react-redux';
const { Item } = Form
 class DeservedMony extends Component {
    render() {
        return (
            <div>
                   <Item
                    name={["rentContract","totalIssued"]}
                        label="الاموال المستحقه"
                        normalize={(v) => parseFloat(v)}
                    >
                        <Input type="number" />
                    </Item>
                    <Item
                    name={["rentContract","delayPenalty"]}
                        label="غرامة التاخير"
                        normalize={(v) => parseFloat(v)}
                    >
                        <Input type="number" />
                    </Item>
                    <Button onClick={this.props.Calculate.Refresh}> تحديث الحساب</Button>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeservedMony);
