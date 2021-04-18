import React, { Component } from 'react'
import MoviesList from '../components/MoviesList'
import moviesApi from '../utils/moviesApi';
import PropTypes from 'prop-types';
import '../styles/base.scss'

class HomePage extends Component {
	state = {
		films: [],
		error: null,

	};
	componentDidMount = () => {
		moviesApi
			.axiosHome()
			.then(results => this.setState({ films: results }))
			.catch((error) => this.setState({ error }))
		// .finally(this.setState({ showLoader: false }));
	}

	render() {
		// console.log(this.props.match.url)
		const { films, error } = this.state;
		return (
			<div className="selector__list">
				<h1 className="selector__title">Trending today</h1>
				<MoviesList films={films} />
				{ error && <h3 className="selector__error">{error.message}</h3>}
			</div>
		);
	}

}

HomePage.propType = {
	films: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string,
		}),
	),
};

export default HomePage
