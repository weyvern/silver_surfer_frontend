import React from 'react';
import { Link } from 'react-router-dom';

const LoginOption = () => {
	
	return (
		<div className="d-flex">
			<div className="col-lg-6 mb-lg-n10 mb-5 mb-lg-0 z-1">
				<Link
					to="/register"
					className="card text-decoration-none h-100 lift"
					href="#!"
				>
					<div className="card-body py-5">
						<div className="d-flex align-items-center">
							<div className="icon-stack icon-stack-xl bg-primary text-white flex-shrink-0">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="feather feather-activity"
								>
									<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
								</svg>
							</div>
							<div className="ml-4">
								<h5 className="text-primary">60+</h5>
								<p className="card-text text-gray-600">
									Learn more about how our product can save you time and effort
									in the long run!
								</p>
								<button className="btn btn-secondary btn-marketing rounded-pill mr-3 my-2 lift lift-sm">
									Click here
								</button>
							</div>
						</div>
					</div>
				</Link>
			</div>
			<div className="col-lg-6 mb-lg-n10 mb-5 mb-lg-0 z-1">
				<Link to="/caretaker" className="card text-decoration-none h-100 lift">
					<div className="card-body py-5">
						<div className="d-flex align-items-center">
							<div className="icon-stack icon-stack-xl bg-primary text-white flex-shrink-0">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="feather feather-activity"
								>
									<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
								</svg>
							</div>
							<div className="ml-4">
								<h5 className="text-primary">Caretaker</h5>
								<p className="card-text text-gray-600">
									Learn more about how our product can save you time and effort
									in the long run!
								</p>
								<button className="btn btn-secondary btn-marketing rounded-pill mr-3 my-2 lift lift-sm">
									Click here
								</button>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default LoginOption;
