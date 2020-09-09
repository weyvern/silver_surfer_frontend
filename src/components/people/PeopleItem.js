import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
import './people.css';

const PeopleItem = ({ person, type }) => {
	const authContext = useContext(AuthContext);
	const { userProfile, updateRelationship } = authContext;
	const handleAction = async e => {
		e.preventDefault();
		updateRelationship(userProfile.username, person.username, type);
	};
	useEffect(() => {});
	const actionButton = type => {
		switch (type) {
			case 0:
				return (
					<button
						className="btn btn-primary rounded-pill"
						onClick={e => handleAction(e)}
					>
						Add friend
					</button>
				);
			case 1:
				return (
					<button
						className="btn btn-primary rounded-pill"
						onClick={e => handleAction(e)}
					>
						Accept request
					</button>
				);
			case 3:
				return (
					<button
						className="btn btn-primary rounded-pill"
						onClick={e => handleAction(e)}
					>
						Delete friend
					</button>
				);
			case 4:
				return (
					<button
						className="btn btn-primary rounded-pill"
						onClick={e => handleAction(e)}
					>
						Cancel request
					</button>
				);
			default:
				return 'foo';
		}
	};

	return (
		person && (
			<div className="card m-4">
				<div className="card-body d-flex justify-content-between align-items-center">
					<div>
						<img
							src={person.profile_picture}
							className="rounded-circle"
							width="150px"
						/>
					</div>
					<div className="d-flex flex-column align-items-end">
						{type === 3 && (
							<Link to={`/chat/${person.username}`}>
								<i class="far fa-comments fa-2x"></i>
							</Link>
						)}
						<Link
							to={`/${person.username}`}
							className="ml-3 card-title text-decoration-none"
							style={{ color: '#686e73' }}
						>
							{`${person.name.first} ${person.name.last}`}
						</Link>
						{actionButton(type)}
					</div>
				</div>
			</div>
		)
	);
};

export default PeopleItem;
