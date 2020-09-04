import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import GlobalContext from "../../context/global/globalContext";

const Feed = () => {
  const history = useHistory();
  const { stories, getStories, loading } = useContext(GlobalContext);

  useEffect(() => {
    getStories();
  }, []);

  const renderPosts = (stories) => {
	if(loading)  return  (
		/*<img src={spinner} alt='loading' className='d-block mx-auto' />*/
		<p>I am loading</p>
	  );
    return stories.map(story => (
	<Link className="card post-preview mb-5 text-decoration-none" key={story._id} to={story._id}>
        <div className="row no-gutters">
          <div className="col-lg-5">
		  {story.media && (
				  <div
				  className="post-preview-featured-img"
				  style={{
					background: `url(${
						story.media
					}) no-repeat`,
					backgroundSize: "cover"
				}}
				></div>
            )}
            
          </div>
          <div className="col-lg-7">
            <div className="card-body">
              <div className="py-5">
                <h5 className="card-title">{story.title}</h5>
                <p className="card-text">{story.short_description}</p>
              </div>
              <hr />
              <div className="post-preview-meta">
                <img
                  className="post-preview-meta-img"
                  src="https://source.unsplash.com/QAB-WJcbgJk/100x100"
                />
                <div className="post-preview-meta-details">
                  <div className="post-preview-meta-details-name">{story.author}</div>
                  <div className="post-preview-meta-details-date">
                    {story.date}/moment · 6 min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
	  </Link>
	  ));
  };

  return (
    <section id="#feed">
      <div className="posts">{renderPosts(stories)}</div>

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
