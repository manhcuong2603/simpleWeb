import React from 'react'
import './Menu.css'
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='container-footer'>
            <div className='contact-footer'>
                <div className='footer-contact'>
                    <div className='contact-child'>{t('HomePage.Links')}</div>
                    <div className='contact-child'>{t('HomePage.Product')}</div>
                    <div className='contact-child'>{t('HomePage.Stores')}</div>
                    <div className='contact-child'>{t('HomePage.Webshop')}</div>
                    <div className='contact-child'>{t('HomePage.Brands')}</div>
                </div>
                <div className='footer-contact'>
                    <div className='contact-child'>{t('HomePage.Contact')}</div>
                    <div className='contact-child'>myInfo@gmail.com</div>
                    <div className='contact-child'>{t('HomePage.Help')}</div>
                    <div className='contact-child  icon-footer'>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                </div>
                <div className='footer-contact'>
                    <div className='contact-child'>{t('HomePage.Users')}</div>
                    <div className='contact-child'>{t('HomePage.API')}</div>
                    <div className='contact-child'>{t('HomePage.Training')}</div>
                    <div className='contact-child'>{t('HomePage.Blog')}</div>
                    <div className='contact-child'>{t('HomePage.About')}</div>
                </div>
                <div className='footer-contact'>
                    <div className='contact-child'>{t('HomePage.Project')}</div>
                    <div className='contact-child'>{t('HomePage.Download')}</div>
                    <div className='contact-child'>{t('HomePage.Changelog')}</div>
                    <div className='contact-child'>{t('HomePage.Commission')}</div>
                    <div className='contact-child'>{t('HomePage.Versions')}</div>
                </div>
            </div>
            <div className='footer-make'>
                <i className="fa-regular fa-heart"></i>
                <span>Made With Love</span>
            </div>
        </div>
    )
}

export default Footer