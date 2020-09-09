import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = ({ story }) => {
	const {
		author_id: { name, profile_picture, username }
	} = story;
	return (
		<Link
			className="m-2 card post-preview mb-5 text-decoration-none"
			key={story._id}
			to={`/feed/${story._id}`}
		>
			<div className="row h-100 no-gutters">
				<div
					className="col-lg-4 h-100"
					style={{
						background: `url(${story.media}) no-repeat`,
						backgroundSize: 'cover'
					}}
				></div>
				<div className="col-lg-8">
					<div className="card-body h-100 d-flex flex-column justify-content-between">
						<h5 className="card-title text-truncate">{story.title}</h5>
						<p
							style={{
								color: '#686e73',
								whiteSpace: 'normal',
								overflow: 'hidden',
								textOverflow: 'ellipsis'
							}}
						>
							{story.short_description.length >= 100
								? `${story.short_description.substring(0, 100)}...`
								: story.short_description}
						</p>
						<div>
							<hr />
							<div className="post-preview-meta justify-content-between">
								<div className="d-flex align-items-center">
									<img
										className="post-preview-meta-img"
										src={profile_picture} /*author_avatar*/
									/>
									<div className="post-preview-meta-details">
										<div className="post-preview-meta-details-name" style={{color: '#686e73'}}>
											{`${name.first} ${name.last}`}
										</div>
										<div className="post-preview-meta-details-date" style={{color: '#686e73'}}>
											{moment(story.createdAt).format('MMM Do YY')} · 6 min read
										</div>
									</div>
								</div>

								<div className="d-flex single-post-meta-links align-items-center">
									<div>
										<i className="fas fa-comment fa-fw"></i>
									</div>
									<p className="m-0 mr-2">{story.comments.length}</p>

									<i className="fas fa-thumbs-up fa-fw"></i>

									<p className="m-0">{story.likes.length}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PostListItem;
