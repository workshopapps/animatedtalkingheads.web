import React from 'react';
import styles from './ethics.module.scss';

export default function Ethics({ icon, title, text }) {
  return (
    <div className={styles.ethics_box}>
      <div className={styles.ethics_icon}>
        <img src={icon} alt="icon" className={styles.icon} />
      </div>
      <div className={styles.ethics_title}>{title}</div>
      <div className={styles.ethics_text}>{text}</div>
    </div>
  );
}
