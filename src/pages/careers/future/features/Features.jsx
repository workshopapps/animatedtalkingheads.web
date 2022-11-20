import React from 'react';
<<<<<<< HEAD
import './features.module.scss';
=======
import styles from './features.module.scss';
>>>>>>> d71b736b05fa612d93a314c47a3db4e03f742c0b

export default function Features({ title, subTitle, text }) {
  return (
    <div className={styles.features_box}>
      <h4 className={styles.features_box_title}>{title}</h4>
      <span className={styles.sub_title}>{subTitle}</span>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
