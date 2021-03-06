import React, { useState, useRef, useContext, useEffect } from 'react';
import placeholderPicture from '../../assets/img/feed/placeholder.jpg';
import { useHistory } from 'react-router-dom';
import PostContext from '../../context/post/postContext';
import AuthContext from '../../context/auth/authContext';
import { Editor } from '@tinymce/tinymce-react';
import imageUploadHandler from '../../utils/imageUploadHandler';

import axios from 'axios';
const CreatePost = () => {
	const { postStory } = useContext(PostContext);
	const { userProfile } = useContext(AuthContext);

	useEffect(() => {
		userProfile && setNewPost({ ...newPost, author_id: userProfile._id });
	}, [userProfile]);
	const history = useHistory();
	const [body, setBody] = useState({});
	const [newPost, setNewPost] = useState({});
	const [heroPicture, setHeroPicture] = useState();

	const uploadRef = useRef(null);

	const uploadPicture = async e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', e.target.files[0]);

		try {
			const res = await axios.post(
				process.env.REACT_APP_IMAGE_UPLOAD_SERVICE,
				formData
			);
			setHeroPicture(res.data.location);
		} catch (err) {
			console.log(err);
		}
	};

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
		//setNewPost({ ...newPost, body: body });
		setNewPost({
			...newPost,
			body: body,
			status: 'published'
		});

		if (!newPost.title || !newPost.body) {
			return window.alert(
				'Please fill out all fields before publishing your post'
			);
		}
		postStory(newPost);
		setNewPost({});
		history.push('/feed');
	};

	return (
		<div className="p-2">
			<div className="row justify-content-center pb-4">
				<div className="card rounded-lg text-dark">
					<div className="card-header py-4">Create A New Story</div>
					<div className="card-body">
						<form className="py-4">
							<div className="form-group py-2">
								<label
									className="small text-gray-600"
									htmlFor="leadCapTitle"
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
									htmlFor="leadCapShortDescription"
									name="short_description"
								>
									Short Description
								</label>
								<textarea
									className="form-control rounded-lg"
									id="leadCapShortDescription"
									name="short_description"
									type="text"
									rows="4"
									onChange={handleChange}
									required
								/>
							</div>

							<div className="form-group py-2">
								<label className="small text-gray-600" name="media">
									Hero Image
								</label>
								<div className="form-row justify-content-center">
									<div className="mx-2">
										<img
											className="img-fluid mb-2"
											src={heroPicture ? heroPicture : placeholderPicture}
											style={{
												height: '100%',
												maxWidth: '680px',
												width: '100%',
												display: 'block',
												marginLeft: 'auto',
												marginRight: 'auto'
											}}
										/>
									</div>
									<button
										onClick={triggerInputFile}
										className="btn btn-primary btn-marketing rounded-pill mx-2 align-self-center"
									>
										Upload Picture
									</button>
									<input
										ref={uploadRef}
										type="file"
										name="media"
										accept="image/*"
										style={{ display: 'none' }}
										onChange={e => uploadPicture(e)}
									/>
								</div>
							</div>

							<div className="form-group py-2">
								<label
									className="small text-gray-600"
									htmlFor="leadCapContent"
									name="content"
								>
									Content
								</label>
								<Editor
									apiKey="4t1lym9dwtryzi3ddbywc3nigmhaqhmsqb7su3zpji6yjozc"
									initialValue="<p>This is the initial content of the editor</p>"
									init={{
										height: 500,
										width: '100%',
										menubar: true,
										plugins: [
											'advlist autolink lists link image charmap print preview anchor',
											'searchreplace visualblocks code fullscreen',
											'insertdatetime media table paste code help wordcount emoticons'
										],
										toolbar:
											'undo redo | formatselect | ' +
											'bold italic backcolor | alignleft aligncenter ' +
											'alignright alignjustify | bullist numlist outdent indent | ' +
											'removeformat | help | emoticons',
										content_style:
											'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
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
