import React from 'react'
import SingleCellForm from '../../components/main/Form';
import './register.css';
import logo1 from '../../images/logos/wzaritElzra3a.png';
import logo2 from '../../images/logos/gafrd.png';
import logo3 from '../../images/logos/prosylabWhite.png';
import { useHistory } from 'react-router-dom';
import Form from 'antd/lib/form/Form';
import { Divider } from 'antd';
import TextField from '../../components/main/inputField/textField';
import DropdownField from '../../components/main/inputField/dropdown';
import SelectSections from '../../components/main/inputField/selectSections';
import InputField from '../../components/main/inputField';
import ButtonComponent from '../../components/main/button';
import Axios from 'axios';
import { baseURl } from '../../URLS';
const headers = {
    'Content-Type': 'application/json',
  }

var fields = [
    {
        input: 'basic',
        label: 'الاسم',
        name: 'name',
        rules: [{ required: true, message: 'Please input your password!' }]
    },
    {
        input: 'basic',
        label: 'كلمة السر',
        name: 'password',
        rules: [{ required: true, message: 'Please input your password!' }]
    }]

var button = { name: 'تسجيل دخول' }



const RegisterPage = () => {
    const history = useHistory();

    const subLogin=(e)=>{
        Axios.post(baseURl+"Login",e,{headers}).then(e=>{console.log(e)})
        history.push('/admin')
    }

    return (<div className="Register__container">
        <div className="Register__image">
        </div>
        <div className="register__text">
            <h2 className="register__Heading">
                نظام معلومات الهيئة العامة لتنمية الثروة السمكية
            </h2>
            <div className="RegisterForm__container">
                <h3 className="register__Title">
                    من فضلك قم بإدخال الاسم و كلمه السر للدخول للموقع:
                </h3>
                <Form onFinish={subLogin} className="form_container" >

                   
                           
                               
                                     <InputField
                                        key="1"
                                        label="الاسم"
                                        name="userName"
                                        rules= {[{ required: true, message: 'Please input your password!' }]}
                                        ></InputField>
                                <InputField
                                        type="password"
                                        key="2"
                                        label="كلمة السر"
                                        name="userPass"
                                        rules= {[{ required: true, message: 'Please input your password!' }]}
                                    ></InputField >
                            
                       
                        <ButtonComponent type={button.action || ''} bgcolor="primary" txcolor="white"
                            action={button ? button.action : console.log("onClick")} >
                            {
                                <>
                                    <p>
                                        {button.name || 'إرسال'}
                                    </p>
                                    {button.icon}
                                </>
                            }

                        </ButtonComponent>
                    
                </Form>
            </div>
            <div className="supporting__logos">
                <div className="typography__logos support_logo">
                    <img src={logo3} />
                </div>
                <div className="circled__logos support_logo">
                    <img src={logo1} />
                    <img src={logo2} />
                </div>
            </div>
        </div>
    </div>);
}

export default RegisterPage;