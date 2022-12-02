import styles from './styles.module.css';
import Layout from '../../components/UI/Layout';
import Description from '../../components/pages/use-cases/Description';
import { data } from './data';
import React from 'react';
import Pagination from '../../components/pages/use-cases/Pagination';
import { routes } from '../../libs/links';
import { useParams } from 'react-router-dom';

const rows = 4;

const UseCases = () => {
  let { page } = useParams();
  page = page === 0 ? 1 : Number(page);
  const start = (page - 1) * rows;
  const count = start + rows;
  const end = count > data.length ? data.length : count;

  return (
    <Layout>
      <div className="bg-[#f9fafb] pb-5">
        <div className={`${styles.heroBg} flex justify-center items-center`}>
          <p>Use Cases</p>
        </div>
        <section className="mx-auto w-[90%] max-w-[1440px] my-20">
          {data.slice(start, end).map((data) => (
            <div
              key={data.id}
              className={`md:flex my-10 gap-20 py-10 items-center ${
                data.id % 2 === 0 && 'md:flex-row-reverse'
              }`}>
              <div className="md:w-[45%]">
                <div className="md:max-w-[80%] mx-auto">
                  <img src={data.image} alt="image" />
                </div>
              </div>
              <div className="md:w-[45%]">
                <Description heading={data.title} index={data.id}>
                  {data.description}
                </Description>
              </div>
            </div>
          ))}
          <div>
            <Pagination
              rows={4}
              current={Number(page)}
              link={routes.useCases}
              total={data.length}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default UseCases;
