import React, { useState } from 'react';
import Navbar from '../../components/layout/navbar';
import './admin.css';
import Sidemenu from '../../components/layout/sidemenu';
import {useHistory,Switch,Route} from "react-router-dom";
import EditMap from '../../components/modules/admin/spacialDocuments/editMap.js';
import AdminBasic from '../../components/modules/admin/basic';
import G_Admin from '../../components/modules/admin/G_Admin';
import JopTable from "../../components/modules/admin/jobs/Table.js"

const AdminPage = () => {
    const history = useHistory()
    const active = 'admin';
    const [sidemenu, setSidemenu] = useState('');
    const setActive = (id) => {
        setSidemenu(id);
        history.push(`/admin/${id}`);
    }
    const subNav = [
        {
            name: 'إدارة المستخدمين',
            to: 'users'
        },
        {
            name: 'إدارة الوظائف',
            to: 'jobs'
        },
        {
            name: 'إدارة الحرف',
            to: 'skills'
        },
        {
            name: 'إدارة الجمعيات',
            to: 'assoc'
        },
        {
            name: 'إدارة الاصناف',
            to: 'Species'
        },
        {
            name: 'إدارة مناطق الثروة السمكية',
            to: 'fisheryAreas'
        },
        {
            name: 'عرض السجلات ',
            to: 'documents'
        },
        {
            name: ' تأكيد تعديل البيانات المكانية ',
            to: 'spacialDocuments'
        },
    ]
    return (
        <div className="admin__container">
            < Sidemenu activeSub={sidemenu}
                content={subNav}
                setActive={(id) => setActive(id)} />
            <div>
                < Navbar active='admin' />
                <div className="content__container">
                    <Switch>
                        <Route exact path="/admin/spacialDocuments/Map/:id">
                            <EditMap />
                        </Route>
                        <Route path="/admin/users">
                            <G_Admin key="1" name="user" />
                        </Route>
                        <Route path="/admin/assoc">
                            <G_Admin key="2" name="assoc" />
                        </Route>
                        <Route path="/admin/skills">
                            <G_Admin key="3" name="fisher" />
                        </Route>
                        <Route path="/admin/fisheryAreas">
                            <G_Admin key="4" name="Gafrd" />
                        </Route>
                        <Route path="/admin/jobs">
                            <JopTable/>
                        </Route>
                        <Route path="/admin/assoc">
                            <G_Admin key="6" name="assoc" />
                        </Route>
                        <Route path="/admin/documents">
                            <G_Admin key="7" name="actionLog" />
                        </Route>
                        <Route path="/admin/Species">
                            <G_Admin key="8" name="Species" />
                        </Route>
                        <Route path="/admin">
                            <AdminBasic />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;