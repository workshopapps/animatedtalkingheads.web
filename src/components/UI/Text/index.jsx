import React from 'react';
import PropTypes from 'prop-types';
import styles from './text.module.scss';

export const Text = ({ type, w, cap, label, className, ...props }) => {
  function textType(type) {
    switch (type) {
      case 'header1':
        return styles.header1;

      case 'header2':
        return styles.header2;

      case 'text1':
        return styles.text1;

      case 'text2':
        return styles.text2;

      case 'text3':
        return styles.text3;

      case 'text4':
        return styles.text4;

      default:
        return styles.text4;
    }
  }

  function textWeight(type) {
    switch (type) {
      case 'md':
        return styles.medium;

      case 'bold':
        return styles.bold;

      case 'semibold':
        return styles.semiBold;

      case 'black':
        return styles.black;

      default:
        return styles.medium;
    }
  }

  const textClass = [styles.text, textType(type), textWeight(w), cap && styles.cap, className].join(
    ' '
  );

  return (
    <p type="button" className={textClass} {...props}>
      {label || props.children}
    </p>
  );
};

Text.propTypes = {
  type: PropTypes.string,
  w: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  cap: PropTypes.bool
};

Text.defaultProps = {
  type: 'header1',
  w: 'bold',
  label: ''
};
