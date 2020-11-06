import React, { Component } from 'react';
import { Table, Space, Form, Button, Modal } from 'antd';
import { baseURl } from '../../../../URLS';
import { Plus } from 'react-feather';
import ButtonComponent from '../../../main/button'
import TableAction from '../../../main/table/tableActions';
// import '../../../main/model/model.css';
import '../../../main/table/table.css';
// import '../../../main/Form/Form.css';
import '../../../main/inputField/inputField.css'
import '../../../main/collapse/collapse.css'
import farmTS from "./farmTS.js"
import FarmF from './FarmF.js';
import VisitTable from './VisitTable.js'
import { mapDispatchToProps, mapStateToProps } from "./FarmComponent/reduxMaping"
import { connect } from 'react-redux';
import ModelComponent from '../../../main/model';
let FarmTS =farmTS
const axios = require('axios');
let myForm = {}
let TFC = {}
class FarmTable extends Component {
    constructor(props) {
        super(props);
        this.update = false;
        this.state = {
            pagination: {
                current: 1,
                pageSize: 10,
              },
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
        
        FarmTS = FarmTS.map(e => {
            return {
                ...e,
                render: e.render ? e.render : text => <div>{text ? text : <p style={{ color: 'red' }}>لايوجد</p>}</div>
            }
        })
        


        FarmTS.push({
                title: 'الافعال',
                fixed: 'right',
                key: "actionss",
                render: (text, record) => (
                    <Space size="middle">
                        <TableAction key="1fdf" type="edit" action={() => { this.onClickUpdate(record.id) }}></TableAction>
                        <TableAction key="1d" type="delete" action={() => { this.onClickDelete(record.id) }}></TableAction>
                    </Space>
                ),
            }
            )
        
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
        
        delete e.markaz;
        axios.post(baseURl + "Farm/AddFarm", e, {
            headers: {
                'Content-Type': 'application/json',

            }
        }).then(r => {
            this.fetchData(this.state.pagination.currentPage)
            this.setState({
                visible: false,
            });
            console.log(r) 
        
        }).catch(r => { console.log(r) })
        console.log(e)
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    fetchData = (currentPage=1,pageSize=10) => {
        const params = {}
        params.id = 1
        const Queryparams = new URLSearchParams(params).toString();
        axios.get(baseURl+"Farm/"+currentPage+"/"+pageSize+"?"+Queryparams)
            .then((response) => {
                console.log(response)
                this.setState(
                    { 
                    data:response.data.dataList.map(e=>{return {...e,key:e.farm.id}}),
                    pagination:{
                       ...response.data.queryOptions,
                        total:response.data.queryOptions.totalRowsCount
                    }
                    }
                )
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidMount() {
        this.fetchData()
    }
    onFormChange = (e,f) => {
        if((e.governorateId||e.farmTypeId)&&f.governorateId&&f.farmTypeId){
            this.props.GovPartTypeEvents.FarmCode(f.governorateId+"/"+f.farmTypeId)
        }
    }

    onTableChange = (padgination)=>{
        this.fetchData(padgination.current)
        console.log(padgination)
    }

    render() {
        const { visible, confirmLoading } = this.state;
        return (
            <div className="main__wrapper">
             <h3 className="main__heading">
             إستمارة المزارع  
             </h3>
             <div className="content__wrapper">
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
                    columns={farmTS}
                    dataSource={this.state.data}
                   // expandable={(record)=> <VisitTable initData={record}/> }
                   expandable={{
                    expandedRowRender: record =>{ 
                        console.log(record)
                        return <VisitTable  key={record.farm.id}  initData={record}/>}
                  }}
                    pagination={this.state.pagination}
                    onChange = {this.onTableChange}
                    scroll={{ x: 'max-content', y: 250 }} />
                    {visible && (
    <Modal
    // width="95%"
    title="اضافة مزرعه جديده"
    visible={visible}
    onOk={this.handleOk}
    confirmLoading={confirmLoading}
    onCancel={this.handleCancel}
>
    <Form
        ref={el => { myForm = el }}
        onValuesChange={this.onFormChange}
        name="validate_other"
        onFinish={this.onFinish}
        initialValues={this.state.initialValues}
    >
<FarmF/>
    </Form>
</Modal>


)
}       
            </div>
            </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FarmTable);

/* <ModelComponent 
title={"إضافة وظيفة جديد"} 
visible={visible}    
handleOk={this.handleOk}
hideModal={() => this.handleCancel()}>
<div className="editForm__container">
    <Form
        className="form_container"
        ref={el => { myForm = el }}
        onValuesChange={this.onFormChange}
        name="validate_other"
        onFinish={this.onFinish}
        initialValues={this.state.initialValues}
    >
        <FarmF />
    </Form>
</div>

</ModelComponent> */