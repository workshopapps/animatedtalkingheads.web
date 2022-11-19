import React from 'react';
import styles from './index.scss';

function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.photo} alt="" className="card__img" />
      <h2 className={styles.card__heading}>{props.heading}</h2>
      <p>{props.text}</p>
      <div className={styles.blog__thumbnail}>
        <div className={styles.image__container}>
          <img src={props.avatar} alt="avatar" />
        </div>
        <h3>Nowso Emmanuel</h3>
        <span> 20 Nov 2022</span>
      </div>
    </div>
  );
}

export default Card;
