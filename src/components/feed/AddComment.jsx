import React, { useState, useEffect, useContext, useRef } from 'react';
import AuthContext from '../../context/auth/authContext';
import PostContext from '../../context/post/postContext';

const AddComment = ({ id }) => {
	const { userProfile } = useContext(AuthContext);
	const { postComment } = useContext(PostContext);
	const [newComment, setNewComment] = useState({});
	const commentForm = useRef();

	useEffect(() => {
		userProfile && setNewComment({ ...newComment, author_id: userProfile._id });
	}, [userProfile]);

	const handleChange = e => {
		setNewComment({ ...newComment, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!newComment.text) {
			return window.alert(
				'Please fill out all fields before publishing your post'
			);
		}
		postComment(newComment, id);
		setNewComment({});
		commentForm.current.reset();
	};

	return (
		<div className="card">
			<div className="card-header">Add a Comment</div>
			<div className="card-body">
				<div className="d-flex align-items-center">
					<div className="avatar avatar-xl mx-2">
						<img className="avatar-img" src={userProfile.profile_picture} />
					</div>

					<form
						ref={commentForm}
						className="d-flex"
						style={{ width: '100%' }}
						onSubmit={handleSubmit}
						onKeyDown={e => {
							if (e.key === 'Enter') {
								handleSubmit(e);
							}
						}}
					>
						<textarea
							className="form-control rounded-lg mx-2"
							id="leadCapBody"
							name="text"
							width="100%"
							type="text"
							rows="4"
							columns="100"
							placeholder="Please tell us what you think"
							onChange={handleChange}
						/>

						<button
							className="btn btn-secondary btn-marketing btn-lg rounded-pill mt-4"
							type="submit"
							style={{ maxHeight: '4rem' }}
						>
							Post Comment
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddComment;
