import React from 'react';
import { Checkbox, Input, Form, Button, Collapse } from 'antd';
const { Panel } = Collapse;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const GenaricForm = (props) => {
    const { schema } = props
    return (
    
        <div className="collapsable__Sections">

        <Collapse className="checkbox__collapsable-groups" defaultActiveKey={['0']}>
        
        <Panel disabled  header="معلومات عامه" key="0" >
        {schema.map((e, i) => {
            if (!Array.isArray(e)) {
                return (
                    <Form.Item
                        key={i}
                        {...e.config}
                        >
                        <e.render  />
                    </Form.Item>
                )
            } else {
                return (
                            <div style={{ display: "flex" }}>
                                {/* <GenaricForm entity='jop' schema={e}/> */}
                                {e.map((l, j) => {
                                    return (
                                        <Form.Item
                                            key={j+100}
                                            {...l.config}
                                        >
                                            <l.render />
                                        </Form.Item>
                                    )
                                })}
                        </div>
                )
            }
        })}
        </Panel>
    </Collapse>
     </div>
    )

}

export default GenaricForm;