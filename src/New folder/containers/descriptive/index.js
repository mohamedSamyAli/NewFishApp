import React, {useState} from 'react';
import Navbar from '../../components/layout/navbar';
 import './descriptive.css';
import Sidemenu from '../../components/layout/sidemenu';
import {useHistory,Switch,Route} from "react-router-dom";
import DescriptiveBasic from '../../components/modules/descriptive/basic';
import './descriptive.css';
import G_Admin from '../../components/modules/admin/G_Admin';
import FarmTable from "../../components/modules/descriptive/farm/Table"
import RentTable from "../../components/modules/descriptive/Rent/Table"
import LakeVTable from "../../components/modules/descriptive/lakes/Table"
import Rent from '../../components/modules/descriptive/Rent/Rent';

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
            to : 'lakeQuarter'
        },
        {
            name : 'إستمارة عينات البحيرات',
            to : 'lakeWater'
        },
        {
            name : 'إستمارة بيانات المزارع السمكية',
            to : 'Farm'
        },
        {
            name : 'إستمارة بيانات المفرخات السمكية',
            to : 'port'
        },
        {
            name : 'إستمارة الماه البحرية',
            to : 'SW'
        },
        {
            name : 'إستمارة  العقود',
            to : "Contract"
        },
        {
            name : 'إستمارة بيانات الموانئ | نقط سروح',
            to : 'port'
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
                    <Route path="/descriptive/lakeQuarter">
                    <LakeVTable key="1" name="lakeQV" />
                    </Route>
                    <Route exact path="/descriptive/lakeWater">
                    <G_Admin key="2" name="lakeQS" />
                    </Route>
                    <Route exact path="/descriptive/Farm">
                    <FarmTable key="3" name="FarmQ" />
                    </Route>
                    <Route exact path="/descriptive/sw">
                    <G_Admin key="4" name="Port" />
                    </Route>
                    <Route exact path="/descriptive/port">
                    <Rent key="5"/>
                    </Route>
                    <Route exact path="/descriptive/Contract">
                    <RentTable key="6" name="FarmQ" />
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