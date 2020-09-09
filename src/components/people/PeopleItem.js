import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PeopleItem = ({ person, type }) => {
	const authContext = useContext(AuthContext);
	const { userProfile, updateRelationship } = authContext;
	const [button, setButton] = useState('Add friend');
	const handleAction = async e => {
		e.preventDefault();
		updateRelationship(userProfile.username, person.username, type);
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
						<Link
							to={`/${person.username}`}
							className="ml-3 card-title text-decoration-none"
							style={{ color: '#686e73' }}
						>
							{`${person.name.first} ${person.name.last}`}
						</Link>
					</div>
					{type !== null && (
						<button
							className="btn btn-primary btn-marketing rounded-pill m-4"
							onClick={e => handleAction(e)}
						>
							{button}
						</button>
					)}
				</div>
			</div>
		)
	);
};

export default PeopleItem;
