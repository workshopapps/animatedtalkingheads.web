import React from 'react';
import styles from './roles.module.scss';

export default function Roles() {
  return (
    <section className={styles.roles}>
      <h3 className={styles.careers__secondary_heading}>Job openings</h3>
      <p className={styles.roles_text}>There are no openings at the moment</p>
      <p className={styles.roles_text}>please check back soon!</p>
    </section>
  );
}
