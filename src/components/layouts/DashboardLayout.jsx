import React from 'react';
import Picture from '../../assets/img/login/login_page.jpg';

const DashboardLayout = ({ children }) => {
	return (
		<div id="AuthLayout" className="row">
			<div className="col-sm-3 col-lg-1 d-flex justify-content-center align-items-center"></div>
			<div className="col-sm-9 col-lg-11 bg-light d-flex justify-content-center align-items-center">
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
