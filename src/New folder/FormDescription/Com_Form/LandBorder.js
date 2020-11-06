import React, { Component, useState } from 'react'
import {  } from 'module'
import { Form, Input, Collapse, Upload, Button, DatePicker, Select, Divider } from 'antd'
const { Panel } = Collapse;
const { Option } = Select;
const { Item } = Form

export default function LandBorder() {
    return (
        <table class="customtable" width="700" border="1" align="right">
            
            <tr name="row0">
                <th scope="col"><label style={{fontSize:"18px",fontWeight:"bolder"}}>الحدود</label></th>
                <th scope="col"><label style={{fontSize:"18px",fontWeight:"bolder"}}>الجار</label></th>
                <th scope="col"><label style={{fontSize:"18px",fontWeight:"bolder"}}>الطول (بالمتر)</label></th>
            </tr>
            <tr name="row1">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الشمال </label></td>
                <td align="right">
                    <Item
                    name="northL" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="50" />
                            </Item>

        </td>
                <td align="right">
                    <Item name="northN">
                    <Input type="text" id="LSM_SEDIEMT1" name="LSM_SEDIEMT1" dir="rtl" tabindex="51" />
                    </Item>
                    </td>
            </tr>
            <tr name="row2">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الجنوب</label></td>
                <td align="right">
                    <Item
                    name="southL" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="52" />
                    </Item>
                    </td>
                <td align="right">
                    <Item name="southN">
                    <Input type="number" id="LSM_SEDIEMT2" name="LSM_SEDIEMT2" dir="rtl" tabindex="53" />
                    </Item>
                    </td>
            </tr>
            <tr name="row3">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الشرق</label></td>
                <td align="right">
                    <Item
                    name="eastL" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="54" />
                    </Item>
                    </td>
                <td align="right">
                    <Item name="eastN">
                    <Input type="text" id="LSM_SEDIEMT3" name="LSM_SEDIEMT3" dir="rtl" tabindex="55" />
                    </Item>
                    </td>
            </tr>
            <tr name="row4">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الغرب</label></td>
                <td align="right">
                    <Item
                    name="westL" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="56" />
                    </Item>
                    </td>
                <td align="right">
                    <Item name="westN">
                    <Input type="text" id="LSM_SEDIEMT4" name="LSM_SEDIEMT4" dir="rtl" tabindex="57" />
                    </Item>
                    </td>
            </tr>
         
        </table>
    )
}
