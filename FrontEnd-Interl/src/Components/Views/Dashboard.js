import React, { useEffect } from 'react'
import './Dashboard.css'
import { useSelector } from 'react-redux';
export default function Dashboard(props) {
    const user = useSelector((state) => state.myListReducer.login.currentUser)
    useEffect(() => {
        JSON.parse(window.localStorage.getItem('dataLogin'));
    }, [])
    const data = JSON.parse(window.localStorage.getItem('dataLogin'));
    // console.log(data);
    return (
        <div className='container-dashboard'>

            <div className="dash">
                <div className="body">
                    <main className="main">
                        <div className="main__col-1">
                            <div>
                                <h2 className="main__heading">
                                    <span style={{ background: 'linear-gradient(to bottom, hsl(247, 88%, 70%), hsl(282, 82%, 51%))', boxShadow: '0 2px 12px hsla(247, 88%, 70%, .3)' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </span> {user ? <p> <span>{user.name}'s account</span></p> : <p> <span>{data.name}'s account</span></p>}
                                </h2>
                                <p className="main__desc">Mixtures of places that I've visited &amp; traveled which are worth to check out again ^_^</p>
                                <p className="main__sub"><span>Profile Collaborators:</span> <span>Cloud Strife &amp; Jack Sparrow</span></p>
                            </div>
                            <ul className="main__list">

                            </ul>
                        </div>
                        <div className="main__col-2">
                            <div className="main__cards-container">
                                <div className="main__cards-container-heading-wrap">
                                    <h2 className="main__cards-container-heading ss-heading">Traveling Plans</h2>
                                    <a href="/#" className="ss-show">show all</a>
                                </div>
                                <ul className="main__cards">

                                    <li className="main__card">
                                        <div className="main__card-image-container">
                                            <img src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220" alt="" className="main__card-image" />
                                        </div>
                                    </li>
                                    <li className="main__card" >
                                        <div className="main__card-image-container">
                                            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220" alt="" className="main__card-image" />
                                        </div>
                                    </li>
                                    <li className="main__card">
                                        <div className="main__card-image-container">
                                            <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220" alt="" className="main__card-image" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </main>
                </div>

                <div className="main__crossing-container">
                    <div className="main__crossing-image">
                        <img src="https://images.unsplash.com/photo-1595064085577-7c2ef98ec311?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=70&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=70" alt="" />
                    </div>
                    <div className="main__crossing-current">
                        <p className="main__crossing-upper">
                            Now crossing
                        </p>
                        <h3 className="main__crossing-heading">
                            Center Point
                        </h3>
                    </div>
                </div>
                <div className="main__discover">
                    <div className="main__discover-heading-container">
                        <h3 className="main__discover-heading ss-heading">Discover More Places</h3>
                        <a href="/#" className="ss-show">show all</a>
                    </div>
                    <ul className="main__discover-places">
                        <li className="main__discover-place">
                            <h4 className="main__discover-place-heading">Riyadh Zoo</h4>
                            <p className="main__discover-place-sub">Zoo</p>
                            <div className="main__discover__more">
                                <div className="main__discover__more-svg" style={{ background: 'linear-gradient(20deg, hsla(0, 60%, 50%, .2), hsla(20, 60%, 50%, .3))' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <defs>
                                            <linearGradient id="myGradient1" gradientTransform="rotate(20)">
                                                <stop offset="0%" stopColor="hsl(0, 60%, 50%)" />
                                                <stop offset="50%" stopColor="hsl(20, 60%, 50%)" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" fill="url(#myGradient1)" />
                                    </svg>
                                </div>
                                <span className="ss-dots">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            </div>
                        </li>
                        <li className=" main__discover-place">
                            <h4 className="main__discover-place-heading">Snow City</h4>
                            <p className="main__discover-place-sub">Amusement park</p>
                            <div className="main__discover__more">
                                <div className="main__discover__more-svg" style={{ background: 'linear-gradient(20deg, hsla(280, 60%, 50%, .2), hsla(300, 60%, 50%, .3))' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <defs>
                                            <linearGradient id="myGradient2" gradientTransform="rotate(20)">
                                                <stop offset="0%" stopColor="hsl(280, 60%, 50%)" />
                                                <stop offset="50%" stopColor="hsl(300, 60%, 50%)" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" fill="url(#myGradient2)" />
                                    </svg>
                                </div>
                                <span className="ss-dots">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            </div>
                        </li>
                        <li className="main__discover-place">
                            <h4 className="main__discover-place-heading">Safforiland</h4>
                            <p className="main__discover-place-sub">Amusement Park</p>
                            <div className="main__discover__more">
                                <div className="main__discover__more-svg" style={{ background: 'linear-gradient(20deg, hsla(210, 60%, 50%, .2), hsla(230, 60%, 50%, .3))' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <defs>
                                            <linearGradient id="myGradient3" gradientTransform="rotate(20)">
                                                <stop offset="0%" stopColor="hsl(210, 60%, 50%)" />
                                                <stop offset="50%" stopColor="hsl(230, 60%, 50%)" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" fill="url(#myGradient3)" />
                                    </svg>
                                </div>
                                <span className="ss-dots">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            </div>
                        </li>
                        <li className="main__discover-place">
                            <h4 className="main__discover-place-heading">Nahda Park</h4>
                            <p className="main__discover-place-sub">Park and Garden</p>
                            <div className="main__discover__more">
                                <div className="main__discover__more-svg" style={{ background: 'linear-gradient(20deg, hsla(120, 60%, 50%, .2), hsla(140, 60%, 50%, .3))' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <defs>
                                            <linearGradient id="myGradient4" gradientTransform="rotate(20)">
                                                <stop offset="0%" stopColor="hsl(120, 60%, 50%)" />
                                                <stop offset="50%" stopColor="hsl(140, 60%, 50%)" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" fill="url(#myGradient4)" />
                                    </svg>
                                </div>
                                <span className="ss-dots">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}
