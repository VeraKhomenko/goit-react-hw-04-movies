import React from 'react'
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import defaultImg from '../../views/default.jpg';
const MoviesList = ({ films }) => {
	return (
		<ul>
			{films.map(({ id, title, backdrop_path }) =>

				<li key={id}>
					<Link to={{ pathname: `/movies/${id}` }}>
						<img
							src={backdrop_path
								? `https://image.tmdb.org/t/p/w92${backdrop_path}`
								: defaultImg
							}
							alt={title}
							width="120"
							className=""
						/>

						<p>{title}</p>

					</Link>
				</li>
			)
			}
		</ul>
	);
};
MoviesList.propTypes = {
	films: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
		}),
	),
};

export default MoviesList
