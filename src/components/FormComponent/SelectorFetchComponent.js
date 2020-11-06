import React, { Component } from 'react';
import schema from './selectorScema.js'
import { baseURl } from '../../URLS'
import { Select, Form } from 'antd';
import { mapDispatchToProps, mapStateToProps } from "../reduxMaping"
import { connect } from 'react-redux';

const { Option } = Select;
const axios = require('axios')

class GovSelectorComponent extends Component {
    state = {
        data: [],
        defValue: ''
    }
    constructor(props) {
        super(props)
        console.log(this.props)
        console.log(schema[this.props.entity])
      
        schema[this.props.entity] = schema[this.props.entity]? schema[this.props.entity]:{endPoint:this.props.entity,
        config:{},
        parser:(data)=>{
            return data.map(e=>{
                return {
                    key:e.id,
                    name:e.name
                }
            })
        } 
    }
    }
    fetchData = (id = "") => {
        
        this.setState({ defValue:undefined})
        if(this.props.updateModel.isUpdate&&this.props.updateModel.updateData[this.props.entity]){
        }
        axios.get(baseURl + schema[this.props.entity].endPoint + id)
            .then((response) => {
                
                let temp = schema[this.props.entity].parser(response.data)
                if (Array.isArray(temp)) {
                    this.setState({ data: temp },()=>{
                        if(this.props.entity === "FarmGov"){
                            debugger
                        }
                        if(this.props.updateModel.updateData[this.props.entity]&&this.props.updateModel.isUpdate){
                            this.ChangeTriger(parseInt(this.props.updateModel.updateData[this.props.entity]))  
                        }

                    })
                } else {
                    // temp = [temp];
                    // this.props.onChange(temp[0].key)
                    this.props.onChange(temp.key)
                    console.log(">>>>>>>>>>>>>>>>>>>>>>", temp.key)
                    this.setState({ data: [temp], defValue: temp.key })
                }
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    ChangeTriger = (e) => {
        this.setState({defValue:e})
        if (this.props.parentE && !this.props.ChildE) {
            Object.getOwnPropertyNames(this.props[this.props.parentE]).map((ele, i) => {
                try {
                    this.props[this.props.parentE][ele](e)
                } catch (error) {
                }
            })
        }
        console.log(e)
        this.props.onChange(e)

    }
    componentDidMount() {
        if (this.props.ChildE) {
            this.props[this.props.parentE][this.props.ChildE] = this.fetchData
        } else {
            this.fetchData()
        }
    }
    componentWillUnmount() {
        if (this.props.ChildE) {
            this.props[this.props.parentE][this.props.ChildE] = null
        }
    }
    render() {
        const { data, defValue } = this.state
        return (
            <Select
                //defaultValue = {defValue}
                {...schema[this.props.entity].config}
                showSearch
                style={{ width: 200 }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                {...this.props}
                onChange={this.ChangeTriger}
                value={defValue}
                //dropdownStyle = {{ position: "fixed" }}
                // getPopupContainer={trigger => { console.log(trigger);  return trigger.parentNode}}
            >
                {
                    data.map(e => <Option key={e.key} value={e.key}>{e.name}</Option>)
                }
            </Select>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GovSelectorComponent);