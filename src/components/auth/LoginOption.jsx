import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const LoginOption = () => {
	const history = useHistory();
	return (
		<div class="d-flex">
			<div class="col-lg-6 mb-lg-n10 mb-5 mb-lg-0 z-1">
				<Link
					to="/register"
					class="card text-decoration-none h-100 lift"
					href="#!"
				>
					<div class="card-body py-5">
						<div class="d-flex align-items-center">
							<div class="icon-stack icon-stack-xl bg-primary text-white flex-shrink-0">
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
									class="feather feather-activity"
								>
									<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
								</svg>
							</div>
							<div class="ml-4">
								<h5 class="text-primary">60+</h5>
								<p class="card-text text-gray-600">
									Learn more about how our product can save you time and effort
									in the long run!
								</p>
								<button class="btn btn-secondary btn-marketing rounded-pill mr-3 my-2 lift lift-sm">
									Click here
								</button>
							</div>
						</div>
					</div>
				</Link>
			</div>
			<div class="col-lg-6 mb-lg-n10 mb-5 mb-lg-0 z-1">
				<Link to="/caretaker" class="card text-decoration-none h-100 lift">
					<div class="card-body py-5">
						<div class="d-flex align-items-center">
							<div class="icon-stack icon-stack-xl bg-primary text-white flex-shrink-0">
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
									class="feather feather-activity"
								>
									<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
								</svg>
							</div>
							<div class="ml-4">
								<h5 class="text-primary">Caretaker</h5>
								<p class="card-text text-gray-600">
									Learn more about how our product can save you time and effort
									in the long run!
								</p>
								<button class="btn btn-secondary btn-marketing rounded-pill mr-3 my-2 lift lift-sm">
									Click here
								</button>
							</div>
						</div>
					</div>
				</Link>
				<button
					class="btn btn-primary btn-marketing rounded-pill"
					onClick={() => history.goBack()}
				>
					<svg
						class="svg-inline--fa fa-arrow-right fa-w-14 ml-1"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="arrow-left"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						data-fa-i2svg=""
					>
						<i class="fas fa-arrow-left ml-1"></i>
					</svg>{' '}
					Back
				</button>
			</div>
		</div>
	);
};

export default LoginOption;
