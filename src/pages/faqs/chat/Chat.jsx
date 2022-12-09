import React from 'react';
import styles from './chat.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../libs/links';
import { Button } from '../../../components/UI/Button';
// import { ChatIcon } from '../../../assets/svg';

export default function Chat() {
  return (
    <div>
      <section className={styles.ChatSection}>
        <div className={styles.info}>
          <div className={styles.TextBox}>
            <p className={styles.info_question}>Not finding what you are looking for?</p>
            <p className={styles.info_text}>Please Chat with our friendly team</p>
          </div>
          <Link to={routes.contact}>
            <Button label={'Get In Touch'}>Get in Touch</Button>
          </Link>
        </div>
      </section>
      {/* <div>
        <Link to={routes.contact}>
          <ChatIcon />
        </Link>
      </div> */}
    </div>
  );
}
