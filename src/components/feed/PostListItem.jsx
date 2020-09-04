import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PostListItem = ({ story }) => {
  return (
    <Link
      className="m-2 card post-preview mb-5 text-decoration-none"
      key={story._id}
      to={`/feed/${story._id}`}
    >
      <div className="row h-100 no-gutters">
        <div className="col-lg-5">
          {story.media && (
            <div
              className="post-preview-featured-img"
              style={{
                background: `url(${story.media}) no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          )}
        </div>
        <div className="col-lg-7">
          <div className="card-body h-100 d-flex flex-column justify-content-between">
            <h5 className="card-title text-truncate">{story.title}</h5>
            <p className="" style={{whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis"}}>{story.short_description}</p>
          <div>
          <hr />
            <div className="post-preview-meta justify-content-between">
              <div class="d-flex align-items-center">
                <img
                  className="post-preview-meta-img"
                  src="https://source.unsplash.com/QAB-WJcbgJk/100x100" /*author_avatar*/
                />
                <div className="post-preview-meta-details">
                  <div className="post-preview-meta-details-name">
                    {story.author}
                  </div>
                  <div className="post-preview-meta-details-date">
                    {moment(story.createdAt).format("MMM Do YY")} · 6 min read
                  </div>
                </div>
              </div>

              <div class="d-flex single-post-meta-links align-items-center">
                <a href="#comments">
                  <i class="fas fa-comment fa-fw"></i>
                </a>
                <p class="m-0 mr-2">{story.comments.length}</p>
               
                  <i class="fas fa-thumbs-up fa-fw"></i>
              
                <p class="m-0">{story.likes.length}</p>
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
