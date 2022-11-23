import GridSection from '../gridsection/GridSection';
import Hero from '../hero/Hero';
import Artist from '../artist/Artist';
import styles from './home.module.scss';

import React from 'react';

export default function Home() {
  return (
    <div className={styles.body}>
      <Hero />
      <GridSection />
      <Artist />
    </div>
  );
}
