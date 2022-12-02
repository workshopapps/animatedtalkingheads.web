import styles from './styles.module.css';
import Layout from '../../../components/UI/Layout';
import React from 'react';
import arrowBack from '../../../assets/icons/use-cases/arrowBack.svg';
import { Button } from '../../../components/UI/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { blogs } from '../data';

const UseCaseArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const page = blogs[id];

  return (
    <Layout>
      <div className="w-[90%] md:w-[80%] max-w-[1440px] mx-auto my-10">
        <div className="">
          <div>
            <img
              className="object-cover mx-auto w-full h-auto md:h-[500px]"
              src={page.image}
              alt="image"
            />
          </div>
          <h2 className={styles.heading}> {page.title}</h2>
          <p className={styles.paragraph}> {page.description}</p>
          <div className={`mt-10 flex justify-between`}>
            <button
              onClick={() => navigate(-1)}
              className=" flex items-center border border-[#bdbdbd] rounded-md md:px-4">
              <img className="m-5" src={arrowBack} alt="Arrow Back" />
              <p className="hidden md:block">Back</p>
            </button>
            <Link to="/podcast/upload">
              <Button label={'Get Started'}>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UseCaseArticle;
