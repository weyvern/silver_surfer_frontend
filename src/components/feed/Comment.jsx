import React from "react";
import { useHistory } from "react-router-dom";

const Comment = () => {
  const history = useHistory();
  return (
    <div>
      <div class="card my-3 single-post">
        <p class="p-3">
          comment.body This is a very long comment about this story. Lalalalal
          the sun is shining
        </p>
        <div class="card-footer single-post-meta m-0 p-1">
          <img
            class="avatar avatar-xl mx-2"
            src="https://source.unsplash.com/QAB-WJcbgJk/100x100" /*author.avatar*/
          />
          <div class="single-post-meta-details">
            <div class="single-post-meta-details-name">comment.author.name</div>
            <div class="single-post-meta-details-date">comment.date/moment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
