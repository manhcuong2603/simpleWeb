import React from 'react'
import './Home.css'
import Footer from './Footer';
import TabHomeOne from '../Views/TabHomeOne'
import TabHomeTwo from '../Views/TabHomeTwo'
import TabHomeThree from '../Views/TabHomeThree';
export default function HomePage() {
    return (
        <>
            <TabHomeOne />
            <TabHomeTwo />
            <TabHomeThree />
            <Footer />
        </>
    )
}
