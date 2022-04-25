import React from 'react';
import './index.css';
import {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";



function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const location = useLocation();
    console.log(location);
    
  return (
    <div className={sidebar ? 'body body-pd':'body'}>
        <header className={sidebar ?'header body-pd' : 'header'}>
            <div className='header__toggle'>
            <Link to="#" onClick={showSidebar}>
            {sidebar ? <FaIcons.FaWindowClose/> : <FaIcons.FaBars/>   }
             </Link>
            </div>
        </header>
        <div className={sidebar ? 'l-navbar show': 'l-navbar'}>
        <nav className='nav'>
            <div>
                <a href="/" className='nav__logo'>
                <AiIcons.AiOutlineHome className='nav__logo-icon' />
                    <span className='nav__logo-name'>Logo</span>
                </a>
                <div className='nav__list'>
                <a href="/" className='nav__link'>
                <AiIcons.AiOutlineDashboard className='nav__icon' />
                    <span className='nav__name'>Dashboard</span>
                </a> 
                <a href="/" className='nav__link'>
                <AiIcons.AiOutlineBlock className='nav__icon' />
                    <span className='nav__name'>Match</span>
                </a>  
                <a href="/pages/bookings" className={location.pathname === '/pages/bookings' ? 'nav__link active': 'nav__link'}>
                <AiIcons.AiOutlineCalendar className='nav__icon' />
                    <span className='nav__name'>Bookings</span>
                </a>  
                <a href="/pages/caregivers" className={location.pathname === '/pages/caregivers' ? 'nav__link active': 'nav__link'}>
                <AiIcons.AiOutlineUser className='nav__icon' />
                    <span className='nav__name'>Caregivers</span>
                </a>  
                <a href="/" className='nav__link'>
                <AiIcons.AiOutlineGlobal className='nav__icon' />
                    <span className='nav__name'>Contact</span>
                </a>                  
                </div>
            </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar