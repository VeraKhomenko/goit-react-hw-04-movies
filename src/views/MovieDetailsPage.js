import React, { Component, Suspense, lazy } from 'react';
import moviesApi from '../utils/moviesApi';
import Button from '../components/Button';

import routes from '../routes';
import { Route, NavLink, Switch } from 'react-router-dom';
import defaultImg from './default.jpg'
import '../styles/base.scss'
import MoviesDetailsGenres from '../components/MoviesDetailsGenres';

const Cast = lazy(() =>
	import('../components/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
	import('../components/Reviews' /* webpackChunkName: "reviews" */)
);

class MovieDetailsPage extends Component {
	state = {
		films: [],
		genres: [],
		error: null,
	};

	componentDidMount = () => {
		const { movieId } = this.props.match.params;
		moviesApi
			.axiosMovieDetails(movieId)
			.then((response) => {
				this.setState({
					films: response,
					genres: [ ...response.genres ]
				})
			})

			.catch((error) => this.setState({ error }))
	}


	getPercent = vote => vote * 10; //User Score

	handleClickButton = () => {
		const { location, history } = this.props;
		history.push(location?.state?.from || routes.home);
	}


	render() {
		const {
			title,
			poster_path,
			overview,
			vote_average,
		} = this.state.films;

		const { genres, error } = this.state;
		return (
			<section className="selector__details">
				<Button onClick={this.handleClickButton} />
				<section className="selector">
					<img width='250'
						src={
							poster_path
								? `https://image.tmdb.org/t/p/w342/${poster_path}`
								: defaultImg
						}
						alt={title} />
					<div className="selector__blok">
						<h1 className="selector__title">{title} {this.movieId}</h1>
						<h2 className="selector__title--second">User Score:</h2>
						<p className="selector__text">{this.getPercent(vote_average)}%</p>
						<h2 className="selector__title--second">Overview</h2>
						<p className="selector__text">{overview}</p>
						<h3 className="selector__title--second">Genres</h3>
						<MoviesDetailsGenres genres={genres} />
					</div>
				</section>
				<div>
					<h3 className="additional__title">Additional information</h3>

					<ul className="additional__list">
						<li>
							<NavLink
								to={{
									pathname: `${this.props.match.url}/cast`,
									state: { ...this.props.location.state },
								}}
								className="additional__item"
							>
								Cast
                </NavLink>
						</li>
						<li>
							<NavLink
								to={{
									pathname: `${this.props.match.url}/reviews`,
									state: { ...this.props.location.state },
								}}
								className="additional__item"

							>
								Reviews
                </NavLink>
						</li>
					</ul>

					<Suspense fallback={<h2>Loading...</h2>}>
						<Switch>
							<Route
								exact
								path={`${this.props.match.path}/cast`}
								// render={props => (
								// 	<Cast {...props} costs={this.state.costs} />
								// )}

								component={Cast}
							/>

							<Route
								exact
								path={`${this.props.match.path}/reviews`}
								// render={props => (
								// 	<Reviews {...props} reviews={this.state.reviews} />
								// )}
								component={Reviews}
							/>
						</Switch>
					</Suspense>
				</div>

				{error && <h3 className="">{error.message}</h3>}
			</section>
		);
	}

}

export default MovieDetailsPage




