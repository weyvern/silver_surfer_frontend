import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer className="footer pt-10 pb-5 mt-auto bg-white footer-light">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="footer-brand">Silver Surfer</div>
							<div className="mb-3">Build better websites</div>
						</div>
						<div className="col-lg-9">
							<div className="row">
								<div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
									<div className="text-uppercase-expanded text-xs mb-4">
										Product
									</div>
									<ul className="list-unstyled mb-0">
										<li className="mb-2">
											<a href="#">Landing</a>
										</li>
										<li className="mb-2">
											<a href="#">Pages</a>
										</li>
										<li className="mb-2">
											<a href="#">Sections</a>
										</li>
										<li className="mb-2">
											<a href="#">Documentation</a>
										</li>
										<li>
											<a href="#">Changelog</a>
										</li>
									</ul>
								</div>
								<div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
									<div className="text-uppercase-expanded text-xs mb-4">
										Technical
									</div>
									<ul className="list-unstyled mb-0">
										<li className="mb-2">
											<a href="#">Documentation</a>
										</li>
										<li className="mb-2">
											<a href="#">Changelog</a>
										</li>
										<li className="mb-2">
											<a href="#">Theme Customizer</a>
										</li>
										<li>
											<a href="#">UI Kit</a>
										</li>
									</ul>
								</div>
								<div className="col-lg-3 col-md-6 mb-5 mb-md-0">
									<div className="text-uppercase-expanded text-xs mb-4">
										Includes
									</div>
									<ul className="list-unstyled mb-0">
										<li className="mb-2">
											<a href="#">Utilities</a>
										</li>
										<li className="mb-2">
											<a href="#">Components</a>
										</li>
										<li className="mb-2">
											<a href="#">Layouts</a>
										</li>
										<li className="mb-2">
											<a href="#">Code Samples</a>
										</li>
										<li className="mb-2">
											<a href="#">Products</a>
										</li>
										<li className="mb-2">
											<a href="#">Affiliates</a>
										</li>
										<li>
											<a href="#">Updates</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<hr className="my-5" />
					<div className="row align-items-center">
						<div className="col-md-6 small">Copyright © Your Website 2020</div>
						<div className="col-md-6 text-md-right small">
							<a href="#">Privacy Policy</a>·
							<a href="#">Terms &amp; Conditions</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
