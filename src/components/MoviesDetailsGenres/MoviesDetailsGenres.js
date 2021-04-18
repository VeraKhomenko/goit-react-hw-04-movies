import React from 'react'
import PropTypes from 'prop-types';


const MoviesDetailsGenres = ({ genres }) => {
	return (
		<ul className="selector__title--second">
			{genres.map(({ id, name }) => (
				<li key={id} className="selector__item">{name}</li>
			))}
		</ul>
	)

};

MoviesDetailsGenres.propTypes = {
	genres: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		}),
	),
};

export default MoviesDetailsGenres
