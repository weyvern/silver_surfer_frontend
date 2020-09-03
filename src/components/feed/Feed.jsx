import React from "react";
import { useHistory } from "react-router-dom";

const Feed = () => {
  const history = useHistory();

  const renderFeed = () => {
    return (
      <a class="card post-preview mb-5 text-decoration-none" href="#!">
        <div class="row no-gutters">
          <div class="col-lg-5">
            <div
              class="post-preview-featured-img"
              style={{
                backgroundImage:
                  "url(&quot;https://source.unsplash.com/vZJdYl5JVXY/660x360&quot;)",
              }}
            ></div>
          </div>
          <div class="col-lg-7">
            <div class="card-body">
              <div class="py-5">
                <h5 class="card-title">story.title</h5>
                <p class="card-text">story.short_description</p>
              </div>
              <hr />
              <div class="post-preview-meta">
                <img
                  class="post-preview-meta-img"
                  src="https://source.unsplash.com/QAB-WJcbgJk/100x100"
                />
                <div class="post-preview-meta-details">
                  <div class="post-preview-meta-details-name">story.author</div>
                  <div class="post-preview-meta-details-date">
                    story.date/moment · 6 min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <section id="#feed">
      <div class="posts">{renderFeed()}</div>

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
        Back
      </button>
    </section>
  );
};

export default Feed;
