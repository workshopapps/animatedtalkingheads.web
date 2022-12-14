import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import arrowBack from '../../../assets/icons/use-cases/arrowBack.svg';

const Pagination = ({ rows, current, total, link }) => {
  const pageCount = Math.ceil(total / rows);
  const pages = [];
  console.log(current, pageCount);
  const navigate = useNavigate();

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  console.log(pages, pageCount, current);

  return (
    <div className="flex h-full basis-full justify-between ">
      <button
        onClick={() => navigate(`${link}/${current - 1}`)}
        className={`${styles.navigation} ${
          current <= 1 ? 'hidden' : ''
        } flex justify-center md:justify-start items-center`}>
        <img className="md:m-5" height={'16px'} width="7px" src={arrowBack} alt="Arrow Back" />
        <p className="hidden md:block">Back</p>
      </button>

      <div className={`flex grow justify-center`}>
        {pages.map((page, index) => {
          console.log(current == page);
          return (
            <Link
              key={index}
              to={`${link}/${page}`}
              className={`${styles.page} flex py-5 px-7 ${
                current == page ? `${styles.active}` : ''
              } `}>
              {page}
            </Link>
          );
        })}
      </div>

      <button
        onClick={() => navigate(`${link}/${current + 1}`)}
        className={`${styles.navigation} ${
          current >= pageCount ? 'hidden' : ''
        } flex justify-center md:justify-start items-center`}>
        <p className="md:ml-5 hidden md:block">Next</p>
        <img
          className="md:m-8 rotate-180"
          height={'16px'}
          width="7px"
          src={arrowBack}
          alt="Arrow Back"
        />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  rows: PropTypes.number,
  current: PropTypes.number,
  total: PropTypes.number
};

export default Pagination;
