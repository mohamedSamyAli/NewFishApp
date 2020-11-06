import React from 'react'
import { Input,Form } from 'antd'
const { Item } = Form


export default function HMTable() {
    return (
        <table class="customtable" width="700" border="1" align="right">
            <tr name="row0">
                <th scope="col"><label style={{ fontSize: "18px", fontWeight: " bolder" }}>العناصر الثقيلة</label></th>
                <th scope="col"><label style={{ fontSize: "18px", fontWeight: " bolder" }}>فى المياه (مللى جرام/لتر)</label></th>
                <th scope="col"><label style={{ fontSize: "18px", fontWeight: " bolder" }}>فى الرسوبيات (مللى جرام/لتر)</label></th>
            </tr>
            <tr name="row1">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الحديد</label></td>
                <td align="right">
                    <Item
                    name="LSM_WATER1" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="50" />
                            </Item>

        </td>
                <td align="right">
                    <Item>
                    <Input type="text" id="LSM_SEDIEMT1" name="LSM_SEDIEMT1" dir="rtl" tabindex="51" />
                    </Item>
                    </td>
            </tr>
            <tr name="row2">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>المنجنيز</label></td>
                <td align="right">
                    <Item
                    name="LSM_WATER2" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="52" />
                    </Item>
                    </td>
                <td align="right">
                    <Item>
                    <Input type="number" id="LSM_SEDIEMT2" name="LSM_SEDIEMT2" dir="rtl" tabindex="53" />
                    </Item>
                    </td>
            </tr>
            <tr name="row3">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الزنك</label></td>
                <td align="right">
                    <Item
                    name="LSM_WATER3" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="54" />
                    </Item>
                    </td>
                <td align="right">
                    <Item>
                    <Input type="text" id="LSM_SEDIEMT3" name="LSM_SEDIEMT3" dir="rtl" tabindex="55" />
                    </Item>
                    </td>
            </tr>
            <tr name="row4">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>النحاس</label></td>
                <td align="right">
                    <Item
                    name="LSM_WATER4" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="56" />
                    </Item>
                    </td>
                <td align="right">
                    <Item>
                    <Input type="text" id="LSM_SEDIEMT4" name="LSM_SEDIEMT4" dir="rtl" tabindex="57" />
                    </Item>
                    </td>
            </tr>
            <tr name="row5">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>النيكل</label></td>
                <td align="right">
                    <Item
                    name="LSM_WATER5" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="58" />
                    </Item>
                    </td>
                <td align="right">
                    <Item>
                    <Input type="text" id="LSM_SEDIEMT5" name="LSM_SEDIEMT5" dir="rtl" tabindex="59" />
                    </Item>
                    </td>
            </tr>
            <tr name="row5">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الكوبالت</label></td>
                <td align="right">
                    <Item
                    name="LSM_WATER6" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="60" />
                    </Item>
                    </td>
                <td align="right">
                    <Item>
                    <Input type="text" id="LSM_SEDIEMT6" name="LSM_SEDIEMT6" dir="rtl" tabindex="61" />
                    </Item>
                    </td>
            </tr>
            <tr name="row5">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الرصاص</label></td>
                <td align="right">
                    <Item
                    name="LSM_WATER7" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="62" />
                    </Item>
                    </td>
                <td align="right">
                    <Item>
                    <Input type="text" id="LSM_SEDIEMT7" name="LSM_SEDIEMT7" dir="rtl" tabindex="63" />
                    </Item>
                    </td>
            </tr>
            <tr name="row5">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الكادميوم</label></td>
                <td align="right">
                    <Item
                    name="LSM_WATER8" 
                    >
                    <Input type="text" 
                    dir="rtl" tabindex="65" />
                    </Item>
                    </td>
                <td align="right">
                    <Item>
                    <Input type="text" id="LSM_SEDIEMT8" name="LSM_SEDIEMT8" dir="rtl" tabindex="66" />
                    </Item>
                    </td>
            </tr>
            <tr name="row5">
                <td align="right"><label style={{ fontSize: "14px", fontWeight: " bolder" }}>الألومنيوم</label></td>
                <td align="right">
                    <Item>
                    <Input type="text" id="LSM_WATER9" name="LSM_WATER9" dir="rtl" tabindex="67" />
                    </Item>
                    </td>
                <td align="right">
                    <Item>
                    <Input type="text" id="LSM_SEDIEMT9" name="LSM_SEDIEMT9" dir="rtl" tabindex="68" />
                    </Item>
                    </td>
            </tr>
        </table>
    )
}
