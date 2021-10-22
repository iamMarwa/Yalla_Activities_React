import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/Navbar/index';
import { Route } from 'react-router-dom'; 
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import CatSection from '../components/CatSection'
import { homeObjThree } from '../components/InfoSection/Data'
import {homeObjOne} from '../components/CatSection/Data'
import Activities from '../components/Activities'
import Footer from '../components/Footer'
const Home = (props) => {
    
    return (
        <>
        <HeroSection />
        <CatSection {...homeObjOne} />
        <Activities></Activities>
        <InfoSection {...homeObjThree} />
        </>
        
    )
}

export default Home;
