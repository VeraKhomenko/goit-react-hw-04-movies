import React, { Component } from 'react';

import PropTypes from 'prop-types';

import moviesApi from '../../utils/moviesApi'; //import файла, который прописывает логику настроек Api для http-запросов

import style from './Cast.module.css'

import defaultImg from '../../views/default.jpg';

class Cast extends Component {
	state = {
		casts: [],
		error: null,
	};


	componentDidMount = () => {
		const { movieId } = this.props.match.params;
		moviesApi
			.axiosCast(movieId)
			.then((response) => {

				if (response.cast.length === 0) {
					throw new Error(
						'There is no information about the cast.',
					);
				}
				this.setState({
					casts: [ ...response.cast ],
				});
			})

	}
	// Для плавной прокрутки
	//         window.scrollTo({
	//           top: document.documentElement.scrollHeight,
	//           behavior: 'smooth',
	//         });
	//       })
	//       .catch(error => this.setState({ error }));


	render() {
		const { casts, error } = this.state;

		return (
			<>
				<ul className="">
					{casts.map(({ id, name, character, profile_path }) => (
						<li key={id} className="">
							<img
								src={profile_path
									? `https://image.tmdb.org/t/p/w92${profile_path}`
									: defaultImg
								}
								alt={name}
								width="92"
								className=""
							/>
							<p>{name}</p>
							<p>Character: {character}</p>
						</li>
					))}
				</ul>

				{ error && <h3 className="">{error.message}</h3>}
			</>
		);
	}
}

Cast.propTypes = {
	movieId: PropTypes.string,
};

export default Cast;