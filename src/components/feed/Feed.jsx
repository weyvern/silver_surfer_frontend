import React from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';


const Feed = () => {
	const history = useHistory();




	return (
		<div>
			My posts :D
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
				Back
			</button>
		</div>
	);
};

export default Feed;
