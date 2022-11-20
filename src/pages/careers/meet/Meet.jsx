import React from 'react';
import styles from './meet.module.scss';
import meetTeam from '../Images/meet-the-team.png';

export default function Meet() {
  return (
    <section className={styles.meet_team}>
      <div className={styles.careers__meet_team}>
        <div className={styles.careers__meet_team_text}>
          <div className={styles.careers__secondary_heading}>Meet our amazing team of experts</div>
          <div className={styles.careers__meet_info}>
            <p className={styles.info}>
              We are a group of young creative imaginative individual collectively striving for
              excellence.
            </p>
            <p className={styles.info}>
              We put in collective effort as a team to build ourselves while contributing to the
              growth of the company.
            </p>
            <p className={styles.info}>Join a team and inspire the work.</p>
          </div>
        </div>
        <div className={styles.careers__meet_image}>
          <img src={meetTeam} alt="" className={styles.meet_image} />
        </div>
      </div>
    </section>
  );
}
