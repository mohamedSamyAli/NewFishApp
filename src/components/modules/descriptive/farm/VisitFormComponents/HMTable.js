import React from 'react'
import { Input, Form } from 'antd'
const { Item } = Form


export default function HMTable() {
    return (
        <Form.List name="farmSolidMaterials">
            {
                () => {
                    return (<div>
                        <table class="customtable" border="1">
                            <tr name="row0">
                                <th scope="col"><label >العناصر الثقيلة</label></th>
                                <th scope="col"><label >فى المياه (مللى جرام/لتر)</label></th>
                                <th scope="col"><label >فى الرسوبيات (مللى جرام/لتر)</label></th>
                            </tr>
                            <tr name="row1">
                                <td align="right"><label >الحديد</label></td>
                                <td align="right">
                                <Item
                                    name={[0, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                                <td align="right">
                                <Item
                                    name={[1, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}  
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                            </tr>
                            <tr name="row2">
                                <td align="right"><label >المنجنيز</label></td>
                                <td align="right">
                                <Item
                                    name={[2, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                                <td align="right">
                                <Item
                                    name={[3, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                            </tr>
                            <tr name="row3">
                                <td align="right"><label >الزنك</label></td>
                                <td align="right">
                                <Item
                                    name={[4, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                                <td align="right">
                                <Item
                                    name={[5, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                            </tr>
                            <tr name="row4">
                                <td align="right"><label >النحاس</label></td>
                                <td align="right">
                                <Item
                                    name={[6, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                                <td align="right">
                                <Item
                                    name={[7, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                            </tr>
                            <tr name="row5">
                                <td align="right"><label >النيكل</label></td>
                                <td align="right">
                                <Item
                                    name={[8, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                                <td align="right">
                                <Item
                                    name={[9, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                            </tr>
                            <tr name="row5">
                                <td align="right"><label >الكوبالت</label></td>
                                <td align="right">
                                <Item
                                    name={[10, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                                <td align="right">
                                <Item
                                    name={[11, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                            </tr>
                            <tr name="row5">
                                <td align="right"><label >الرصاص</label></td>
                                <td align="right">
                                <Item
                                    name={[12, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                                <td align="right">
                                <Item
                                    name={[13, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                            </tr>
                            <tr name="row5">
                                <td align="right"><label >الكادميوم</label></td>
                                <td align="right">
                                <Item
                                    name={[14, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                                <td align="right">
                                <Item
                                    name={[15, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                            </tr>
                            <tr name="row5">
                                <td align="right"><label >الألومنيوم</label></td>
                                <td align="right">
                                <Item
                                    name={[16, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                                <td align="right">
                                <Item
                                    name={[17, "val"]}
                                    initialValue={0}
                                    normalize={parseFloat}
                                    
                                >
                                    <Input type="number" min={0} />
                                </Item>
                                </td>
                            </tr>
                        </table>
                    </div>
                    )
                }
            }
        </Form.List>
    )
}
