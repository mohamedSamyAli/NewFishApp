import React, { useState, state } from 'react';
import { DatePicker } from 'antd'

let quarter =[
    "الاول",
    "الثانى",
    "الثالث",
    "الرابع"
]

const DateQuerterComponent = (props) => {

    const [Quarter, setQuarter] = useState('');

    const DateChange=(e)=>{
        console.log(e.month(),quarter[parseInt(e.month()>=7?(e.month()-5)/3:(12-e.month())/3)],parseInt(e.month()>=7?(e.month()-5)/3:(12-e.month())/3),quarter)
        props.onChange(e.format("DD/MM/YYYY"))
        setQuarter(`الربع ${quarter[parseInt(e.month()>=6?(e.month()-6)/3:(e.month()+6)/3)]} ${e.year()}`)
        // setQuarter(`الربع ${quarter[((parseInt((e.month()+1)/3)+7)%4)]} ${e.year()}`)
    }

    return (
        <div style={{display:"flex" ,flexDirection:'column'}}>
            <DatePicker onChange={DateChange} />
            <p>{Quarter}</p>
        </div>
    );

}

export default DateQuerterComponent;