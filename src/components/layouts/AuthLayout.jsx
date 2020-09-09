import React from 'react';
import Picture from '../../assets/img/login/login_page.jpg';

const AuthLayout = ({ children }) => {
	return (
		<div id="AuthLayout" className="row">
			<div className="col-lg-5 d-none d-lg-block">
				<div className="container d-flex h-100 flex-column justify-content-center align-items-center">
					<h1 className="page-header-title">Silver Surfer</h1>
					<p className="page-header-text mb-5">Happiness is not about age</p>
					<div>
						<img className="img-fluid" src={Picture} />
					</div>
				</div>
			</div>

			<div className="col-lg-7 bg-gradient-primary-to-secondary d-flex justify-content-center align-items-center">
				<div>{children}</div>
			</div>
		</div>
	);
};

export default AuthLayout;
