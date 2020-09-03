import React from 'react';

const DashboardLayout = ({ children }) => {
	return (
		<div id="DashboardLayout" className="row">
			<div className="col-sm-3 col-lg-1 d-flex justify-content-center align-items-center"></div>
			<div className="col-sm-9 col-lg-11 bg-light d-flex justify-content-center align-items-center">
						<div>{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
