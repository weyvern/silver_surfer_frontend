import React from 'react';
import Picture from '../../assets/img/login/login_page.jpg';

const DashboardLayout = ({ children }) => {
	return (
		<div id="AuthLayout" className="row">
			<div className="col-lg-3 d-flex justify-content-center align-items-center">
				<div className="container">
					<h1 className="page-header-title">This is your dashboard</h1>
					<p className="page-header-text mb-5">You like it??</p>
					<div>
						<img className="img-fluid" src={Picture} />
					</div>
				</div>
			</div>

			<div className="col-lg-9 bg-light d-flex justify-content-center align-items-center">
				<div className="page-header-content">
					<div className="container">
						<div>{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
