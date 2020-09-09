import React from 'react';
import spinner from '../../assets/img/spinner.jpg';

const Spinner = () => {
	return (
		<div className="container">
			<img src={spinner} alt="Loading" className="img-fluid" />
		</div>
	);
};

export default Spinner;
