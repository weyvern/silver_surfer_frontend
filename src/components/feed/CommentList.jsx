import React from 'react';
import { useHistory } from 'react-router-dom';
import Comment from './Comment';
import AddComment from './AddComment';

const CommentList = ({ ...data }) => {
	const history = useHistory();
	const { comments, _id } = data;

	const renderComments = comments => {
		return comments.map(comment => (
			<Comment comment={comment} key={comment._id} />
		));
	};

	return (
		<div>
			<hr className="my-5" />
			<div className="d-flex align-items-center mb-3">
				<i className="fas fa-comment fa-fw"></i>
				<p className="m-0 mr-2">{comments.length}</p>
				<h2 className="m-0" id="Comments">
					Comments
				</h2>
			</div>

			<div className="mb-3 px-5 mx-5">
				<AddComment id={_id} />
				{comments && renderComments(comments)}
			</div>
			<div className="text-center mt-5">
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
	);
};

export default CommentList;

/*{story.comments && renderComments(comments)}*/
