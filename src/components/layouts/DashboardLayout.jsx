import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
	const authContext = useContext(AuthContext);
	const { logoutUser } = authContext;
	const sideBar = useRef();
	const toggle = useRef();
	const toggleSideBar = () => {
		sideBar.current.classList.toggle('active');
		toggle.current.classList.toggle('collapsed');
	};
	return (
		<div class="wrapper">
			<nav
				id="sidebar"
				ref={sideBar}
				className="bg-indigo-soft d-flex flex-column justify-content-between"
			>
				<ul class="list-unstyled components">
					<li>
						<Link to="/">
							<div className="card m-2">
								<i class="fas fa-home fa-5x mx-auto my-3"></i>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/reminders">
							<div className="card m-2">
								<i class="fas fa-notes-medical fa-5x mx-auto my-3"></i>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/events">
							<div className="card m-2">
								<i class="far fa-calendar-alt fa-5x mx-auto my-3"></i>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/chat">
							<div className="card m-2">
								<i class="far fa-comments fa-5x mx-auto my-3"></i>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/">
							<div className="card m-2">
								<i class="fab fa-readme fa-5x mx-auto my-3"></i>
							</div>
						</Link>
					</li>
				</ul>
				<ul class="list-unstyled components">
					<li onClick={logoutUser}>
						<div className="card m-2 text-light_purple">
							<i class="fas fa-sign-out-alt fa-5x mx-auto my-3"></i>
						</div>
					</li>
				</ul>
			</nav>
			<div id="content" className="bg-light w-100">
				<nav class="navbar" onClick={toggleSideBar}>
					<button type="button" id="sidebarCollapse" ref={toggle}>
						<span class="icon-bar top-bar"></span>
						<span class="icon-bar middle-bar"></span>
						<span class="icon-bar bottom-bar"></span>
					</button>
				</nav>
				{children}
			</div>
		</div>
	);
};

export default DashboardLayout;
