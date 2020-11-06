import { Input, Form } from 'antd';
import React, { Component } from 'react'
import SelectorFetchComponent from '../../../../../../FormComponent/SelectorFetchComponent';
const {Item} = Form
export default class FishUnit extends Component {
    render() {
        return (
            <div>
                 <Form.Item
                    name={["boatVisitData", "boatDegreId"]}
                    label="درجة المركب"
                    >
                    <SelectorFetchComponent entity='boatdegre'/>
                </Form.Item>
                <Form.Item
                    name={["boatVisitData", "boatTypeId"]}
                    label="نوع المركب"
                    >
                    <SelectorFetchComponent entity='boatType'/>
                </Form.Item>
                <Item
                    label="رقم المركب"
                    name={["boatVisitData", "boatNumber"]}
                    normalize={parseFloat}
                    rules={[{ required: true, message: 'ادخل رقم المركب' }]}

                >
                    <Input type="number" />
                </Item>
                <Item
                    label="اسم المالك"
                    name={["boatVisitData", "boatOwnerName"]}
                    rules={[{ required: true, message: 'ادخل اسم المالك' }]}

                >
                    <Input />
                </Item>
                <Item
                    label="قيمة قارب الصيد"
                    name={["boatVisitData", "boatValue"]}
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                <Item
                    label="قيمة معدات الصيد	"
                    name={["boatVisitData", "fishingEquValue"]}
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                <Item
                    label="قيمة استهلاك الشباك"
                    name={["boatVisitData", "netCost"]}
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                <Item
                    label="قيمة استهلاك قارب الصيد"
                    name={["boatVisitData", "boatUseingCost"]}
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                <Item
                    label="مصاريف أخرى"
                    name={["boatVisitData", "anotherCost"]}
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                <Item
                    label="الإنتاج لوحدة الصيد(كجم)"
                    name={["boatVisitData", "productionQuantity"]}
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                <Item
                    label="عدد الصيادين"
                    name={["boatVisitData", "fishersCount"]}
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                <Form.Item
                    name={["boatVisitData", "associationId"]}
                    label= "اسم الجمعيه"
                    >
                <SelectorFetchComponent ChildE="associationgov" parentE="GovEvents" entity='associationgov'/>
                </Form.Item>
                <Item
                    label="عدد أيام الصيد / الشهر"
                    name={["boatVisitData", "fishingDayes"]}
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                <Item
                    label="عدد السرحات / اليوم"
                    name={["boatVisitData", "sar7aCount"]}
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                <Item
                    label="زمن السرحة / الدقائق"
                    name={["boatVisitData", "sar7aDuration"]}
                    normalize={parseFloat}
                >
                    <Input type="number" />
                </Item>
                
            </div>
        )
    }
}
