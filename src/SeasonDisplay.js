import React from 'react';
import PropTypes from 'prop-types';

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth);

	const text =
		season === 'winter' ? 'Brrrr, Ice Cold!' : 'Its getting hot in here!';
	const icon = season === 'winter' ? 'grey snowflake' : 'yellow sun';

	return (
		<div>
			<i className={`massive ${icon} icon`}></i>
			<h1>{text}</h1>
			<i className={`massive ${icon} icon`}></i>
		</div>
	);
};

SeasonDisplay.propTypes = {};

export default SeasonDisplay;
