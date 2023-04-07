import React from 'react'
import '../Layout/Home.css'
import { useTranslation } from 'react-i18next';
export default function TabHomeTwo() {
    const { t } = useTranslation();
    return (
        <div className='container-page-home-two'>
            <div className='home-left-two'>
                <span>{t('HomePage.Support')}</span>
                <span>{t('HomePage.Title2')}</span>
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.</span>
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.</span>
                <button>{t('HomePage.Ins')}</button>
            </div>
            <div className='home-right-two'>
                {/* <img src={imgstore} alt='' /> */}
            </div>
        </div>
    )
}
