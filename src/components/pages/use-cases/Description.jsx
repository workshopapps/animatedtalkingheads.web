import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import readmoreArrow from "../../../assets/icons/use-cases/readmore-arrow.png";
import { routes } from '../../../libs/links';
import styles from "./styles.module.css";


const Description = ({children, heading, index, alignLeft}) => {

  return (
    <div className={`flex items-center md:${alignLeft ? "": "justify-end"}`}>
      <div className={`${styles.description} flex flex-col h-full justify-center`}>    

        <h2 className={styles.heading}> {heading}</h2>

        <p className={styles.paragraph}>{children}</p>

        <Link to={`${routes.useCaseArticle}/${index}`} className={`${styles.readmore} flex justify-between items-center`}>
          <p>Read More</p> <img src={readmoreArrow}  /> 
        </Link>
        
      </div>
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



  