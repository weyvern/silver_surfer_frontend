
import placeholderPicture from '../../assets/img/feed/placeholder.jpg';
import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import imageUploadHandler from '../../utils/imageUploadHandler';

import axios from 'axios';
const CreatePost = () => {
	const history = useHistory();
	const [body, setBody] = useState({});
	const [newPost, setNewPost] = useState({});
	const [heroPicture, setHeroPicture] = useState();

	const uploadRef = useRef(null);


  const uploadPicture =  async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    
    try {
        const res = await axios.post("http://localhost:4000/", formData)
        setHeroPicture(res.data.location);
        console.log(res.data.location);
    } catch (err) {
        console.log(err)
    }
}

	const triggerInputFile = e => {
		e.preventDefault();
		uploadRef.current.click();
	};


  const handleEditorChange = (content, editor) => {
    setBody(content);
    setNewPost({ ...newPost, body: content, media: heroPicture });
  };

	const handleChange = e => {
		setNewPost({ ...newPost, [e.target.name]: e.target.value });
	};


	const handleSubmit = e => {
		e.preventDefault();
		setNewPost({ ...newPost, body: body });
		console.log(newPost);
		if (!newPost.title || !newPost.body) {
			return window.alert(
				'Please fill out all fields before publishing your post'
			);
		}

		setNewPost({ ...newPost, status: 'published' });
		sendPostData(newPost);
		/*return false;*/
	};

	const sendPostData = async newPost => {
		try {
			const res = await axios.post(
				'http://localhost:5000/api/v1/stories',
				newPost
			);
			setNewPost({});
		} catch (err) {
			//details is an array --> go trhough all keys and pull out error messages
			console.log(err.response.data.details[0]);
			alert('Sth. went wrong');
			//form.current.reset();
		}
	};


  return (
    <div class="p-2">
      <div class="row justify-content-center pb-4">
        <div className="card rounded-lg text-dark">
          <div className="card-header py-4">Create A New Story</div>
          <div className="card-body">
            <form class="py-4">
              <div className="form-group py-2">
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
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group py-2">
                <label
                  className="small text-gray-600"
                  for="leadCapShortDescription"
                  name="short_description"
                >
                  Short Description
                </label>
                <textarea
                  className="form-control rounded-pill"
                  id="leadCapShortDescription"
                  name="short_description"
                  type="text"
                  rows="4"
                  onChange={handleChange}
                  required
                />
              </div>


              
              <div className="form-group py-2"> 
              <label
                  className="small text-gray-600"
                  name="media"
                >
                  Hero Image
                </label>
                <div className="form-row justify-content-center">
                  <div className="mx-2"><img className="img-fluid mb-2" src={heroPicture ? heroPicture : placeholderPicture} style={{height: "100%", maxWidth: "680px", width: "100%", display: "block", marginLeft: "auto", marginRight: "auto"}} /></div>
                  <button onClick={triggerInputFile} className="btn btn-primary btn-marketing rounded-pill mx-2 align-self-center">Upload Picture</button>
                  <input ref={uploadRef} type="file" name="media" accept="image/*" style={{display: "none"}} onChange={(e) => uploadPicture(e)}/>
                  </div>
              </div>

              <div className="form-group py-2">
              <label
                className="small text-gray-600"
                for="leadCapContent"
                name="content"
              >
                Content
              </label>
			  <Editor
                apiKey="4t1lym9dwtryzi3ddbywc3nigmhaqhmsqb7su3zpji6yjozc"
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                  height: 500,
                  width: "100%",
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

              
            

									images_upload_handler: imageUploadHandler
								}}
								onEditorChange={handleEditorChange}
							/>
			  </div>
              
							<button
								className="btn btn-secondary btn-marketing btn-block rounded-pill mt-4"
								type="submit"
								onClick={e => handleSubmit(e)}
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
				</svg>{' '}
				Back
			</button>
		</div>
	);

};

export default CreatePost;
