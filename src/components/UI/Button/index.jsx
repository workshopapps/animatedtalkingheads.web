import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

// button requirements
//  state  = primary ghost
//  size  = auto full
// loading bool
// disabled bool

export const Button = ({ isDisabled, isLoading, ghost, label, ...props }) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${isLoading && styles.loading} ${
        ghost ? styles.ghost : styles.primary
      }`}
      disabled={isDisabled}
      //   style={backgroundColor && { backgroundColor }}
      {...props}>
      {isLoading && <div className="spinner-roller"></div>}
      <p className="btn_text">{label}</p>
    </button>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,

  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  isDisabled: false,
  isLoading: false,
  ghost: false,
  onClick: undefined,
  label: 'button'
};
