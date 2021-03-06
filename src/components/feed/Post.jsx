import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import CommentList from './CommentList';
import PostContext from '../../context/post/postContext';
import './Post.css';

const Post = () => {
	const history = useHistory();
	const { id } = useParams();
	const { story, getStory, loading, addLike, deleteLike } = useContext(PostContext);
	const [ like, setLike ] = useState(false);
	useEffect(() => {
		getStory(id);
	}, []);

	const renderCategories = categories => {
		return categories.map(category => (
			<div className="badge badge-pill badge-secondary font-weight-normal px-2 m-2 py-2">
				{category}
			</div>
		));
	};


	const toggleLike = () => {
		like === false? addLike(id) : deleteLike(id);
		setLike(!like);
	};


	return !loading && story ? (
		<div id="layoutDefault">
			<div id="layoutDefault_content">
				<main>
					<section className="bg-light pt-5 pb-10">
						<div className="row justify-content-center">
							<div className="col-lg-12 col-xl-10">
								<div className="single-post">
									<div className="text-right">
										{story.categories && renderCategories(story.categories)}
									</div>
									<h1>{story.title}</h1>
									<p className="lead mb-5">{story.short_description}</p>
									<div className="d-flex align-items-center justify-content-between mb-5">
										<div className="single-post-meta mr-4">
											<img
												className="avatar avatar-xl mx-2"
												src={story.author_id.profile_picture}
											/>
											<div className="single-post-meta-details">
												<div className="single-post-meta-details-name">
													{`${story.author_id.name.first} ${story.author_id.name.last}`}
												</div>
												<div className="single-post-meta-details-date">
													{moment(story.createdAt).format('MMM Do YY')} · 6 min
													read
												</div>
											</div>
										</div>
										<div className="d-flex single-post-meta-links align-items-center">
											<a href="#Comments" className="d-flex text-decoration-none">
												<i className="fas fa-comment fa-fw"></i>
												<p className="m-0 mr-2">
												{!loading && story.comments.length
													? story.comments.length
													: 0}
											</p>
											</a>
											<button id="likeButton" className="d-flex text-decoration-none" onClick={toggleLike} /*disabled={like}*/ style={{fontSize: "100%", border: 0, padding: 0}}>
												<i className="fas fa-thumbs-up fa-fw" ></i>
												<p className="m-0">{!loading && story.likes.length
													? story.likes.length
													: 0}</p>
											</button>
											
										</div>
									</div>
									<div
										className="single-post-text my-5"
										dangerouslySetInnerHTML={{ __html: story.body }}
									/>
									<div className="text-center mt-3">
										<button
											className="btn btn-primary btn-marketing rounded-pill"
											onClick={() => history.goBack()}
										>
											<svg
												className="svg-inline--fa fa-arrow-right fa-w-14 ml-1"
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="arrow-left"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 448 512"
												data-fa-i2svg=""
											>
												<i className="fas fa-arrow-left ml-1"></i>
											</svg>{' '}
											Back to Blog Overview
										</button>
									</div>
								</div>
								<CommentList {...story} />
							</div>
						</div>

						<div className="svg-border-rounded text-dark">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 144.54 17.34"
								preserveAspectRatio="none"
								fill="currentColor"
							>
								<path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
							</svg>
						</div>
					</section>
				</main>
			</div>
		</div>
	) : (
		<div>Loading...</div>
	);
};

export default Post;
