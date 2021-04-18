import React from 'react'
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AppNav = () => {
	return (

		<ul className="nav__list">
			<li className="nav__item">
				<NavLink
					exact
					to={routes.home}
					className="nav__link"
					activeClassName="nav__link--active">Home</NavLink>
			</li>
			<li className="nav__item">
				<NavLink to={routes.movies}
					className="nav__link"
					activeClassName="nav__link--active" >Movies</NavLink>
			</li>
		</ul>

	);
};

export default AppNav
