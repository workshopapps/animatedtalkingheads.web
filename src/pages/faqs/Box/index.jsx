import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../../../assets/svg';
import styles from './box.module.scss';

const Box = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  function changeBox(arg) {
    setActive(arg);
  }
  return (
    <>
      <div className={styles.box}>
        <p className={styles.question}>{question}</p>
        {active ? (
          <ArrowUpIcon onClick={() => changeBox(false)} style={{ width: '0.8rem' }} />
        ) : (
          <ArrowDownIcon onClick={() => changeBox(true)} style={{ width: '0.8rem' }} />
        )}
      </div>
      {active && <p className={styles.answer}>{answer}</p>}
    </>
  );
};

export default Box;
