import React from 'react';
import './Spinner.scss';

const Spinner = () => {
	return (
		<span className="loadingState">
			<i className="fa-solid fa-spinner"></i>
		</span>
	);
};

export default Spinner;
