import React from 'react'
import './MyForgotPsw.css'
import iconpsw from '../access/icon-forgot.png'
import yourLogo from '../access/your-logo.png'
import { useFormik } from 'formik';
import axios from 'axios';



const validate = (values) => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors
}
export default function MyForgotPsw() {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: (values) => {
            // console.log(values);
            // console.log('check email', values.email);
            axios.get(`http://localhost:3030/users?email=${values.email}`).then((response) => {
                console.log(response.data)
            })
        }
    })
    return (
        <div className='container-forgot'>
            <div className='content-top-forgot'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='content-icon-forgot'>
                    <img className='image-psw' src={iconpsw} alt=''></img>
                    <div className='title-forgot'>Resest Your Password</div>
                    <span>We received a request to reset your password. Don’t worry,
                        we are here to help you.
                    </span>
                    <input className='input' type="email" name="email" id="email" placeholder='Email'
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email && (
                        <span className='err-email'>{formik.errors.email}</span>
                    )}
                    <button type='submit'>Reset My Password</button>
                    <p>Didn’t request a password reset?
                        You can safely ignore this message.
                    </p>
                </form>
            </div>
            <div className='content-mid-forgot'>
                <div className='your-logo'>
                    <img src={yourLogo} alt=''></img>
                </div>
                <div className='content-network'>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-regular fa-envelope"></i>
                </div>
                <div className='content-note'>
                    <p>Copyright © 2021 Your Brand, All rights reserved.</p>
                    <p> Where to find us: 2047 Roosevelt Road</p>
                    <p>Changed your mind? You can unsubscribe at any time.</p>
                </div>
            </div>
        </div>
    )
}
