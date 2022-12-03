import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from '../../../libs/links';

const Description = ({ children, heading, index }) => {
  return (
    <div className="grid gap-5 lg:gap-7 justify-center mt-5">
      <h2 className="font-bold text-2xl md:text-4xl"> {heading}</h2>
      <p className="text-base  lg:text-xl">{children}</p>
      <Link to={`${routes.useCaseArticle}/${index - 1}`}>
        <button className="hover:border-sec-600 focus:bg-white  hover:text-sec-600 text-blue-600  border rounded-lg border-blue-600 px-4 py-2 md:px-7 md:py-3">
          <p>Read more</p>
        </button>
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
