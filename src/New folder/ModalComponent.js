import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { Edit, XCircle, Map, Calendar ,AlignJustify} from 'react-feather'

class ModalComponent extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
        console.log("دوست اهو")
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const { visible } = this.state;
        return (
            <>
                <Button type="primary" onClick={this.showModal}>
                    <AlignJustify/>
        </Button>
                {visible && (<Modal
                    width="95%"
                    title=""
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {this.props.children}
                </Modal>)}
            </>
        );
    }
}

export default ModalComponent