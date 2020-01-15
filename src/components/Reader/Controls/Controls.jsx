import React from 'react';
import T from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onNextPrevClick, prevBtnDisabled, nextBtnDisabled }) => (
  <section className={styles.section}>
    <button
      type="button"
      onClick={onNextPrevClick}
      className={styles.button}
      disabled={prevBtnDisabled}
    >
      Prev
    </button>
    <button
      type="button"
      name="next"
      onClick={onNextPrevClick}
      className={styles.button}
      disabled={nextBtnDisabled}
    >
      Next
    </button>
  </section>
);

Controls.propTypes = {
  onNextPrevClick: T.func.isRequired,
  prevBtnDisabled: T.bool.isRequired,
  nextBtnDisabled: T.bool.isRequired,
};

export default Controls;
