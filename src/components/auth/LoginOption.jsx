import React from 'react';
import { Link } from 'react-router-dom';


const LoginOption = () => {
	return (
		<div className="d-flex flex-wrap align-items-center">
			<div className="col-lg-6 mb-lg-n10 mt-5 z-1">
				<Link
					to="/register"
					className="card text-decoration-none h-100 lift"
					href="#!"
				>
					<div className="card-body py-5">
						<div className="d-flex align-items-center">
							<div className="icon-stack icon-stack-xl bg-primary text-white flex-shrink-0">
							<i className="fas fa-user ml-1"></i>
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
			<div className="col-lg-6 mb-lg-n10 my-5 z-1">
				<Link to="/caretaker" className="card text-decoration-none h-100 lift">
					<div className="card-body py-5">
						<div className="d-flex align-items-center">
							<div className="icon-stack icon-stack-xl bg-primary text-white flex-shrink-0">
							<i className="fas fa-user-md ml-1"></i>
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
