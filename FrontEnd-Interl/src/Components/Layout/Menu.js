
import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import './Menu.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logoutUser } from '../../Store/apiRequest';
import { useTranslation } from 'react-i18next';
import BtnTranslation from '../Views/BtnTranslation';


const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const Menu = () => {
    const { t } = useTranslation();
    const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);
    const user = useSelector((state) => state.myListReducer.login.currentUser)
    // console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = user?.id;
    const handleLogout = () => {
        logoutUser(dispatch, id, navigate)
        toast.success('Logout Success !')
        window.location.href = '/login';
        // localStorage.clear();

    };
    return (
        <Menubar.Root className="MenubarRoot">
            <BtnTranslation />
            {user ?
                (
                    <>
                        {user.roles === ("admin" || "Admin") ? (
                            <>
                                <div className="nav-menu">
                                    <Menubar.Menu>
                                        <Menubar.Trigger className="MenubarTrigger">
                                            <Link className="item" to="/">
                                                {t('Menu.Home')}
                                            </Link>
                                        </Menubar.Trigger>
                                    </Menubar.Menu>

                                    <Menubar.Menu>
                                        <Menubar.Trigger className="MenubarTrigger">
                                            <Link className="item" to="/mytodo">
                                                {t('Menu.Apptodo')}
                                            </Link>
                                        </Menubar.Trigger>
                                    </Menubar.Menu>

                                    <Menubar.Menu>
                                        <Menubar.Trigger className="MenubarTrigger">
                                            <Link className="item" to="/profile">
                                                {t('Menu.Profile')}
                                            </Link>
                                        </Menubar.Trigger>
                                    </Menubar.Menu>

                                    <Menubar.Menu>
                                        <Menubar.Trigger className="MenubarTrigger">
                                            <Link className="item btn-login" to="/dashboard">
                                                {t('Menu.MyDashboard')}
                                            </Link>
                                        </Menubar.Trigger>
                                    </Menubar.Menu>


                                </div>
                                <div className='user-log'>
                                    <div className='hi-name'>
                                        <p> {t('Menu.Hi')}_<span><b>{user.roles}: </b>{user.name} </span></p>
                                    </div>

                                    <Link onClick={handleLogout} className="item logout-item">
                                        {t('Menu.Logout')}
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="nav-menu">
                                    <Menubar.Menu>
                                        <Menubar.Trigger className="MenubarTrigger">
                                            <Link className="item" to="/">
                                                {t('Menu.Home')}
                                            </Link>
                                        </Menubar.Trigger>
                                    </Menubar.Menu>

                                    <Menubar.Menu>
                                        <Menubar.Trigger className="MenubarTrigger">
                                            <Link className="item" to="/profile">
                                                {t('Menu.Profile')}
                                            </Link>
                                        </Menubar.Trigger>
                                    </Menubar.Menu>

                                    <Menubar.Menu>
                                        <Menubar.Trigger className="MenubarTrigger">
                                            <Link className="item btn-login" to="/dashboard">
                                                {t('Menu.MyDashboard')}
                                            </Link>
                                        </Menubar.Trigger>
                                    </Menubar.Menu>


                                </div>
                                <div className='user-log'>
                                    <div className='hi-name'>
                                        <p> {t('Menu.Hi')}_<span><b>{user.roles}: </b>{user.name} </span></p>
                                    </div>

                                    <Link onClick={handleLogout} className="item logout-item">
                                        {t('Menu.Logout')}
                                    </Link>
                                </div>
                            </>
                        )}

                    </>
                )
                :
                (<div className='nav-menu'>
                    <Menubar.Menu>
                        <Menubar.Trigger className="MenubarTrigger"><Link className='item' to="/">{t('Menu.Home')}</Link></Menubar.Trigger>
                    </Menubar.Menu>

                    <Menubar.Menu>
                        <Menubar.Trigger className="MenubarTrigger"><Link className='item' to="#">{t('Menu.Account')}</Link></Menubar.Trigger>
                        <Menubar.Portal>
                            <Menubar.Content
                                className="MenubarContent"
                                align="start"
                                sideOffset={5}
                                alignOffset={-14}
                            >
                                <Menubar.RadioGroup value={radioSelection} onValueChange={setRadioSelection}>

                                    <Menubar.Item className="MenubarItem inset btn-inset"><Link className=' item btn-login' to="/login">{t('Menu.Login')}</Link></Menubar.Item>

                                    <Menubar.Item className="MenubarItem inset btn-inset"><Link className=' item btn-register' to="/register">{t('Menu.Register')}</Link></Menubar.Item>
                                    <Menubar.Item className="MenubarItem inset btn-inset"><Link className=' item btn-forgot' to="/forgot">{t('Menu.Fpsw')}</Link></Menubar.Item>
                                </Menubar.RadioGroup>
                            </Menubar.Content>
                        </Menubar.Portal>
                    </Menubar.Menu>
                </div>)
            }
        </Menubar.Root>
    );
};

export default Menu;