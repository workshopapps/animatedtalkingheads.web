import styles from './styles.module.css';
import Layout from '../../../components/UI/Layout';
import React from 'react';

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
              className=" text-blue-600  border rounded-lg border-blue-600 px-4 py-2 md:px-7 md:py-3 w-[150px]">
              <p>Back</p>
            </button>
            <Link to="/podcast/upload">
              <button className=" text-white bg-blue-600  border rounded-lg hover:opacity-80 px-4 py-2 md:px-7 md:py-4">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UseCaseArticle;
