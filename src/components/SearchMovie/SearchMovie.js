import React, { Component } from 'react';
import style from './SearchMovie.module.css';
import PropTypes from 'prop-types';

class SearchMovie extends Component {
  state = { query: '' };
  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={style.searchMovie}>
        <form className={style.searchForm} onSubmit={this.handleSubmit}>


          <input
            className={style.searchFormInput}
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            onChange={this.handleChange}
          />

          <button type="submit" className={style.searchFormButton}>
            <span className={style.searchFormButtonLabel}></span>
          </button>
        </form>
      </header>
    );
  }
}

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovie;
