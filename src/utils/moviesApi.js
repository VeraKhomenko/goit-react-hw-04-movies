import axios from 'axios';
import { apiKey } from './keyApi'

const originURL = 'https://api.themoviedb.org/3';

const axiosHome = (query) => {

	return axios
		.get(`${originURL}/movie/popular?api_key=${apiKey}&query=${query}&page=1`)
		.then((response) => response.data.results)
		.catch(error => error);
};

const axiosSearchMovie = ({ searchQuery = '' }) => {

	return axios
		.get(`${originURL}/search/movie?api_key=${apiKey}&query=${searchQuery}`)
		.then((response) => response.data)
		.catch(error => error);
};

const axiosMovieDetails = (movieId) => {

	return axios

		.get(`${originURL}/movie/${movieId}?api_key=${apiKey}&language=en-US`)
		// .then(({ response }) => console.log(response))
		.then((response) => response.data)
		.catch(error => error);

};

const axiosCast = (movieId) => {
	return axios
		.get(`${originURL}/movie/${movieId}/credits?api_key=${apiKey}`)
		.then((response) => response.data)
		.catch(error => error);
};

const axiosReviews = (movieId) => {
	return axios
		.get(`${originURL}/movie/${movieId}/reviews?api_key=${apiKey}`)
		.then((response) => response)
		.catch(error => error);

};

export default {
	axiosHome,
	axiosSearchMovie,
	axiosMovieDetails,
	axiosCast,
	axiosReviews,
}