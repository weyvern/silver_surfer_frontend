import React from "react";
import { useHistory } from "react-router-dom";

const Comment = () => {
  const history = useHistory();
  return (
    <div>
      <div className="card my-3 single-post">
        <p className="p-3">
          comment.body This is a very long comment about this story. Lalalalal
          the sun is shining
        </p>
        <div className="card-footer single-post-meta m-0 p-1">
          <img
            className="avatar avatar-xl mx-2"
            src="https://source.unsplash.com/QAB-WJcbgJk/100x100" /*author.avatar*/
          />
          <div className="single-post-meta-details">
            <div className="single-post-meta-details-name">comment.author.name</div>
            <div className="single-post-meta-details-date">comment.date/moment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
