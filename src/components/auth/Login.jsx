import React, { useState, useContext, useRef } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link, Redirect } from 'react-router-dom';

const Login = () => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, loading, loginUser } = authContext;
	const [user, setUser] = useState({});
	const form = useRef();
	const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const handleSubmit = e => {
		const { email, password } = user;
		e.preventDefault();
		if (!email || !password)
			return window.alert('Please provide you email and password');
		loginUser(user);
	};

	return !isAuthenticated && !loading ? (
		<div>
			<div className="card rounded-lg text-dark">
				<div className="card-header py-4">Sign in</div>
				<div className="card-body">
					<form ref={form} onSubmit={handleSubmit}>
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
							Login Now
						</button>
					</form>
					<div className="py-5 text-center">
						<p>No account yet?</p>
						<Link to="/register">
							<button className="btn btn-secondary btn-marketing rounded-pill">
								Go to Register
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

export default Login;
