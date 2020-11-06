import React from 'react';
import {Form, Collapse } from 'antd';
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
    
        <>   
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

     </>
    )

}

export default GenaricForm;