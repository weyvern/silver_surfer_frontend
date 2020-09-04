import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import PostContext from "../../context/post/postContext";
import PostListItem from "./PostListItem";

const PostList = () => {
  const history = useHistory();
  const {
    stories: { data },
    getStories,
    loading,
  } = useContext(PostContext);

  useEffect(() => {
    getStories();
  }, []);

  const renderPosts = () => {
    console.log(data);
    if (loading)
      return (
        /*<img src={spinner} alt='loading' className='d-block mx-auto' />*/
        <p>I am loading</p>
      );
    return data.map((story) => <PostListItem story={story} key={story._id} />);
  };

  return (
    <section id="#feed">
      <div className="posts">{renderPosts()}</div>
	  <div class="text-center">
	  <button
        className="btn btn-primary btn-marketing rounded-pill m-4"
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
	  </div>
     
    </section>
  );
};

export default PostList;
