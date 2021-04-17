import React, { Component, Suspense } from 'react';
import moviesApi from '../utils/moviesApi';
import Button from '../components/Button';
import MoviesDetails from '../components/MoviesDetails'
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';
import { Route, NavLink, Switch } from 'react-router-dom';
import defaultImg from './default.jpg'

class MovieDetailsPage extends Component {
	state = {
		films: [],
		genres: [],
		// casts: [],
		// authors: [],
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
			<section>
				<Button onClick={this.handleClickButton} />
				<h1>{title} {this.movieId}</h1>
				<img
					src={
						poster_path
							? `https://image.tmdb.org/t/p/w342/${poster_path}`
							: defaultImg
					}
					alt={title} width="342" />
				<p>User Score: {this.getPercent(vote_average)}%</p>
				<h2>Overview</h2>
				<p>{overview}</p>
				<h3>Genres</h3>
				<MoviesDetails genres={genres} />
				<div>
					<h3>Additional information</h3>

					<ul className="list-group">
						<li className="list-group-item list-group-item-info">
							<NavLink
								to={{
									pathname: `${this.props.match.url}/cast`,
									state: { ...this.props.location.state },
								}}
								className=""

							>
								Cast
                </NavLink>
						</li>
						<li className="list-group-item list-group-item-info">
							<NavLink
								to={{
									pathname: `${this.props.match.url}/reviews`,
									state: { ...this.props.location.state },
								}}
								className=""

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




