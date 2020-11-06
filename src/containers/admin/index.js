import React, { useState } from 'react';
import Navbar from '../../components/layout/navbar';
import './admin.css';
import Sidemenu from '../../components/layout/sidemenu';
import {
    useHistory,
    Switch,
    Route
} from "react-router-dom";
import UsersPage from '../../components/modules/admin/users';
import EditMap from '../../components/modules/admin/spacialDocuments/editMap.js';
import JobsPage from '../../components/modules/admin/jobs';
import SpacialDocPage from '../../components/modules/admin/spacialDocuments';
import AdminBasic from '../../components/modules/admin/basic';
import GenaricTable from '../../components/modules/admin/GenaricTable';
import Tableschema from "../../components/modules/admin/TableDescription"


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
            name: 'إدارة الجمعيات',
            to: 'assoc'
        },
        {
            name: 'إدارة الحرف',
            to: 'fisher'
        },
        {
            name: 'إدارة الاصناف',
            to: 'Species'
        },
        {
            name: 'إدارة مناطق الثروة السمكية',
            to: 'Gafrd'
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
                            <UsersPage />
                        </Route>
                        <Route path="/admin/assoc">
                            <GenaricTable key={1} schema={{ ...Tableschema["assoc"] }} name="assoc" />
                        </Route> 
                        <Route path="/admin/Species">
                            <GenaricTable key={2} schema={{ ...Tableschema["Species"] }} name="Species" />
                        </Route>
                        <Route path="/admin/fisher">
                            <GenaricTable key={3} schema={{ ...Tableschema["fisher"] }} name="Species" />
                        </Route>
                        <Route path="/admin/Gafrd">
                            <GenaricTable key={4} schema={{ ...Tableschema["Gafrd"] }} name="Species" />
                        </Route>
                        <Route path="/admin/jobs">
                            <JobsPage />
                        </Route>
                        <Route exact path="/admin/spacialDocuments">
                            <SpacialDocPage />
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