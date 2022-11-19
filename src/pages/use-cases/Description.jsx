import PropTypes from 'prop-types';
import readmore from "../../assets/icons/use-cases/readmore.png";
import styles from "./styles.module.css";


const Description = ({children, heading}) => {
  return (
    <div className='flex flex-col h-full justify-center '>    

      <h2 className={styles.heading}> {heading}</h2>

      <p className={styles.paragraph}>{children}</p>

      <button className={styles.readmore}> <img src={readmore}  /></button>
      
    </div>
  );
};

Description.propTypes = {
    children: PropTypes.element,
    heading: PropTypes.string
};

export default Description;



  