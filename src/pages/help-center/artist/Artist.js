import React from 'react';
import styles from './artist.module.scss';
import { artistInfo } from '../userData';

const Artist = () => {
  const artistData = artistInfo.map((artistDetails) => {
    return (
      <div key={artistInfo.id}>
        <ArtistBox {...artistDetails} />
      </div>
    );
  });
  return (
    <>
      <section className={styles.artistsection}>
        <p className={styles.heading}>Popular Articles</p>

        <div className={styles.artist}>{artistData}</div>
      </section>
    </>
  );
};

const ArtistBox = (props) => {
  return (
    <div className={styles.artist_flex}>
      <div className={styles.left}>
        <div className={styles.dark_box}>
          <img className={styles.file} src={props.file} alt="file" />
        </div>
        <div className={styles.article_sec}>
          <p className={styles.top_text}>{props.text}</p>
          <p className={styles.bottom_text}>{props.quote}</p>
        </div>
      </div>
      <div className={styles.next}>
        <img src={props.next} alt="next" />
      </div>
    </div>
  );
};

export default Artist;
