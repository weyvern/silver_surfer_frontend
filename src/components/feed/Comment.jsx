import React from 'react';
import moment from 'moment';

const Comment = ({ comment }) => {
	const {
		created_at,
		author_id: {
			name: { first, last },
			profile_picture
		}
	} = comment;
	return (
		<div>
			<div className="card my-3 single-post">
				<p className="p-3">{comment.text}</p>
				<div className="card-footer single-post-meta m-0 p-1">
					<img
						className="avatar avatar-xl mx-2"
						src={profile_picture} /*author.avatar*/
					/>
					<div className="single-post-meta-details">
						<div className="single-post-meta-details-name">
							{`${first} ${last}`}
						</div>
						<div className="single-post-meta-details-date">
							{moment(created_at).format('MMM Do YY, h:mm a')}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comment;
