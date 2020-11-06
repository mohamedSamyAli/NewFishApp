import { Button, Divider, Input, Form } from 'antd';
import React, { Component } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { getManytextFields_FormItem } from '../../../../../FormDescription/helpers';
const { Item } = Form
export default class VisitCoor extends Component {
    render() {
        return (
            <div>
                <Divider />
                <h4 className="form__sectionDivider-text">
                    نقطة داخل المزرعة
                </h4>
                <Divider />
                <Item
                    name={["farmVisit","lat"]}
                    label="Latitude"
                    normalize={(v) => parseFloat(v)}
                >
                    <Input type="number"></Input>
                </Item>
                <Item
                    name={["farmVisit","lng"]}
                    label="Longitude"
                    normalize={(v) => parseFloat(v)}
                >
                    <Input type="number"></Input>
                </Item>
                <Item
                    name={["farmVisit","elev"]}
                    label="ارتفاع منسوب الارض(متر) Elevation"
                    normalize={(v) => parseFloat(v)}
                >
                    <Input type="number"></Input>
                </Item>
                <div className="form__sectionDivider">

                    <Divider />
                    <h4 className="form__sectionDivider-text">
                        احداثيات المكان
                        </h4>
                    <Divider />

                    <Form.List label="احداثيات المكان" name="farmCoordinates">
                        {(fields, dn) => {
                            if (fields.length === 0) {
                                dn.add()
                                fields.push({ name: 0, key: 0, isListField: true, fieldKey: 0 })
                            }
                            return (
                                <div>
                                    <table class="customtable" id="dataTable" name="dataTable" width="fit-content" border="1">
                                        <tr>
                                            <td align="center" bgcolor="#c6c4c4" ><label style={{ fontSize: "14px", fontWeight: "bold" }}>Latitude</label></td>
                                            <td align="center" bgcolor="#c6c4c4"><label style={{ fontSize: "14px", fontWeight: "bold" }}>Longitude</label></td>
                                            <td align="center" bgcolor="#c6c4c4"><label style={{ fontSize: "14px", fontWeight: "bold" }}>أرتفاع منسوب الارض ( متر ) Elevation</label></td>
                                        </tr>
                                        {fields.map((field, i) => (
                                            <tr>
                                                <td align="center">
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'lat']}
                                                        fieldKey={[field.fieldKey, 'lat']}
                                                        normalize={(v) => parseFloat(v)}
                                                    >
                                                        <Input type="number"></Input>
                                                    </Form.Item>
                                                </td>
                                                <td align="center">
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'lng']}
                                                        fieldKey={[field.fieldKey, 'lng']}
                                                        normalize={(v) => parseFloat(v)}
                                                    >
                                                        <Input type="number"></Input>
                                                    </Form.Item>
                                                </td>
                                                <td align="center">
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'elev']}
                                                        fieldKey={[field.fieldKey, 'elev']}
                                                        normalize={(v) => parseFloat(v)}
                                                    >
                                                        <Input type="number"></Input>
                                                    </Form.Item>
                                                </td>
                                                <td className="Htable">
                                                    {
                                                        i > 0 ? <MinusCircleOutlined style={{ marginRight: "10px" }}
                                                            onClick={() => {
                                                                dn.remove(field.name);
                                                            }}
                                                        /> : null
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </table>
                                    <Form.Item>
                                        <Button
                                            type="dashed"
                                            onClick={() => {
                                                dn.add();
                                            }}
                                            block
                                        >
                                            <PlusOutlined /> إضافة صف
                                        </Button>
                                    </Form.Item>
                                </div>
                            );
                        }}
                    </Form.List>
                </div>
            </div>
        )
    }
}
