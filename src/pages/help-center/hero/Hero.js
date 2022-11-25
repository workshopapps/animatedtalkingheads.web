import React from 'react';
import styles from './hero.module.scss';
import search from '../images/search.png';

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.header_text}>How Can We Help You?</p>
        <p className={styles.info_text}>Search here for answers to your questions</p>

        <div className={styles.search}>
          <img className={styles.search_icon} src={search} alt="search" />
          <input
            style={{ textIndent: '17px' }}
            className={styles.search_bar}
            type="text"
            placeholder="How may we help you?"
          />
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>Popular Keywords:</li>
          <li className={styles.listItem}>security</li>
          <li className={styles.listItem}>export</li>
          <li className={styles.listItem}>how to</li>
        </ul>
      </section>
    </>
  );
};

export default Hero;
