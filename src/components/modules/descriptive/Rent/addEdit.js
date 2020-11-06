import React, { Component, useState } from 'react';
import SectionSteps from '../../../main/steps';
import CollapseSections from '../../../main/collapse';
import DoubleCellForm from '../../../main/Form/DoubleCell';
import TableInput from '../../../main/inputField/table';
import ButtonComponent from '../../../main/button';
import { Save } from 'react-feather';
import {Form} from 'antd';
import { mapDispatchToProps, mapStateToProps } from "../../../../../src/components/reduxMaping"
import {baseURl} from "../../../../URLS"
import moment from 'moment'
import { connect } from 'react-redux';
import RentForm from './RentForm';
import { withRouter } from 'react-router';
import '../../../main/Form/Form.css';
import '../../../main/collapse/collapse.css';


const axios = require('axios');
let myForm = {}
let TFC = {}
let FormValue = {}

class LakesAddForm extends Component {
    
    constructor(props) {
        super(props);
        this.update = false;
        this.state = {
            initialValues: {}
        }
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
        console.log(this.props)
        this.props.Calculate.Refresh = this.Refresh_Calculation
        this.setState({ isadd: false })
        this.props.updateModel.isUpdate = true;
        this.updateId = id;
        axios.get(baseURl + "RentContract/" + id)
            .then((response) => {
                console.log(response.data)
                //console.log(this.props.schema.sendParser ? this.props.schema.sendParser(response.data) : response.data)
                let { data } = response
                let { updateData } = this.props.updateModel
                debugger
                console.log(data)
                data.rentContract.endDate = data.rentContract.endDate ? moment(data.rentContract.endDate) : null
                data.rentContract.insurancePaymentDate = data.rentContract.insurancePaymentDate ? moment(data.rentContract.insurancePaymentDate) : null
                data.rentContract.startDate = data.rentContract.startDate ? moment(data.rentContract.startDate) : null
                data.rentContract.blockDate = data.rentContract.blockDate ? moment(data.rentContract.blockDate) : null
                data.rentContractPayments = data.rentContractPayments.map(e => { return { ...e, paymentDate: moment(e.paymentDate ? e.paymentDate : null) } })
                data.rentContractDecisions = data.rentContractDecisions.map(e => { return { ...e, decisionDate: e.decisionDate ? moment(e.decisionDate) : null, cancleDate: e.cancleDate ? moment(e.cancleDate) : null } })

                updateData.Association = data.rentContract.associationID
                updateData.CompanyType = data.rentContract.companyTypeId
                updateData.RenterType = data.rentContract.renterTypeId
                updateData.PartType = data.rentContract.partTypeId
                updateData.gov = data.rentContract.governorateId
                updateData.FarmGov = data.rentContract.partCode
                updateData.InsurancePaymentType = data.rentContract.insurancePaymentTypeId
                updateData.ValueIncreaseType = data.rentContract.valueIncreaseTypeId
                updateData.BlockType = data.rentContract.BlockTypeId


                //this.setState({ initialValues: response.data })
                myForm.setFieldsValue({ ...response.data })
                myForm.setFieldsValue({ rentContract: { nID: data.rentContract.nid } })
                console.log(moment)

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount(){
        if(this.props.isUpdate){
            let query = new URLSearchParams(this.props.location.search)
            query.get("id")
            this.onClickUpdate(parseInt(query.get("id")))
        }
    }
    handleOk = () => {
        myForm.submit()
    };
    onFinish = (e) => {
        console.log(e)
        debugger
        delete e.markaz;

        if (this.props.isUpdate) {
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
    render() {
        const { initialValues } = this.state;

    return (
        <>
            <div className="main__wrapper">
                <h3 className="main__heading">
                    اضافة عقد ايجار جديد:
            </h3>
                <div className="content__wrapper">
                    <div className="LongForm__layout-divider">
                        <div className="sectionsForm__wrapper">
                        <div className="collapsable__Sections">
                            
                        <div className="doubleCellForm__wrapper">

                        <Form
                        className="form_container"
                                     ref={el => { myForm = el }}
                                     onValuesChange={this.onFormChange}
                                     onFinish={this.onFinish}
                                     initialValues={initialValues}
                                >
                                    <RentForm/>
                                </Form>
                        </div>
                        </div>
                    </div>
                </div>
                    <ButtonComponent bgcolor="primary" txcolor="white" type="primary" action={this.handleOk}>
                        <div className="center__item" >
                            <Save />
                                 حفظ
                         </div>
                    </ButtonComponent>
            </div>
            </div>
        </>
    );
}
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LakesAddForm));




