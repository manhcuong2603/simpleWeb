import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./MyRegister.css";
import { registerUser } from '../../Store/apiRequest';
import { useTranslation } from 'react-i18next';
const MyRegister = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        id: Math.floor(Math.random() * 999) + 1,
        email: '',
        password: '',
        name: '',
        username: '',
        roles: 'user'
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errorMail, setErrorMail] = useState(null);
    const [errorPs, setErrorPs] = useState(null);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        // console.log({ name, value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateEmail(formData.email)) {
            setErrorMail('Invalid email address');
            return;
        }
        if (!validatePassword(formData.password)) {
            setErrorPs('Invalid password. Password must be at least 8 characters long  and one number.');
            return;
        }
        registerUser(formData, dispatch, navigate)
    }

    const validateEmail = (email) => {
        // Regular expression for email validation
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const validatePassword = (password) => {
        // Regular expression for password validation
        const re = /^(?=.*\d)(?=.*[a-z]).{8,}$/;
        return re.test(password);
    }

    return (
        <div className='container-register'>
            <div className='tab-register'>
                <h1 className='rg'>{t('Accounts.titleRegister')}</h1>
                <form className="form-tab-register" onSubmit={handleSubmit}>
                    <div className='form-input-rg'>
                        <div className="form-group">
                            <label className="Label lable-register" htmlFor="email">Email:</label>
                            <input className="Input" type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        {errorMail && <p className='err-register' style={{ color: 'red' }}>{errorMail}</p>}
                        <div className='form-group'>
                            <label className="Label lable-register" htmlFor="password">{t('Accounts.pass')}:</label>
                            <input className="Input" type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} required />
                        </div>
                        {errorPs && <p className='errPs-login' style={{ color: 'red' }}>{errorPs}</p>}
                        <div className='form-group'>
                            <label className="Label lable-register" htmlFor="name">{t('Accounts.Name')}:</label>
                            <input className="Input" type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required />
                        </div>
                        <div className='form-group'>
                            <label className="Label lable-register" htmlFor="username">{t('Accounts.Username')}:</label>
                            <input className="Input" type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <button className="btn-myregister" type="submit">{t('Menu.Register')}</button>
                    <Link className='forgot-psw' to="/forgot">{t('Menu.Fpsw')}</Link>
                    <span className="or-singin">{t('Accounts.OrSing')} ?</span>
                    <div className="face">
                        <div className="sing-or"><i className="fa-brands fa-facebook-f"></i>FaceBook</div>
                        <div className="sing-or"><i className="fa-brands fa-twitter"></i>Twitter</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MyRegister;
