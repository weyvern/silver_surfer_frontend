import React from 'react';
import spinner from '../assets/spinner.gif';

const Spinner = () => {
	return (
		<div className="spinner">
			<img src={spinner} alt="Loading" className="img-fluid" />
		</div>
	);
};

export default Spinner;
