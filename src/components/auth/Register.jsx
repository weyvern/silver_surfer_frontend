import React, { useState, useContext, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, loading, registerUser } = authContext;
	const [newUser, setNewUser] = useState({});
	const form = useRef();

	const handleChange = e => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		const { name, lastName, email, password } = newUser;
		e.preventDefault();
		if (password.length < 5) {
			return window.alert('Password needs to be longer than 5 characters.');
		}
		if (!name || !lastName || !email || !password) {
			return window.alert('Empty fields: Please fill out every field.');
		}
		registerUser(newUser);
		form.current.reset();
	};

	return !isAuthenticated && !loading ? (
		<div className="container">
			<div className="card rounded-lg text-dark">
				<div className="card-header py-4">Sign up</div>
				<div className="card-body">
					<form ref={form} onSubmit={handleSubmit}>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label
									className="small text-gray-600"
									htmlFor="leadCapFirstName"
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
									htmlFor="leadCapLastName"
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
								htmlFor="leadCapEmail"
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
								htmlFor="leadCapPassword"
								name="password"
							>
								Password
							</label>
							<input
								className="form-control rounded-pill"
								id="leadCapPassword"
								name="password"
								type="password"
								onChange={handleChange}
								required
							/>
						</div>
						<button
							className="btn btn-secondary btn-marketing btn-block rounded-pill mt-4"
							type="submit"
						>
							Register Now
						</button>
					</form>
					<div className="row py-5 justify-content-around m-0">
						<p>Already have an account?</p>
						<Link to="/login">
							<button className="btn btn-secondary btn-marketing rounded-pill">
								Go to Login
								<svg
									className="svg-inline--fa fa-arrow-right fa-w-14 ml-1"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="arrow-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									data-fa-i2svg=""
								>
									<i className="fas fa-arrow-right ml-1"></i>
								</svg>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Redirect to="/" />
	);
};

export default Register;
