import React from 'react';
import styles from './features.module.scss';

export default function Features({ title, subTitle, text }) {
  return (
    <div className={styles.features_box}>
      <h4 className={styles.features_box_title}>{title}</h4>
      <span className={styles.sub_title}>{subTitle}</span>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
