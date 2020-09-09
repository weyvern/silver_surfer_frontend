import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../spinner/Spinner';

const UserProfile = () => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);
	const { username } = useParams();
	const getUserProfile = async () => {
		const res = await axios.get(
			`${process.env.REACT_APP_SOCIAL_SERVICE}/userprofiles/null/${username}`
		);
		setCurrentUser(res.data.data);
		setLoading(false);
	};
	useEffect(() => {
		getUserProfile();
	}, [username]);
	return !loading ? (
		<div className="container">
			<div className="row">
				<div className="d-flex align-items-center">
					<img
						src={currentUser.profile_picture}
						alt={currentUser.username}
						className="rounded-circle"
						width="200px"
					/>
					<h1 className="ml-3">{`${currentUser.name.first} ${currentUser.name.last}`}</h1>
				</div>
				<div className="d-flex align-items-center justify-content-center w-100">
					<Link to="/people" className="btn btn-primary m-2">
						People
					</Link>{' '}
					<Link to="/feed/createpost" className="btn btn-primary m-2">
						Write a story
					</Link>{' '}
					<Link to="/people" className="btn btn-primary m-2">
						Invite caretaker
					</Link>
				</div>
			</div>
		</div>
	) : (
		<Spinner />
	);
};

export default UserProfile;
