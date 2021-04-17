import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button type="button" className={style.button} onClick={onClick}>
    Go back
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
