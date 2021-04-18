import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import defaultImg from '../../views/default.jpg';
import style from './MoviesList.module.css';


const MoviesList = ({ films, location }) => {

	console.log(location.url);
	return (
		<ul className={style.filmList}>
			{films.map(({ id, title, poster_path }) =>
				<li className={style.filmItem} key={id}>
					<img
						src={poster_path
							? `https://image.tmdb.org/t/p/w92${poster_path}`
							: defaultImg
						}
						alt={title}
						className={style.filmImg}
					/>
					<Link
						to={{
							pathname: `/movies/${id}`,
							state: { from: location },
						}}
					>
						{/* // to={`${match.url}/${id}`} */}
						<p className={style.filmText}>{title}</p>

					</Link>
				</li>
			)
			}
		</ul >
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

export default withRouter(MoviesList);
