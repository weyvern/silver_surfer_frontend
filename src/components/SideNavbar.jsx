import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {
	
	const style = {
		fontWeight: "bold",
		backgroundColor: "var(--primary-soft)",
		':hover': {
			background: 'red'
		  }
	};




	return (
		<div id="#SideNavbar" class="p-0 my-0 vh-100 d-flex flex-column justify-content-between text-center">
			<NavLink to={'/home'} class="text-decoration-none border" activeClassName="selected" style={style}>
				<i></i>
				<p class="mb-0">Home</p>
			</NavLink>
			<NavLink to={'/feed'} class="text-decoration-none" style={style}>
					<i></i>
					<p class="mb-0">Feed</p>
			</NavLink>
			<NavLink to={'/chat'} class="text-decoration-none" activeStyle={style}>
					<i></i>
					<p class="mb-0">Chat</p>
			</NavLink>
			<NavLink to={'/events'} class="text-decoration-none" activeStyle={style}>
					<i></i>
					<p class="mb-0">Events</p>
			</NavLink>
				<NavLink to={'/settings'} class="text-decoration-none" activeStyle={style}>
					<i></i>
					<p class="mb-0">Settings</p>
			</NavLink>
		</div>
	);
};

export default SideNavbar;
