import React from "react";
import { useHistory } from "react-router-dom";

import Comments from './Comments';

const SinglePost = () => {
  const history = useHistory();
  return (
    <div id="layoutDefault">
      <div id="layoutDefault_content">
        <main>
          <section class="bg-light py-10">
            
              <div class="row justify-content-center">
                <div class="col-lg-12 col-xl-10">
                  <div class="single-post">
                    <h1>story.title</h1>
                    <p class="lead mb-5">
                      Empower communities and energize engaging ideas; scale and
                      impact do-gooders while disruptring industries. Venture
                      philanthropy benefits corporations and people by moving
                      the needle.
                    </p>
                    <div class="d-flex align-items-center justify-content-between mb-5">
                      <div class="single-post-meta mr-4">
                        <img
                          class="avatar avatar-xl mx-2"
                          src="https://source.unsplash.com/QAB-WJcbgJk/100x100" /*author.avatar*/
                        />
                        <div class="single-post-meta-details">
                          <div class="single-post-meta-details-name">
                            author.name
                          </div>
                          <div class="single-post-meta-details-date">
                            story.date/moment &middot; 6 min read
                          </div>
                        </div>
                      </div>
                      <div class="d-flex single-post-meta-links align-items-center">
                          <a href="#comments"><i class="fas fa-comment fa-fw"></i></a>
                          <p class="m-0 mr-2">story.comments.length</p>
                          <a href="#!"><i class="fas fa-thumbs-up fa-fw"></i></a>
                          <p class="m-0">story.likes.length</p>
                      </div>
                    </div>

                    <div class="single-post-text my-5">
                      Here comes the story.body
                      <div class="text-center mt-3">
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
                  </div>
                  
                    <Comments />
                 
                  </div>
              </div>
           
            <div class="svg-border-rounded text-dark">
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
  );
};

export default SinglePost;
