import React, { Component } from 'react';

import PropTypes from 'prop-types';

import moviesApi from '../../utils/moviesApi'; //import файла, который прописывает логику настроек Api для http-запросов

import style from './Reviews.module.css'


class Reviews extends Component {
	state = {
		reviews: [],
		error: null,
	};


	componentDidMount = () => {
		const { movieId } = this.props.match.params;
		moviesApi
			.axiosReviews(movieId)
			.then((response) => {

				if (response.data.results.length === 0) {
					throw new Error(
						'There are no reviews for this movie.',
					);
				}
				this.setState({
					reviews: [ ...response.data.results ],
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
		const { reviews, error } = this.state;

		return (
			<>
				<ul>
					{reviews.map(({ id, author, content }) => (
						<li key={id}>
							<h4> Author: {author}</h4>
							<p>{content}</p>
						</li>
					))}
				</ul>

				{ error && <h3 className="">{error.message}</h3>}
			</>
		);
	}
}

Reviews.propTypes = {
	movieId: PropTypes.string,
};

export default Reviews;