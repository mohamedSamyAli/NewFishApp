import React, { Component, useState } from 'react'
import { } from 'module'
import { Form, Input, Collapse, Upload, Button, DatePicker, Select, Divider } from 'antd'
const { Option } = Select;
const { Item } = Form

export default function LandBorder() {
    return (
        <table class="customtable" width="700" border="1" align="right">
            <tr>
                <th scope="col"><label style={{ fontSize: "18px", fontWeight: "bolder" }}>الحدود</label></th>
                <th scope="col"><label style={{ fontSize: "18px", fontWeight: "bolder" }}>الطول (بالمتر)</label></th>
                <th scope="col"><label style={{ fontSize: "18px", fontWeight: "bolder" }}>الجار</label></th>
            </tr>
            <tr name="row1">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الشمال </label></td>
                <td>
                    <Item
                        //rules={[{ required: true, message: 'يجب الادخال' }]}

                        name={["rentContract", "northLength"]}
                        normalize={(v) => parseFloat(v)}
                    >
                        <Input type="number"></Input>
                    </Item>

                </td>
                <td align="right">
                    <Item
                        //rules={[{ required: true, message: 'يجب الادخال' }]}

                        name={["rentContract", "northNeighbour"]}>
                        <Input.TextArea />
                    </Item>
                </td>
            </tr>
            <tr name="row2">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الجنوب</label></td>
                <td align="right">
                    <Item
                        //rules={[{ required: true, message: 'يجب الادخال' }]}

                        name={["rentContract", "southLength"]}
                        normalize={(v) => parseFloat(v)}
                    >
                        <Input type="number"></Input>
                    </Item>
                </td>
                <td align="right">
                    <Item
                        //rules={[{ required: true, message: 'يجب الادخال' }]}
                        name={["rentContract", "southNeighbour"]}>
                        <Input.TextArea />
                    </Item>
                </td>
            </tr>
            <tr name="row3">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الشرق</label></td>
                <td align="right">
                    <Item
                        //rules={[{ required: true, message: 'يجب الادخال' }]}

                        name={["rentContract", "eastLength"]}
                        normalize={(v) => parseFloat(v)}
                    >
                        <Input type="number"></Input>
                    </Item>
                </td>
                <td align="right">
                    <Item
                        //rules={[{ required: true, message: 'يجب الادخال' }]}
                        name={["rentContract", "eastNeighbour"]}>
                        <Input.TextArea />
                    </Item>
                </td>
            </tr>
            <tr name="row4">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الغرب</label></td>
                <td align="right">
                    <Item
                        //rules={[{ required: true, message: 'يجب الادخال' }]}

                        name={["rentContract", "westLength"]}
                        normalize={(v) => parseFloat(v)}
                    >
                        <Input type="number"></Input>
                    </Item>
                </td>
                <td align="right">
                    <Item
                        //rules={[{ required: true, message: 'يجب الادخال' }]}
                        name={["rentContract", "westNeighbour"]}>
                        <Input.TextArea />
                    </Item>
                </td>
            </tr>

        </table>
    )
}
