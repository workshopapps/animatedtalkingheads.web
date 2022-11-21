import styles from './styles.module.css';
import Layout from '../../../components/UI/Layout';
import React from 'react';
import arrowBack from '../../../assets/icons/use-cases/arrow-back.png';
import { Button } from '../../../components/UI/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { blogs } from '../data';

const UseCaseArticle = () => {

  const [width, setWidth] = React.useState(100000);

  const { id } = useParams();
  const navigate = useNavigate();

  const page = blogs[id];

  React.useEffect(() => {

    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize()

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout>
      <div className={styles.bg}>

        <div className="px-5 lg:py-24 py-6 md:py-16 md:px-16 lg:px-20 xl:px-28 2xl:px-48">

          <div><img className={styles.image} src={ width > 756 ? page.image : page.mobileImg}  alt="image" /> </div>

          <h2 className={styles.heading}> {page.title}</h2>

          <p className={styles.paragraph}> {page.description}</p>

          <div className={`mt-10 flex justify-between`}>
            <button onClick={() => navigate(-1)} className={`${styles.back} flex items-center`}>
              <img
                className="mx-6 md:m-5"
                height={'16px'}
                width="7px"
                src={arrowBack}
                alt="Arrow Back"
              />
              <p className="hidden md:block">Back</p>
            </button>
            <Button label={'Get Started'}></Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UseCaseArticle;
