import React, { useState, useContext, useRef } from 'react';
import axios from 'axios';
import userPicture from '../../assets/img/login/placeholder.png';

//import { GlobalContext } from '../Context/GlobalState';
let token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDUyNTgyMjNjYTdmNjliMGVlYWUyYiIsImlhdCI6MTU5OTA1NTgzN30.j6v36_XZpEcaTV0tykh7FN-qFiOFX6bpWYBv-XSJ1ls';

const CreateUserProfile = () => {
	const [newUserProfile, setNewUserProfile] = useState({});
	const [profilePicture, setProfilePicture] = useState();
	//const { createNewUserProfile } = useContext(GlobalContext);
	const uploadRef = useRef(null);

	const uploadPicture = async e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', e.target.files[0]);

		try {
			const res = await axios.post('http://localhost:4000/', formData);
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
		console.log(e.target);
		setNewUserProfile({ ...newUserProfile, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		const { name, lastName, email, password } = newUserProfile;
		e.preventDefault();
		/*
        //Validation

        if(password.length < 5) {
            return window.alert("Password needs to be longer than 5 characters.");
        }

        if(!name || !lastName || !nemail || !password) {
            return window.alert("Empty fields: Please fill out every field.");
        }

        let UserProfile = newUserProfile;
        createNewUser(UserProfile);
        
        setNewUserProfile({});*/
	};

	return (
		<div className="container">
			<div className="card rounded-lg text-dark">
				<div className="card-header py-4">Create User Profile</div>
				<div className="card-body">
					<form class="py-4">
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
					<form onSubmit={handleSubmit}>
						<div className="form-row pt-2">
							<div className="form-group col-md-6">
								<label
									className="small text-gray-600"
									for="leadCapFirstName"
									name="name"
								>
									First Name
								</label>
								<input
									className="form-control rounded-pill"
									id="leadCapFirstName"
									name="name"
									type="text"
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group col-md-6">
								<label
									className="small text-gray-600"
									for="leadCapLastName"
									name="lastName"
								>
									Last Name
								</label>
								<input
									className="form-control rounded-pill"
									id="leadCapLastName"
									name="lastName"
									type="text"
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="form-group">
							<label
								className="small text-gray-600"
								for="leadCapEmail"
								name="email"
							>
								Email address
							</label>
							<input
								className="form-control rounded-pill"
								id="leadCapEmail"
								name="email"
								type="email"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-group">
							<label
								className="small text-gray-600"
								for="leadCapAddress"
								name="address"
							>
								Address
							</label>
						</div>
						<div className="form-row pt-2">
							<div className="form-group col-md-6">
								<label
									className="small text-gray-600"
									for="leadCapStreet"
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
									for="leadCapState"
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
									for="leadCapZipcode"
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
									for="leadCapPhone"
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
									for="leadCapDob"
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
									required
								/>
							</div>
						</div>
						<div className="form-group">
							<label
								className="small text-gray-600"
								for="leadCapShortProfile"
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
