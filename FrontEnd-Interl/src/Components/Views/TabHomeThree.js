import React from 'react'
import '../Layout/Home.css'
import { useTranslation } from 'react-i18next';

export default function TabHomeThree() {
    const { t } = useTranslation();

    return (
        <div className='container-tab-home-three'>
            <div className='item-image item-image1'></div>
            <div className='item-image item-image2'></div>
            <div className='item-image item-image3'></div>
            <div className='item-image item-image4'></div>
            <div className='item-image item-image5'>
                <span>You</span> are <br />
                The <span>One</span>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.</p>
                <button>{t('HomePage.Fllow')}</button>
            </div>
            <div className='item-image item-image6'></div>
            <div className='item-image item-image7'></div>
            <div className='item-image item-image8'></div>
        </div>
    )
}
