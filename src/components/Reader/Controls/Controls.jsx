import React from 'react';
import T from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onPrevClick, onNextClick, prevBtnDisabled, nextBtnDisabled }) => (
  <section className={styles.section}>
    <button
      type="button"
      onClick={onPrevClick}
      className={styles.button}
      disabled={prevBtnDisabled}
    >
      Prev
    </button>
    <button
      type="button"
      onClick={onNextClick}
      className={styles.button}
      disabled={nextBtnDisabled}
    >
      Next
    </button>
  </section>
);

Controls.propTypes = {
  onPrevClick: T.func.isRequired,
  onNextClick: T.func.isRequired,
  prevBtnDisabled: T.bool.isRequired,
  nextBtnDisabled: T.bool.isRequired,
};

export default Controls;
