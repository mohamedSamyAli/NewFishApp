import React, { Component } from 'react';
import { Checkbox, Row, Form } from 'antd';

const CheckboxGroup = Checkbox.Group;

class PremissionComponent extends Component {
  state = {
    checkedList: [],
    indeterminate: false,
    checkAll: false,
  };
  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < this.props.options.length,
      checkAll: checkedList.length === this.props.options.length,
    });

    checkedList.push(checkedList.length === this.props.options.length ? this.props.titleKey : null);
    this.props.onChange(checkedList)
  };
  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? this.props.options.map(e => e.key) : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });

    let listCheckGroup = e.target.checked ? this.props.options.map(e => e.key) : [];
    listCheckGroup.push(e.target.checked ? this.props.titleKey : null)
    this.props.onChange(listCheckGroup)
  }
  render() {
    const {value , titleKey} = this.props
    return (
      <div style={{ display: 'flex' }}>
        <div>
          <div className="site-checkbox-all-wrapper">
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={Array.isArray(value)?value.includes(titleKey):false}
              value={titleKey}
            >
              {this.props.titlename}
            </Checkbox>
            <br />
          </div>
          <CheckboxGroup
            //options={plainOptions}
            value={value}
            onChange={this.onChange}
          >
            {this.props.options.map(e => {
              return (<Row>
                <Checkbox key={e.key} value={e.key}>{e.name}</Checkbox>
              </Row>)
            })}
          </CheckboxGroup>
        </div>
      </div>
    )
  }
}

export default PremissionComponent