import React, { useState, useRef, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { useForm } from 'react-hook-form';
import Spinner from '../spinner/Spinner';
import axios from 'axios';
import userPicture from '../../assets/img/login/placeholder.png';

const CreateUserProfile = () => {
	const authContext = useContext(AuthContext);
	const {
		setUserStatus,
		user: { status, id },
		loading,
		loadUserProfile
	} = authContext;
	const { handleSubmit, register, errors } = useForm();
	const [newUserProfile, setNewUserProfile] = useState({});
	const [profilePicture, setProfilePicture] = useState();

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
			setProfilePicture(res.data.location);
		} catch (err) {
			console.log(err);
		}
	};

	const triggerInputFile = e => {
		e.preventDefault();
		uploadRef.current.click();
	};

	const handleChange = e => {
		setNewUserProfile({ ...newUserProfile, [e.target.name]: e.target.value });
	};

	const onSubmit = async e => {
		e.preventDefault();
		const {
			name,
			lastName,
			dob,
			street,
			zipcode,
			phone,
			state,
			short_profile
		} = newUserProfile;
		try {
			await axios.post(`${process.env.REACT_APP_SOCIAL_SERVICE}/userprofiles`, {
				name: { first: name, last: lastName },
				username: `${name.replace(/\s/g, '').toLowerCase()}.${lastName
					.replace(/\s/g, '')
					.toLowerCase()}.${new Date().getTime()}`,
				phone,
				address: `${street} ${state} DE ${zipcode}`,
				short_description: short_profile,
				dob: Date.parse(dob.replace('.', '/')),
				profile_picture: profilePicture
			});
			setUserStatus('active');
			loadUserProfile(id);
		} catch (err) {
			console.log(err);
		}
	};
	if (loading) return <Spinner />;
	if (status === 'active') return <Redirect to="/" />;
	return (
		<div className="container">
			<div className="card rounded-lg text-dark">
				<div className="card-header py-4">Create User Profile</div>
				<div className="card-body">
					<form className="py-4">
						<div className="form-row justify-content-center">
							<div className="avatar avatar-xxl mx-2">
								<img
									className="avatar-img "
									src={profilePicture ? profilePicture : userPicture}
								/>
							</div>
							<button
								onClick={triggerInputFile}
								className="btn btn-primary btn-marketing rounded-pill my-5 mx-2"
							>
								Upload Picture
							</button>
							<input
								ref={uploadRef}
								type="file"
								name="profile_picture"
								accept="image/*"
								style={{ display: 'none' }}
								onChange={e => uploadPicture(e)}
							/>
						</div>
					</form>
					<form onSubmit={e => handleSubmit(onSubmit(e))}>
						<div className="form-row pt-2">
							<div className="form-group col-md-6">
								<label
									className="small text-gray-600"
									htmlFor="leadCapFirstName"
									name="name"
								>
									First Name <sup>*</sup>
								</label>
								<input
									className="form-control rounded-pill"
									id="leadCapFirstName"
									name="name"
									type="text"
									onChange={handleChange}
									ref={register({
										required: `The 'name' field is required`
									})}
								/>
								{errors.name && (
									<div class="alert alert-danger mt-1" role="alert">
										{errors.name.message}
									</div>
								)}
							</div>
							<div className="form-group col-md-6">
								<label
									className="small text-gray-600"
									htmlFor="leadCapLastName"
									name="lastName"
								>
									Last Name <sup>*</sup>
								</label>
								<input
									className="form-control rounded-pill"
									id="leadCapLastName"
									name="lastName"
									type="text"
									onChange={handleChange}
									ref={register({
										required: `The 'Last Name' field is required`
									})}
								/>
								{errors.lastName && (
									<div class="alert alert-danger mt-1" role="alert">
										{errors.lastName.message}
									</div>
								)}
							</div>
						</div>
						<div className="form-group">
							<label
								className="small text-gray-600"
								htmlFor="leadCapAddress"
								name="address"
							>
								Address
							</label>
						</div>
						<div className="form-row pt-2">
							<div className="form-group col-md-6">
								<label
									className="small text-gray-600"
									htmlFor="leadCapStreet"
									name="street"
								>
									Street Address
								</label>
								<input
									className="form-control rounded-pill"
									id="leadCapStreet"
									name="street"
									type="text"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group col-md-3">
								<label
									className="small text-gray-600"
									htmlFor="leadCapState"
									name="state"
								>
									State
								</label>
								<input
									className="form-control rounded-pill"
									id="leadCapState"
									type="text"
									name="state"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group col-md-3">
								<label
									className="small text-gray-600"
									htmlFor="leadCapZipcode"
									name="zipcode"
								>
									Zipcode
								</label>
								<input
									className="form-control rounded-pill"
									id="leadCapZipcode"
									name="zipcode"
									type="text"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-row justify-content-between pt-2">
							<div className="form-group">
								<label
									className="small text-gray-600"
									htmlFor="leadCapPhone"
									name="phone"
								>
									Phone Number
								</label>
								<input
									className="form-control rounded-pill"
									id="leadCapPhone"
									name="phone"
									type="text"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label
									className="small text-gray-600"
									htmlFor="leadCapDob"
									name="dob"
								>
									Birthday
								</label>
								<input
									className="form-control rounded-pill"
									id="leadCapDob"
									name="dob"
									type="text"
									placeholder="e.g. 01.01.1990"
									onChange={handleChange}
									ref={register({
										required: `The field 'birthday' is required`,
										pattern: {
											value: /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g,
											message: 'Invalid date'
										}
									})}
								/>
								{errors.dob && (
									<div class="alert alert-danger mt-1" role="alert">
										{errors.dob.message}
									</div>
								)}
							</div>
						</div>
						<div className="form-group">
							<label
								className="small text-gray-600"
								htmlFor="leadCapShortProfile"
								name="short_profile"
							>
								Tell us about yourself
							</label>
							<textarea
								className="form-control rounded-pill"
								id="leadCapShortProfile"
								name="short_profile"
								type="text"
								rows="4"
								onChange={handleChange}
							/>
						</div>
						<button
							className="btn btn-secondary btn-marketing btn-block rounded-pill mt-4"
							type="submit"
						>
							Save Changes
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateUserProfile;
