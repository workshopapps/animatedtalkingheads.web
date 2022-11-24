import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import readmore from '../../../assets/icons/use-cases/read_more.svg';
import { routes } from '../../../libs/links';

const Description = ({ children, heading, index }) => {
  return (
    <div className="grid gap-5 justify-center mt-5">
      <h2 className="font-bold text-2xl md:text-4xl"> {heading}</h2>
      <p className="text-base  lg:text-xl">{children}</p>
      <Link to={`${routes.useCaseArticle}/${index}`}>
        <div className="flex gap-3 text-base lg:text-xl text-blue-600 hover:gap-5 duration-300 items-center">
          <p>Read more</p>
          <div>
            <img src={readmore} />
          </div>
        </div>
      </Link>
    </div>
  );
};

Description.propTypes = {
  children: PropTypes.element,
  heading: PropTypes.string,
  index: PropTypes.number
};

export default Description;
