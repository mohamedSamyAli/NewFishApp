import React, {useState} from 'react';
import Navbar from '../../components/layout/navbar';
import './descriptive.css';
import Sidemenu from '../../components/layout/sidemenu';
import {
    useHistory,
    Switch,
    Route
  } from "react-router-dom";
import LakesAddForm from '../../components/modules/descriptive/lakes/addEdit.js';
import RentAddForm from '../../components/modules/descriptive/Rent/addEdit.js';
import FarmVisitAddForm from '../../components/modules/descriptive/farm/addEdit.js';
import LakesForm from '../../components/modules/descriptive/lakes';
import DescriptiveBasic from '../../components/modules/descriptive/basic';
import './descriptive.css';
import RentTable from "../../components/modules/descriptive/Rent/Table"
import FarmTable from '../../components/modules/descriptive/farm/Table';


const DiscriptivePage = () => {
    const history = useHistory()
    const active ='descriptive';
    const [ sidemenu, setSidemenu] = useState('');
    const setActive = (id) => {
        setSidemenu(id);
        history.push(`/descriptive/${id}`);
    }
    const subNav = [
        {
            name : 'إستمارة بيانات البحيرات',
            to : 'lakes'
        },
        {
            name : 'إستمارة عينات البحيرات',
            to : 'basic'
        },
        {
            name : 'إستمارة بيانات المزارع السمكيية',
            to : 'Farm'
        },
        {
            name : 'إستمارة بيانات المفرخات السمكية',
            to : '---'
        },
        {
            name : 'إستمارة الماه البحرية',
            to : '----'
        },
        {
            name : 'إستمارة  العقود',
            to : "Contract"
        },
        {
            name : 'إستمارة بيانات الموانئ | نقط سروح',
            to : '-----'
        }
    ]
    return ( 
        <div className="admin__container">
            < Sidemenu activeSub={ sidemenu } 
            content={ subNav } 
            setActive={(id)=>setActive(id)}/>
            <div>
                < Navbar active= {active} />
                <div className="content__container">
                <Switch>
                <Route exact path="/descriptive/Farm">
                    <FarmTable key="3" name="FarmQ" />
                    </Route>
                    <Route path="/descriptive/RentForm/add">
                        <RentAddForm key={55} isUpdate={false}/>
                    </Route>
                    <Route path="/descriptive/RentForm/edit">
                        <RentAddForm key={56} isUpdate={true}/>
                    </Route>
                    <Route exact path="/descriptive/lakes">
                        <LakesForm/>
                    </Route>
                    <Route exact path="/descriptive/Contract">
                    <RentTable key="6" name="FarmQ" />
                    </Route>
                    <Route path="/descriptive/lackesForm/add">
                        <LakesAddForm/>
                    </Route>
                    <Route path="/descriptive/FarmVisit/add">
                        <FarmVisitAddForm/>
                    </Route>
                    <Route path="/descriptive">
                        <DescriptiveBasic/>
                    </Route>
                </Switch>
                </div>
            </div>
        </div>
    );
}
 
export default DiscriptivePage;