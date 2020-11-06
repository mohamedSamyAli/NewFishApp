import React, { Component } from 'react';
import { Table, Space, Form, Button, Modal } from 'antd';
import { baseURl } from '../../../../URLS';
import { Plus } from 'react-feather';
import ButtonComponent from '../../../main/button'
import '../../../main/model/model.css';
import '../../../main/table/table.css';
import '../../../main/table/Form.css';
import '../../../main/table/inputField.css'
import '../../../../FormDescription/Com_Form/collapse.css'
import visitTS from "./visitTS"
import VisitF from './VisitF';
var $ = require("jquery");

const axios = require('axios');
let myForm = {}
let TFC = {}
class VisitTable extends Component {
    constructor(props) {
        super(props);
        this.update = false;
        this.state = {
              loading: false,
            data: [],
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
            initialValues: {}
        }
    }
    componentWillMount() {
        // this.schema = {
        //     ...this.props.schema,
        //     columns: [...this.props.schema.columns]
        // }
        // this.schema.columns = this.schema.columns.map(e => {
        //     return {
        //         ...e,
        //         render: e.render ? e.render : text => <div>{text ? text : <p style={{ color: 'red' }}>لايوجد</p>}</div>
        //     }
        // })
        // if (this.props.update || this.schema.del) {
        // } else {
        //     this.schema.columns.push({
        //         title: 'الافعال',
        //         fixed: 'right',
        //         key: "actionss",
        //         render: (text, record) => (
        //             <Space size="middle">
        //                 {this.schema.update ? null : <TableAction type="edit" action={() => { this.onClickUpdate(record[this.schema.id]) }}></TableAction>}
        //                 {this.schema.del ? null : <TableAction type="delete" action={() => { this.onClickDelete(record[this.schema.id]) }}></TableAction>}
        //             </Space>
        //         ),
        //     }
        //     )
        // }
    }
    onClickDelete(id) {

        // axios.delete(baseURl + this.props.schema.endPoint + "/" + id).then(e => {
        //     alert("تم المسح")
        //     this.fetchData()
        // }).catch(e => {
        //     alert("لم يتم المسح")
        // })
    }
    onClickUpdate(id) {
        // this.updateId = id;
        // axios.get(baseURl + this.props.schema.endPoint + "/" + id)
        //     .then((response) => {
        //         console.log(response.data)
        //         console.log(this.props.schema.sendParser ? this.props.schema.sendParser(response.data) : response.data)
        //         this.setState({ initialValues: this.props.schema.sendParser ? this.props.schema.sendParser(response.data) : response.data })
        //         this.showModal();
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    }
    onClickAdd = () => {
        this.setState({ initialValues: {} })
        this.showModal()
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        myForm.submit()
    };

    onFinish = (e) => {
        
        axios.post(baseURl + "getfarmvisits/addfarm", e, {
            headers: {
                'Content-Type': 'application/json',

            }
        }).then(r => {
            this.fetchData(this.state.pagination.currentPage)
            console.log(r) 
        
        }).catch(r => { console.log(r) })
        console.log(e)
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    fetchData = () => {
        
        axios.get(baseURl+"BoatVisitData/GrtBoatDataById/"+this.props.id)
            .then((response) => {
                console.log(response)
                this.setState(
                    { 
                    data:response.data.map(e=>{return {...e,key:e.id}}),
                    }
                )
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidMount() {
        this.fetchData();
console.log(this.props)
        //this.setState({data:this.props.initdata.})

    }
    onFormChange = (e) => {
        try {
            TFC.Triger(myForm)

        } catch (error) {

        }
    }

    render() {
        const { visible, confirmLoading } = this.state;
        return (
            // <div className="main__wrapper">
            //  <div className="content__wrapper">
            <div>
                <div>
            <div>
                <div className="table__Actions">
                    <ButtonComponent action={this.onClickAdd} bgcolor="primary" txcolor="white" type="primary">
                        <div className="center__item" >
                            <Plus />
                                    أضافة
                                </div>
                    </ButtonComponent>
                </div>
                <Table
                    columns={visitTS}
                    dataSource={this.state.data}
                    scroll={{ x: 'max-content', y: 250 }} />
                    {visible && (

<Modal
    // width="95%"
    title="أضافة زياره"
    visible={visible}
    onOk={this.handleOk}
    confirmLoading={confirmLoading}
    onCancel={this.handleCancel}
>
    <Form
        ref={el => { myForm = el }}
        onFieldsChange={this.onFormChange}
        name="validate_other"
        onFinish={this.onFinish}
        initialValues={this.state.initialValues}
    >
<VisitF/>

    </Form>
</Modal>)}

                
            </div>
            </div>
            </div>
        );
    }
}

export default VisitTable;
