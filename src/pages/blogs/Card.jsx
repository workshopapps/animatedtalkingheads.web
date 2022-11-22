import React from 'react';
import styles from './card.module.scss';
// import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../libs/links.js';

function Card(props) {
  return (
    <Link
      to={`${routes.blogContent}/${props.index}`}
      className={styles.link}
      style={{ display: 'block' }}>
      <div className={styles.card}>
        <div className={styles.grid__img}>
          <img src={props.photo} alt="" className={styles.card__img} />
        </div>
        <h2 className={styles.card__heading} style={{ margin: '1rem 0' }}>
          {props.heading}
        </h2>
        <p style={{ marginBottom: '.5rem' }}>{props.text}</p>
        <div className={styles.blog__thumbnail}>
          <div className={styles.image__container}>
            <img src={props.avatar} alt="avatar" />
          </div>
          <div>
            <h3>Nowso Emmanuel</h3>
            <span> 20 Nov 2022</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
