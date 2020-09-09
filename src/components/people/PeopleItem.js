import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './people.css'

const PeopleItem = ({ person, type }) => {
	const authContext = useContext(AuthContext);
	const { userProfile } = authContext;
	const [button, setButton] = useState('Add friend');
	console.log(type);
	const updateRelationship = async e => {
		e.preventDefault();
		await axios.put(
			`${process.env.REACT_APP_SOCIAL_SERVICE}/userprofiles/${userProfile.username}/friends/${person.username}`,
			{ relationship: type }
		);
		setButton('Pending request');
	};
	useEffect(() => {});
	return (
		person && (
			<div className="card">
				<div className="card-body d-flex justify-content-between align-items-center">
					<div >
						<img
						
							src={person.profile_picture}
							className="rounded-circle"
							width="150px"
						/>
						<Link to={`/${person.username}`} className="ml-3 card-title text-decoration-none" style={{color: "#686e73"}}>
							{`${person.name.first} ${person.name.last}`}
						</Link>
					</div>
					{!type ? (
						''
					) : (
						<button
							className="btn btn-primary btn-marketing rounded-pill m-4"
							onClick={e => updateRelationship(e)}
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
