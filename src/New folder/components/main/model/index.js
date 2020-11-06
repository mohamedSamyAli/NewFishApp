import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './model.css';

const ModelComponent = (props) => {

    const [ confirmLoading ,setConfirmLoading ] = useState(false);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            props.hideModal();
            setConfirmLoading(false);
        }, 2000);
      };
    
    const handleCancel = () => {
        props.hideModal();
    };

    return ( 
        <>
        <Modal
          title={props.title}
          visible={props.visible}
          onOk={props.onOk}
          confirmLoading={confirmLoading}
          onCancel={()=>props.hideModal()}
          footer={[
            <Button key="back" onClick={props.hideModal}>
              Return
            </Button>,
            <Button key="submit" type="primary" onClick={props.onOk}>
              Submit
            </Button>,
          ]}
        >
          {props.children}
        </Modal>
      </>
     );
}
 
export default ModelComponent;