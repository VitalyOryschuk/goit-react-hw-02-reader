import React from 'react';
import T from 'prop-types';
import styles from './Progress.module.css';

const Progress = ({ currentPage, totalPages }) => (
  <div>
    <p className={styles.progress}>
      {currentPage} / {totalPages}
    </p>
  </div>
);

Progress.propTypes = {
  currentPage: T.number.isRequired,
  totalPages: T.number.isRequired,
};

export default Progress;
