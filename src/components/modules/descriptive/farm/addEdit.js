import React, { Component } from 'react';

import ButtonComponent from '../../../main/button';
import { Save } from 'react-feather';
import { Form } from 'antd';
import { mapDispatchToProps, mapStateToProps } from "../../../../../src/components/reduxMaping"
import { baseURl } from "../../../../URLS"
import moment from 'moment'
import { connect } from 'react-redux';
import '../../../main/Form/Form.css';
import '../../../main/collapse/collapse.css';
import VisitF from './VisitF';
import { useQuery } from '../../../../UseQuery';
import { withRouter } from 'react-router';



const axios = require('axios');
let myForm = {}
let TFC = {}
let FormValue = {}

class FarmVisitAddForm extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.location)
        this.update = false;
        this.state = {
            initialValues: {}
        }
    }

    onFinish = (e) => {

        let query = new URLSearchParams(this.props.location.search)
        e.farmVisit.farmId = query.get("farmId")
        debugger
        e.farmHeazas = e.farmHeazas.map((ele, i) => { return { ...ele, heazaTypeId: i + 1 } })
        //e.farmFixedCosts = e.farmFixedCosts.map((ele,i)=>{return {...ele , fixedCostId:i+1}})
        axios.post(baseURl + "farmvisit", e, {
            headers: {
                'Content-Type': 'application/json',

            }
        }).then(r => {
            this.props.history.push('/descriptive/Farm')
            console.log(r)

        }).catch(r => { console.log(r) })
        console.log(e)

    }
    onFormChange = (e, f) => {

    }
    handleOk = () => {
        myForm.submit()
    };
    render() {
        const { initialValues } = this.state;

        return (
            <>
                <div className="main__wrapper">
                    <h3 className="main__heading">
                        اضافة عقد زياره مزرعه جديده:
            </h3>
                    <div className="content__wrapper">
                        <div className="LongForm__layout-divider">
                            <div className="sectionsForm__wrapper">
                                <div className="collapsable__Sections">
                                    <Form
                                        className="form_container"
                                        ref={el => { myForm = el }}
                                        // onValuesChange={this.onFormChange}
                                        onFinish={this.onFinish}
                                        initialValues={initialValues}
                                    >
                                        <VisitF />
                                    </Form>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FarmVisitAddForm));




