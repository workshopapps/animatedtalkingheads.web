import styles from './styles.module.css';
import Layout from '../../../components/UI/Layout';
import React from 'react';
import arrowBack from '../../../assets/icons/use-cases/arrow-back.png';
import { Button } from '../../../components/UI/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { blogs } from '../data';

const UseCaseArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const page = blogs[id];
  console.log(page);

  return (
    <Layout>
      <div className={styles.bg}>
        <div className="block px-5 py-20 md:p-24 lg:py-40 lg:px-48">
          <div>
            <img className={styles.image} src={page.image} alt="image" />{' '}
          </div>

          <h2 className={styles.heading}> {page.title}</h2>

          <p className={styles.paragraph}> {page.description}</p>

          <div className={`mt-10 flex justify-between`}>
            <button onClick={() => navigate(-1)} className={`${styles.back} flex items-center`}>
              {' '}
              <img
                className="m-5"
                height={'16px'}
                width="7px"
                src={arrowBack}
                alt="Arrow Back"
              />{' '}
              <p className="hidden md:block">Back</p>{' '}
            </button>
            <Button label={'Get Started'}></Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UseCaseArticle;
