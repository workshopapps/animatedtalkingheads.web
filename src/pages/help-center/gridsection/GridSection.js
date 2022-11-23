import React from 'react';
import styles from './grid.module.scss';
import gridInfo from '../userData';

const GridSection = () => {
  const gridData = gridInfo.map((gridDetails) => {
    return (
      <div key={gridInfo.id}>
        <GridBox {...gridDetails} />
      </div>
    );
  });
  return (
    <section className={styles.gridsection}>
      <div className={styles.grid}>{gridData}</div>
    </section>
  );
};

const GridBox = (props) => {
  return (
    <div className={styles.grid_inner}>
      <img className={styles.icon} src={props.icon} alt="icon" />
      <div className={styles.details}>
        <p className={styles.link}>{props.link}</p>
        <p className={styles.post}>{props.posts}</p>
      </div>
    </div>
  );
};

export default GridSection;
