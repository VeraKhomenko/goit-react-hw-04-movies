import React from 'react'
import PropTypes from 'prop-types';


const MoviesDetails = ({ genres }) => {
	return (
		<ul>
			{genres.map(({ id, name }) => (
				<li key={id}>{name}</li>
			))}
		</ul>
	)

};

MoviesDetails.propTypes = {
	genres: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		}),
	),
};

export default MoviesDetails
