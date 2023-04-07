import React, { useState } from 'react';
import './MyLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Store/apiRequest';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function MyLogin() {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleEmailChange = (event) => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        setEmail(event.target.value);

    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        loginUser(newUser, dispatch, navigate);
    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const user = {
    //             email: email,
    //             password: password
    //         }
    //         axios.post('http://localhost:3030/users/login', user).then((response) => {
    //             // console.log(response.data.accessToken);
    //             localStorage.setItem('token', response.data.accessToken);
    //             navigate('/dashboard')
    //             localStorage.setItem('isLoggedIn', 'true');
    //             localStorage.setItem('ttUser', JSON.stringify(response.data));
    //             toast.success('Login Success !')
    //             console.log(response.data);
    //         })
    //     } catch (error) {
    //         toast.error('Invalid Email or Password !', error)
    //     }
    // }
    return (
        <>
            <div className='container-login' >
                <div className='content-login'>
                    <h1 className='wlc'>{t('Menu.Login')}</h1>
                    <h3 className='wlc-b'>{t('Accounts.titleLogin')}</h3>
                    <form className="form-tab-register tab-login" onSubmit={handleSubmit}>
                        <div className="Fieldset">
                            <label className="Label" htmlFor="email">Email:</label>
                            <input className="Input InputPW" type="email" name="email" value={email} onChange={handleEmailChange} required />
                        </div>
                        <div className="Fieldset">
                            <label className="Label" htmlFor="password">{t('Accounts.pass')}:</label>
                            <input className="Input" type="password" name="password" autocomplete="on" value={password} onChange={handlePasswordChange} required />
                        </div>
                        <div className='err-input'>
                            {error && <p className='err-login' style={{ color: 'red' }}>{error}</p>}
                        </div>
                        <button className=" btn-btnlogin" type="submit">{t('Menu.Login')}</button>
                        <div className='rg-fg'>
                            <Link className='btn-lock btn-rg' to="/register">{t('Menu.Register')}</Link>
                            <Link className='btn-lock btn-rg' to="/forgot">{t('Menu.Fpsw')}</Link>
                        </div>
                        <span className="or-singin or-login">{t('Accounts.OrSing')}</span>
                        <div className="face face-login">
                            <div className="sing-or"><i className="fa-brands fa-facebook-f"></i>FaceBook</div>
                            <div className="sing-or"><i className="fa-brands fa-twitter"></i>Twitter</div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}