import React, { Component } from 'react'
import queryString from 'query-string';
import SearchMovie from '../components/SearchMovie'
import MoviesList from '../components/MoviesList'
import '../styles/base.scss';
import moviesApi from '../utils/moviesApi';
import '../styles/base.scss'

class MoviesSearch extends Component {
	state = {
		films: [],
		searchQuery: '',
		error: null,
	};
	componentDidMount = () => {
		const { search, pathname } = this.props.location;
		if (search && pathname) {
			this.setState({
				searchQuery: queryString.parse(search).query,
			});
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchQuery !== this.state.searchQuery) {
			this.fetchFilms();
		}
	}
	onChangeQuery = query => {
		const { history, location } = this.props;
		this.setState({
			searchQuery: query,
			films: [],
			error: null,
		});
		history.push({
			...location,
			search: `query=${query}`,
		});
	};


	fetchFilms() {
		const { searchQuery, error } = this.state;

		const options = { searchQuery, error };
		if (!searchQuery) {
			return;
		}

		moviesApi
			.axiosSearchMovie(options)
			.then(({ results }) => {

				if (results.length === 0) {
					throw new Error('No matches were found! Try again!');
				}

				this.setState({
					films: [ ...results ],
				});
			})

			.catch(error => this.setState({ error }));



	}

	render() {
		const { films, error } = this.state;
		return (
			<div>
				{/* <h1>страница поиска фильмов по ключевому слову</h1> */}
				<SearchMovie onSubmit={this.onChangeQuery} />
				<div className="selector__list">
					<MoviesList films={films} />
				</div>
			</div>

		)
	}

}
export default MoviesSearch



