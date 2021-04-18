import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar'
import Container from './components/Container';

import routes from './routes';

const MoviesSearch = lazy(() =>
  import('./views/MoviesSearch' /* webpackChunkName: "movies-search" */)
);
const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "home-page" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */));
const NotFoundView = lazy(() => import('./views/NotFoundView' /* webpackChunkName: "not-fund-view" */));

const App = () => (
  <Container>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesSearch} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />


        <Route path={routes.movieDetailsCast} component={MovieDetailsPage} />
        <Route path={routes.movieDetailsReviews} component={MovieDetailsPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;