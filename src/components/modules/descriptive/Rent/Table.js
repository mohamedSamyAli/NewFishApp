import React, { Component } from 'react';
import { Table, Space, Form, Button, Modal } from 'antd';
import { baseURl } from '../../../../URLS';
import { Plus } from 'react-feather';
import ButtonComponent from '../../../main/button'
import TableAction from '../../../main/table/tableActions';
import ModelComponent from '../../../main/model';
import { createBrowserHistory } from 'history';
import farmTS from "./ContractTS.js"
import FarmF from './RentForm.js';
import { mapDispatchToProps, mapStateToProps } from "../../../../../src/components/reduxMaping"
import moment from 'moment'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//var $ = require("jquery");
const axios = require('axios');
const history = createBrowserHistory()
let myForm = {}
let TFC = {}
let FormValue = {}
const Calculation_table = [
    {
        title: 'التاريخ',
        dataIndex: "date",
        key: 'date',
        render: value => <p> {value.split("T")[0]}</p>,
        width: '100px',

    },
    {
        title: 'الايجار المستحق',
        dataIndex: "rentDebit",
        key: 'rentDebit',
        render: value => <p> {value.toFixed(2)}</p>
    },
    {
        title: "المدفوع فى حساب الايجار",
        dataIndex: "rentCredit",
        key: 'rentCredit',
        render: value => <p> {value.toFixed(2)}</p>


    },
    {
        title: 'نسبة الفائده',
        dataIndex: "interestRate",
        key: 'interestRate',
        render: value => <p> {value.toFixed(2)}</p>

    },
    {
        title: 'الغرامه المستحقه',
        dataIndex: "penaltyDebit",
        key: 'penaltyDebit',
        render: value => <p> {value.toFixed(2)}</p>

    },
    {
        title: 'المدفوع فى حساب الغرامه',
        dataIndex: "penaltyCredit",
        key: 'PenaltyCredit',
        render: value => <p> {value.toFixed(2)}</p>

    },
    {
        title: 'رصيد الايجار',
        dataIndex: "rentBalance",
        key: 'RentBalance',
        render: value => <p> {value.toFixed(2)}</p>

    },
    {
        title: 'رصيد الغرامه',
        dataIndex: "penaltyBalance",
        key: 'PenaltyBalance',
        render: value => <p> {value.toFixed(2)}</p>
    },
    {
        title: 'الرصيد الكلى',
        dataIndex: "balance",
        key: 'Balance',
        render: value => <p> {value.toFixed(2)}</p>
    },
    {
        title: 'الاموال المدفوعه',
        dataIndex: "totalCredit",
        key: 'TotalCredit',
        render: value => <p> {value.toFixed(2)}</p>
    },
    {
        title: 'نوع المعامله',
        dataIndex: "paymentType",
        key: 'PaymentType',
    },
]
class FarmTable extends Component {
    constructor(props) {
        super(props);
        this.update = false;
        this.state = {
            pagination: {
                current: 1,
                pageSize: 10,
            },
            isadd: true,
            loading: false,
            data: [],
            Calculation_data: [],
            ModalText: 'Content of the modal',
            visible: false,
            visible_Calculation: false,
            confirmLoading: false,
            initialValues: {}
        }
    }
    componentWillMount() {
        // this.schema = {
        //     ...this.props.schema,
        //     columns: [...this.props.schema.columns]
        // }
        this.FarmTS = farmTS

        this.FarmTS = this.FarmTS.map(e => {
            return {
                ...e,
                render: e.render ? e.render : text => <div>{text ? text : <p style={{ color: 'red' }}>لايوجد</p>}</div>
            }
        })
        this.FarmTS.push({
            title: 'الافعال',
            fixed: 'right',
            key: "actionss",
            render: (text, record) => (
                <Space size="middle">
                    <TableAction key="1fdf" type="edit" action={() => { this.onClickUpdate(record.rentContract.id) }}></TableAction>
                    <TableAction key="1d" type="delete" action={() => { this.onClickDelete(record.rentContract.id) }}></TableAction>
                    <TableAction key="1d" type="viewRecords" action={() => { this.onClickPayment(record.rentContract.id) }}></TableAction>
                </Space>
            ),
        }
        )

    }
    onClickDelete(id) {
        axios.delete(baseURl + "RentContract/" + id).then(e => {
            alert("تم المسح")
            this.fetchData()
        }).catch(e => {
            alert("لم يتم المسح")
        })
    }
    onClickPayment(id) {
        axios.get(baseURl + "RentContract/GetRentYearPayedValuesById/" + id)
            .then((response) => {
                console.log(response)
                this.setState(
                    {
                        Calculation_data: response.data,
                        visible_Calculation: true

                    }
                )
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    Refresh_Calculation = () => {
        let body =  {
         initialValue :FormValue.rentContract.initialValue,
         totalValue :FormValue.rentContract.totalValue,
         annualIncrease :FormValue.rentContract.annualIncrease,
         startDate :FormValue.rentContract.startDate,
         endDate :FormValue.rentContract.endDate,
         valueIncreaseTypeId : FormValue.rentContract.valueIncreaseTypeId,
         rentContractPayments:FormValue.rentContractPayments,
        }
debugger
        axios.put(baseURl + "RentContract/" + "GetRentYearPayedValues",
         body, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(r => {
            console.log(r.data)
            myForm.setFieldsValue({ rentContract: { 
                delayPenalty : r.data[r.data.length-1].penaltyBalance,
                totalIssued : r.data[r.data.length-1].balance
             } })
        }).catch(r => { console.log(r) })

    }
    onClickUpdate(id) {
        this.props.history.push('/descriptive/RentForm/edit?id='+id)

        // this.props.Calculate.Refresh = this.Refresh_Calculation
        // this.setState({ isadd: false })

        // this.props.updateModel.isUpdate = true;
        // this.updateId = id;
        // axios.get(baseURl + "RentContract/" + id)
        //     .then((response) => {
        //         console.log(response.data)
        //         //console.log(this.props.schema.sendParser ? this.props.schema.sendParser(response.data) : response.data)
        //         let { data } = response
        //         let { updateData } = this.props.updateModel
        //         debugger
        //         console.log(data)
        //         data.rentContract.endDate = data.rentContract.endDate ? moment(data.rentContract.endDate) : null
        //         data.rentContract.insurancePaymentDate = data.rentContract.insurancePaymentDate ? moment(data.rentContract.insurancePaymentDate) : null
        //         data.rentContract.startDate = data.rentContract.startDate ? moment(data.rentContract.startDate) : null
        //         data.rentContract.blockDate = data.rentContract.blockDate ? moment(data.rentContract.blockDate) : null
        //         data.rentContractPayments = data.rentContractPayments.map(e => { return { ...e, paymentDate: moment(e.paymentDate ? e.paymentDate : null) } })
        //         data.rentContractDecisions = data.rentContractDecisions.map(e => { return { ...e, decisionDate: e.decisionDate ? moment(e.decisionDate) : null, cancleDate: e.cancleDate ? moment(e.cancleDate) : null } })

        //         updateData.Association = data.rentContract.associationID
        //         updateData.CompanyType = data.rentContract.companyTypeId
        //         updateData.RenterType = data.rentContract.renterTypeId
        //         updateData.PartType = data.rentContract.partTypeId
        //         updateData.gov = data.rentContract.governorateId
        //         updateData.FarmGov = data.rentContract.partCode
        //         updateData.InsurancePaymentType = data.rentContract.insurancePaymentTypeId
        //         updateData.ValueIncreaseType = data.rentContract.valueIncreaseTypeId
        //         updateData.BlockType = data.rentContract.BlockTypeId


        //         this.showModal();
        //         //this.setState({ initialValues: response.data })
        //         myForm.setFieldsValue({ ...response.data })
        //         myForm.setFieldsValue({ rentContract: { nID: data.rentContract.nid } })
        //         console.log(moment)

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    }
    onClickAdd = () => {
        this.props.Calculate.Refresh = this.Refresh_Calculation
        this.props.updateModel.updateData = {}
        this.props.updateModel.isUpdate = false
        this.setState({ isadd: true })
        this.setState({ initialValues: {} })
        this.props.history.push('/descriptive/RentForm/add')
        //this.showModal()
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
        console.log(e)
        debugger
        delete e.markaz;

        if (this.props.updateModel.isUpdate) {
            e.rentContract.id = this.updateId;
            axios.put(baseURl + "RentContract/" + "EditRentContractWithDetails", e, {
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
        } else {
            axios.post(baseURl + "RentContract/" + "AddRentContractWithDetails", e, {
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
        }
        console.log(e)
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel_Calculation = () => {
        this.setState({
            visible_Calculation: false,
        });
    }
    fetchData = (currentPage = 1, pageSize = 10) => {
        axios.get(baseURl + "RentContract/" + currentPage + "/" + pageSize)
            .then((response) => {
                console.log(response)
                this.setState(
                    {
                        data: response.data.dataList.map(e => { return { ...e, key: e.rentContract.id } }),
                        pagination: {
                            ...response.data.queryOptions,
                            total: response.data.queryOptions.totalRowsCount
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
    onFormChange = (e, f) => {
        FormValue = f;
        if (e.rentContract && (e.rentContract.governorateId || e.rentContract.partTypeId) && f.rentContract.governorateId && f.rentContract.partTypeId && f.rentContract.partTypeId < 6) {
            this.props.GovPartTypeEvents.FarmCode(f.rentContract.governorateId + "/" + f.rentContract.partTypeId)
        }
        if (e.rentContract) {
            if (e.rentContract.partTypeId || e.rentContract.governorateId) {
                myForm.setFieldsValue({
                    rentContract: {
                        totalAreaF: 0,
                        totalAreaQ: 0,
                        totalAreaS: 0
                    },
                    rentContractCoordinates: []
                })

            }
            if (e.rentContract.partCode) {
                if ([1, 2, 3, 4, 5, 6].includes(f.rentContract.partTypeId)) {
                    axios.get(baseURl + "FarmVisit/GetLastVisitByFarmId/" + e.rentContract.partCode).then(data => {
                        console.log(data)
                        myForm.setFieldsValue({
                            rentContract: {
                                totalAreaF: data.data.farm.lastVisit.areaF,
                                totalAreaQ: data.data.farm.lastVisit.areaQ,
                                totalAreaS: data.data.farm.lastVisit.areaS
                            },
                            rentContractCoordinates: data.data.farmCoordinates.map(({ lat, lng }) => { return { lat, lng } })
                        })
                    })
                }
            }
        }

    }

    onTableChange = (padgination) => {
        this.fetchData(padgination.current)
        console.log(padgination)
    }

    render() {
        const { visible, confirmLoading, initialValues, isadd, visible_Calculation } = this.state;
        return (
            <div className="main__wrapper">
                <h3 className="main__heading">
                    إستمارة العقود
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
                            columns={this.FarmTS}
                            dataSource={this.state.data}
                            // expandable={(record)=> <VisitTable initData={record}/> }
                            pagination={this.state.pagination}
                            onChange={this.onTableChange}
                            scroll={{ x: 'max-content', y: 250 }} />
                        {visible && (

                            <Modal
                                // width="95%"
                                title={isadd ? "اضافة عقد تاجير جديده" : "تعديل عقد تاجير "}
                                visible={visible}
                                onOk={this.handleOk}
                                confirmLoading={confirmLoading}
                                onCancel={this.handleCancel}
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}>
                                        الغاء
                                    </Button>,
                                    <Button key="submit" onClick={this.handleOk}>
                                        {isadd ? "اضافة" : "تعديل"}</Button>,
                                ]}
                            >
                                <Form
                                    ref={el => { myForm = el }}
                                    onValuesChange={this.onFormChange}
                                    onFinish={this.onFinish}
                                    initialValues={initialValues}
                                >
                                    <FarmF />

                                </Form>
                            </Modal>)}
                        {visible_Calculation && (
                            <Modal
                                width="95%"
                                title="الحسابات الماليه للتأجير"
                                visible={visible_Calculation}
                                onOk={this.handleCancel_Calculation}
                                onCancel={this.handleCancel_Calculation}
                            >
                                <Table
                                    columns={Calculation_table}
                                    dataSource={this.state.Calculation_data}
                                />
                            </Modal>)}

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FarmTable));
