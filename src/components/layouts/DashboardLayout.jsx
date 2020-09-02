import React from 'react';
import Picture from '../../assets/img/login/login_page.jpg';

const DashboardLayout = ({ children }) => {
	return (
		<div id="AuthLayout" class="row">
			<div class="col-lg-3 d-flex justify-content-center align-items-center">
				<div class="container">
					<h1 class="page-header-title">This is your dashboard</h1>
					<p class="page-header-text mb-5">You like it??</p>
					<div>
						<img class="img-fluid" src={Picture} />
					</div>
				</div>
			</div>

			<div class="col-lg-9 bg-light d-flex justify-content-center align-items-center">
				<div class="page-header-content">
					<div class="container">
						<div>{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
