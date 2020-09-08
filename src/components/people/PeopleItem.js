import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PeopleItem = ({ person }) => {
	const authContext = useContext(AuthContext);
	const { userProfile } = authContext;
	const [button, setButton] = useState('Add friend');
	const addFriend = async e => {
		e.preventDefault();
		await axios.put(
			`${process.env.REACT_APP_SOCIAL_SERVICE}/userprofiles/${userProfile.username}/friends/${person.username}`,
			{ relationship: '0' }
		);
		setButton('Pending request');
	};
	useEffect(() => {});
	return (
		person && (
			<div className="card">
				<div className="card-body d-flex justify-content-between align-items-center">
					<div>
						<img
							src={person.profile_picture}
							className="rounded-circle"
							width="150px"
						/>
						<Link to={`/${person.username}`} className="ml-3 card-title">
							{`${person.name.first} ${person.name.last}`}
						</Link>
					</div>
					<button className="btn btn-primary" onClick={e => addFriend(e)}>
						{button}
					</button>
				</div>
			</div>
		)
	);
};

export default PeopleItem;
