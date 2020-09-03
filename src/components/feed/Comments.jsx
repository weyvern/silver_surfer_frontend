import React from 'react';
import { useHistory } from 'react-router-dom';
import Comment from './Comment';
import AddComment from './AddComment';

const Comments = () => {
	const history = useHistory();
	return (
		<div>
            <hr class="my-5" />
            <div class="d-flex align-items-center mb-3">
            <i class="fas fa-comment fa-fw"></i>
            <p class="m-0 mr-2">story.comments.length</p>
            <h2 class="m-0" id="Comments">Comments</h2>
            </div>
           
            <div class="mb-3 px-5 mx-5">
            
            <AddComment />
			<Comment />
            </div>
            <div class="text-center mt-5">
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
                          </svg>{" "}
                          Back to Blog Overview
                        </button>
                      </div>
		</div>
	);
};

export default Comments;