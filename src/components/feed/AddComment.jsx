import React, { useState } from "react";
import axios from "axios";

const AddComment = () => {
  const [newComment, setNewComment] = useState({});

  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(newComment);
    if (!newComment.body) {
      return window.alert(
        "Please fill out all fields before publishing your post"
      );
    }

    sendCommentData(newComment);
    /*return false;*/
  };

  const sendCommentData = async (newComment) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/stories/:id/comments",
        newComment
      );
      setNewComment({});
    } catch (err) {
      //details is an array --> go trhough all keys and pull out error messages
      console.log(err.response.data.details[0]);
      alert("Sth. went wrong");
      //form.current.reset();
    }
  };

  return (
    <div class="card">
      <div class="card-header">Add a Comment</div>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div className="avatar avatar-xl mx-2">
            <img
              className="avatar-img"
              src="https://source.unsplash.com/QAB-WJcbgJk/100x100"
            />
          </div>

          <form
            class="d-flex"
            style={{ width: "100%" }}
            onSubmit={handleSubmit}
          >
            <textarea
              className="form-control rounded-pill mx-2"
              id="leadCapBody"
              name="body"
              width="100%"
              type="text"
              rows="4"
              columns="100"
              placeholder="Please tell us what you think"
              onChange={handleChange}
            />

            <button
              className="btn btn-secondary btn-marketing btn-lg rounded-pill mt-4"
              type="submit"
              style={{ maxHeight: "4rem" }}
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
