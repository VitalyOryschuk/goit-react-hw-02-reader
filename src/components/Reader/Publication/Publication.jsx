import React from 'react';
import styles from './Publication.module.css';
import T from 'prop-types';

const Publication = ({ title, text }) => (
  <div>
    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </article>
  </div>
);

Publication.propTypes = {
  title: T.string.isRequired,
  text: T.string.isRequired,
};

export default Publication;
