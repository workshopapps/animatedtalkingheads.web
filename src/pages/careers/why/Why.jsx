import React from 'react';
import styles from './why.module.scss';

export default function Why() {
  return (
    <div>
      <section className={styles.why}>
        <div className={styles.careers__why}>
          <h3 className={styles.careers__secondary_heading}>Why you should join our team</h3>
          <ol className={styles.reasons}>
            <li className={styles.reason}>
              <h5 className={styles.title}>Health and Well-being Benefits</h5>
              <p className={styles.text}>
                We always ensure our employeess have health Insurance and other benefits such as gym
                membership.
              </p>
            </li>
            <li className={styles.reason}>
              <h5 className={styles.title}>Paid Vacation</h5>
              <p className={styles.text}>
                Our Employees get the chance to have an all expense paid vacation yearly.
              </p>
            </li>
            <li className={styles.reason}>
              <h5 className={styles.title}>Competitive Salary</h5>
              <p className={styles.text}>
                Employees are offered competitive salaries and bonuses as incentive.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
