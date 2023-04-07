import React from 'react'
import '../Layout/Home.css'
import feedback from '../access/feedback.png'
import { useTranslation } from 'react-i18next';

export default function TabHomeOne() {
    const { t } = useTranslation();
    return (
        <div className='container-home'>
            <div className='container-page-home'>
                <div className='home-title'>
                    <span>{t('HomePage.Title')}</span>
                </div>
                <div className='home-child'>
                    <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.</span>
                </div>
                <button>{t('HomePage.Fllow')}</button>
                <img src={feedback} alt=''></img>
            </div>
        </div>
    )
}
