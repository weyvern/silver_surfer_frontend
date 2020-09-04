import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";

import CommentList from "./CommentList";
import PostContext from "../../context/post/postContext";

const Post = () => {
 
  const history = useHistory();
  const { id } = useParams();
  const {
    stories: {data},
    getStory,
    loading,
  } = useContext(PostContext);

  useEffect(() => {
    getStory(id);
  }, []);

  
  const renderCategories = (categories) => {
    return categories.map(category => ( <div class="badge badge-pill badge-secondary font-weight-normal px-2 m-2 py-2">{category}</div>));
  }


  return !loading && data ? ( <div id="layoutDefault">
  <div id="layoutDefault_content">
    <main>
      <section class="bg-light pt-5 pb-10">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-xl-10">
            <div class="single-post">
              <div class="text-right">
                {data.categories && (
                  renderCategories(data.categories))
                }
              </div>
              <h1>{data.title}</h1>
              <p class="lead mb-5">
                {data.short_description}
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
                          {moment(data.createdAt).format("MMM Do YY")} · 6 min read
                    </div>
                  </div>
                </div>
                <div class="d-flex single-post-meta-links align-items-center">
                  <a href="#comments">
                    <i class="fas fa-comment fa-fw"></i>
                  </a>
                  <p class="m-0 mr-2">{data.comments.length? data.comments.length : 0}</p>
                  <a href="#!">
                    <i class="fas fa-thumbs-up fa-fw"></i>
                  </a>
                  <p class="m-0">{data.likes.length}</p>
                </div>
              </div>
              <div class="single-post-text my-5">
               {(data.body)}
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

            <CommentList {...data}/>
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
</div>) : (<div>Loading...</div>)
};

export default Post;
