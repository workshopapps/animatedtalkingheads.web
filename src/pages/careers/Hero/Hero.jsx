import React from 'react';
import styles from './hero.module.scss';
import Ethics from './ethics/Ethics';
import hero from '../Images/Hero-img.png';
import equal from '../Images/equality-icon.svg';
import diverse from '../Images/Diversity-icon.svg';

export default function Hero() {
  return (
    <section className={styles.careers}>
      <div className={styles.careers__hero_card}>
        <div className={styles.careers__theme}>
          <h1 className={styles.careers__main_heading}>Be a part of our Mission</h1>
          <p className={styles.careers__theme_text}>
            At Voxclips we believe that a cross-disciplinary team is what it takes to build a
            wholesome and delightful product experience and we would love you to join us
          </p>
          <button className={styles.careers__hero_btn}>See open roles</button>
        </div>
      </div>
      <div className={styles.careers__hero}>
        <div className={styles.careers__hero_image}>
          <img src={hero} alt="" className={styles.hero_image} />
        </div>
        <div className={styles.careers__work_ethics}>
          <div className={styles.work_ethics}>
            <h3 className={styles.careers__secondary_heading}>Our core work ethics</h3>
            <p className={styles.work_ethics_text}>
              We are innovative and customer focused. We are organised and communicate effectively
              across all teams
            </p>
          </div>
          <Ethics
            icon={equal}
            title="Gender equality"
            text="Progress towards achieving gender equality is progress for all. At Voxclips there are many opportunities to achieve your professional dream. No matter what you did before, where you come from or your gender."
          />
          <Ethics
            icon={diverse}
            title="Diversity & Inclusion"
            text="Building a culture where everybody belongs is of utmost importance to us. At Voxclips we have an all inclusive workforce culture to help build a better world."
          />
        </div>
      </div>
    </section>
  );
}

// https://www.figma.com/file/qHtCsg2m7VGBr5anu3R98U/Talking-Head-Project-Design-System-(Copy)?node-id=1347%3A16012&t=mgCUr2RCzN50kaPK-0
