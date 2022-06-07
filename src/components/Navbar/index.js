import React from 'react';
import './index.css';
import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

function Navbar() {
	const [ sidebar, setSidebar ] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const location = useLocation();

	return (
		<div className={sidebar ? 'body body-pd' : 'body'}>
			<header className={sidebar ? 'header body-pd' : 'header'}>
				{/* <div className="header__toggle">
					<Link to="#" onClick={showSidebar}>
						{sidebar ? <FaIcons.FaWindowClose /> : <FaIcons.FaBars />}
					</Link>
				</div> */}
			</header>
			<div className={sidebar ? 'l-navbar show' : 'l-navbar'}>
				<nav className="nav">
					<div>
						<div className="nav__logo" onClick={showSidebar}>
							{sidebar ? <FaIcons.FaWindowClose color="white" /> : <FaIcons.FaBars color="white" />}
						</div>
						<a href="/" className="nav__logo">
							{/* <AiIcons.AiOutlineHome className='nav__logo-icon' /> */}
							{/* put logo.svg here */}
							<svg
								style={{ height: '20px', width: '20px', backgroundColor: 'white' }}
								enableBackground="new 0 0 2088.1 730.2"
								viewBox="0 0 2088.1 730.2"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="365" cy="121.7" fill="#00f" r="81.5" />
								<path
									d="m487.3 608.3c-.5 67.4 54 121.9 121.2 121.9s121.7-54.5 121.7-121.7-54.5-121.7-121.7-121.7-121.7-54.5-121.7-121.7 54.5-121.7 121.7-121.7 121.7-54.5 121.7-121.7-54.5-121.7-121.7-121.7-121.7 54.5-121.7 121.7-54.5 121.7-121.7 121.7-121.7-54.5-121.7-121.7-54.5-121.7-121.7-121.7-121.7 54.5-121.7 121.7 54.5 121.7 121.7 121.7 121.7 54.5 121.7 121.7-54.5 121.7-121.7 121.7-121.7 54.5-121.7 121.7 54.5 121.7 121.7 121.7 121.7-54.5 121.7-121.7 54.5-121.7 121.7-121.7 121.7 54.5 121.7 121.7"
									fill="#00f"
								/>
								<g fill="#002856">
									<path d="m2088.1 253.4c-7.2-2.6-58.6-20.3-138.9 5.6v219.9h55v-176.6c47.4-6.8 68.1 3.5 73.9 5z" />
									<path d="m1050.7 176.9v298.6s-46.6 11.2-88.2 11.2c-67.2 0-121.7-54.5-121.7-121.7s54.5-121.7 121.7-121.7c16.7 0 33.1 2.6 33.1 2.6v-69zm-55.1 252v-127.8s-16.6-2.8-33.1-2.8c-36.8 0-66.7 29.9-66.7 66.7s29.9 66.7 66.7 66.7c16.5 0 33.1-2.8 33.1-2.8z" />
									<path d="m1656 430.6v55h-16.6c-64 0-116.1-52.1-116.1-116.1v-192.6h55v74.4h77.5l-9.4 51.1h-68.1v67.1c0 33.7 27.4 61.1 61.1 61.1z" />
									<path d="m1479.3 430.6v55h-16.6c-64 0-116.1-52.1-116.1-116.1v-192.6h55v74.4h77.5l-9.4 51.1h-68.1v67.1c0 33.7 27.4 61.1 61.1 61.1z" />
									<path d="m1203.2 400.2-70.9-148.9h-61l102.2 214.8-11.1 24.6c-.8 1.9-12.6 29.2-38.4 39.4-7 2.8-14.6 4.1-22.7 4v56.8c83.6 0 111.8-79 111.8-79l117.6-260.8h-60.3z" />
									<path d="m1858.6 386.7h56.7c1.3-7 1.9-14.3 1.9-21.7 0-67.2-54.5-121.7-121.7-121.7s-121.7 54.5-121.7 121.7 54.5 121.7 121.7 121.7c46.7 0 72.7-11 72.7-11l-10.8-54.7s-24.9 10.8-58.4 10.8c-52.5 0-66.6-45-66.6-45h125.5zm-125.7-44.4c9.3-25.6 33.9-43.9 62.7-43.9 28.7 0 53.3 18.3 62.6 43.8v.2h-125.5z" />
								</g>
							</svg>

							<span className="nav__logo-name">Logo</span>
						</a>
						<div className="nav__list">
							<a
								href="/pages/dashboard"
								className={location.pathname === '/pages/dashboard' ? 'nav__link active' : 'nav__link'}
							>
								<AiIcons.AiOutlineDashboard className="nav__icon" />
								<span className="nav__name">Dashboard</span>
							</a>
							<a
								href="/pages/match"
								className={location.pathname === '/pages/match' ? 'nav__link active' : 'nav__link'}
							>
								<AiIcons.AiOutlineBlock className="nav__icon" />
								<span className="nav__name">Match</span>
							</a>
							<a
								href="/pages/bookings"
								className={location.pathname === '/pages/bookings' ? 'nav__link active' : 'nav__link'}
							>
								<AiIcons.AiOutlineCalendar className="nav__icon" />
								<span className="nav__name">Bookings</span>
							</a>
							<a
								href="/pages/caregivers"
								className={location.pathname === '/pages/caregivers' ? 'nav__link active' : 'nav__link'}
							>
								<AiIcons.AiOutlineUser className="nav__icon" />
								<span className="nav__name">Caregivers</span>
							</a>
							<a href="/" className="nav__link">
								<AiIcons.AiOutlineGlobal className="nav__icon" />
								<span className="nav__name">Contact</span>
							</a>
							<a
								href="/pages/login"
								className="nav__link"
								onClick={() => {
									localStorage.removeItem('token');
								}}
							>
								<AiIcons.AiOutlineGlobal className="nav__icon" />
								<span className="nav__name">Logout</span>
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;
