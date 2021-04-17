import React from 'react';

import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesSearch from './views/MoviesSearch';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';
import Container from './components/Container';
import './styles/base.scss';

// class App extends Component {
//   state = {
//     results: [],
//     currentPage: 1,
//     searchQuery: '',

//     title: null,
//     overview: string,
//     poster_path: null,
//     genres: [],
//   };
//   onChangeQuery = query => {
//     this.setState({
//       searchQuery: query,
//       hits: [],
//       currentPage: 1,
//       error: null,
//       isLoading: false,
//       showModal: false,
//     });
//   };

//   render() {

//     return
const App = () => (
  <Container>
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink
          exact
          to="/"
          className="nav__link"
          activeClassName="nav__link--active">Home</NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/movies"
          className="nav__link"
          activeClassName="nav__link--active" >Movies</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesSearch} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />


      <Route path="/movies/:movieId/cast" component={MovieDetailsPage} />
      <Route path="/movies/:movieId/reviews" component={MovieDetailsPage} />
      <Route component={NotFoundView} />
    </Switch>

  </Container>
);

export default App;