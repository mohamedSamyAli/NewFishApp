import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import './sidemenu.css';
import { Avatar } from 'antd';
import {ChevronDown, Menu, ChevronRight} from 'react-feather';
import Logo from '../../../images/logos/gafrd.png';

const Sidemenu = ({ activeSub, content, setActive}) => {
    const [extend , setExtend] = useState(false);

    const toggleSidebar = () => {
        setExtend(!extend);
    }
    const hideSidebar = () => {
        setExtend(false);
    }
   
    const goToLink = (to) => {
        setActive(to)
        hideSidebar();
    }

    return ( 
        <>
        <div className={extend?"hide-sidebar" : "extend-sidebar"} onClick={toggleSidebar}>
        {extend? <ChevronRight/>: <Menu/>}
        </div>
        <div className={extend? "sidemenu__container-extended" : "sidemenu__container"}>

        <div className="profile__nav">
                <Avatar
                    style={{
                    backgroundColor:'#BFEEED',
                    verticalAlign: 'middle',
                    }}
                    size="large"
                    gap='4'
                >
                س 
                </Avatar>
                <div className="profile__name">
                    سعيد محمد
                </div>
                <ChevronDown />
        </div>
        <div className="sidemenu__navigation">
            {
                content.map(item =>{
                    return <Link
                        onClick = {()=> goToLink(item.to)}
                        key = {item.name}
                        className= {
                            activeSub !== item.to ?
                            "sidemenu__item":
                            "sidemenu__item-active"
                        }>
                        {item.name}
                    </Link>
                })
            }
        </div>
        <div className="sidemenu__projectName">
            <img src={Logo} className="sidemenu__logo-img"/>
            <div className="sidemenu__logo-text">
            نظام معلومات الهيئة العام 
            <b>لتنمية الثروة السمكية </b>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Sidemenu;