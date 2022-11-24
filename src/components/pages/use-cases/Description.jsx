import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import readmore from '../../../assets/icons/use-cases/read_more.svg';
import { routes } from '../../../libs/links';
import styles from './styles.module.css';

const Description = ({ children, heading, index }) => {
  return (
    <div className="flex flex-col h-full justify-center ">
      <h2 className={styles.heading}> {heading}</h2>

      <p className={styles.paragraph}>{children}</p>

      <Link to={`${routes.useCaseArticle}/${index}`} className={styles.readmore}>
        {' '}
        <img src={readmore} />
      </Link>
    </div>
  );
};

Description.propTypes = {
  children: PropTypes.element,
  heading: PropTypes.string,
  index: PropTypes.number,
  alignLeft: PropTypes.bool
};

export default Description;
