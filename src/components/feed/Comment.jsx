import React from 'react';
import { useHistory } from 'react-router-dom';

const Comment = () => {
	const history = useHistory();
	return (
		<div>
             <hr class="my-3"></hr>
            <div class="single-post">
            <p>comment.body</p>            
                <div class="single-post-meta mr-4">
                        <img
                          class="avatar avatar-xl mx-2"
                          src="https://source.unsplash.com/QAB-WJcbgJk/100x100" /*author.avatar*/
                        />
                        <div class="single-post-meta-details">
                          <div class="single-post-meta-details-name">
                            comment.author.name
                          </div>
                          <div class="single-post-meta-details-date">
                            comment.date/moment &middot; 6 min read
                          </div>
                        </div>
                      </div>
        </div>
       
       
        </div>
	);
};

export default Comment;