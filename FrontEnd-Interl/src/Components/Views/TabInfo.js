import React, { useState, useEffect } from 'react'
import './TabInfo.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
export default function TabInfo() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { t } = useTranslation();


    //getUserById from database
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch(`http://localhost:3030/users/${id}`);
            const data = await response.json();
            setUser(data);
        }
        fetchUser();
    }, [id]);

    if (!user) {
        return (
            <>
                <div className="boxes">
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <p className='load'>
                    Loading .......
                </p>
            </>
        )
    }
    return (
        <div className='container-view-info'>
            <p>{t('Accounts.viewIf')}</p>
            <div className='info-container'>
                <div className='view-info'>
                    <div key={user.id}>
                        <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100) + 1}.jpg`} className='avt' alt='' />
                        <div className='info-user' >
                            <label>{t('Accounts.Name')}</label>
                            <div className='item-info'>
                                <span>{user.name} {user.username}</span>
                            </div>
                            <label>Email</label>
                            <div className='item-info'>
                                <span>{user.email}</span>
                            </div>
                            <label>{t('Accounts.roles')}</label>
                            <div className='item-info'>
                                <textarea disabled value={user.roles}>
                                    {user.roles}
                                </textarea>
                            </div>
                        </div>
                    </div >
                    <button onClick={() => navigate(-1)} className='btn-back'>{t('Accounts.cancel')}<i className="fa-solid fa-angles-left"></i></button>
                </div>
                <div className='view-contact'>
                    <lable>{t('Accounts.contact')}</lable>
                    <div className='info-contact'>
                        <span className='pen-contact'><i className="fas fa-map-marker-alt"></i>Address: 198 West 21th Street, Suite 721 New York NY 10016</span>
                        <span className='pen-contact'><i className="fas fa-phone"></i>Phone: + 1235 2355 98 </span>
                        <span className='pen-contact'><i className="fas fa-globe-americas"></i>Website yoursite.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
