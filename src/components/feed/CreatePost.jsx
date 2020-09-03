import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

import axios from "axios";
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDUyNTgyMjNjYTdmNjliMGVlYWUyYiIsImlhdCI6MTU5OTA1NTgzN30.j6v36_XZpEcaTV0tykh7FN-qFiOFX6bpWYBv-XSJ1ls";

const CreatePost = () => {
  const history = useHistory();
  const [body, setBody] = useState({});
  const [newPost, setNewPost] = useState({});

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (content, editor) => {
    setBody(content);
    setNewPost({ ...newPost, body: content });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewPost({ ...newPost, body: body });
    console.log(newPost);
    if (!newPost.title || !newPost.body) {
      return window.alert(
        "Please fill out all fields before publishing your post"
      );
    }

    setNewPost({ ...newPost, status: "published" });
    sendPostData(newPost);
    /*return false;*/
  };

  const sendPostData = async (newPost) => {
    try {
      const config = {
        headers: {
          "x-Auth-token": token,
        },
      };
      const res = await axios.post(
        "http://localhost:5000/api/v1/stories",
        newPost,
        config
      );
      setNewPost({});
    } catch (err) {
      //details is an array --> go trhough all keys and pull out error messages
      console.log(err.response.data.details[0]);
      alert("Sth. went wrong");
      //form.current.reset();
    }
  };

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div className="card rounded-lg text-dark">
          <div className="card-header py-4">Create A New Story</div>
          <div className="card-body">
            <form class="py-4">
              <div className="form-group">
                <label
                  className="small text-gray-600"
                  for="leadCapTitle"
                  name="title"
                >
                  Title
                </label>
                <input
                  className="form-control rounded-pill"
                  id="leadCapTitle"
                  name="title"
                  type="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <label
                className="small text-gray-600"
                for="leadCapEmail"
                name="content"
              >
                Content
              </label>
              <Editor
                apiKey="4t1lym9dwtryzi3ddbywc3nigmhaqhmsqb7su3zpji6yjozc"
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                  height: 500,
                  menubar: true,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount emoticons",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help | emoticons",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  images_upload_url: "http://localhost:4000",

                  images_upload_handler: function (blobInfo, success, failure) {
                    var xhr, formData;
                    xhr = new XMLHttpRequest();
                    xhr.withCredentials = false;
                    xhr.open("POST", "http://localhost:4000");
                    //add here token from state
                    const token =
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmM2JkMmVmOWExNGM5MjdlY2QzZjRiOCIsImlhdCI6MTU5NzkxMTE3OH0.d7OSOKS7IHkZx6vgWK6o7fRzuf_FMkoaDty2DTTWTi0";
                    xhr.setRequestHeader("x-auth-token", token);
                    xhr.onload = function () {
                      var json;
                      if (xhr.status != 201) {
                        failure("HTTP Error: " + xhr.status);
                        return;
                      }
                      json = JSON.parse(xhr.responseText);

                      if (!json || typeof json.location != "string") {
                        failure("Invalid JSON: " + xhr.responseText);
                        return;
                      }
                      success(json.location);
                    };
                    formData = new FormData();
                    formData.append(
                      "file",
                      blobInfo.blob(),
                      blobInfo.filename()
                    );
                    xhr.send(formData);
                  },
                }}
                onEditorChange={handleEditorChange}
              />
              <button
                className="btn btn-secondary btn-marketing btn-block rounded-pill mt-4"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Submit Post
              </button>
            </form>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default CreatePost;
