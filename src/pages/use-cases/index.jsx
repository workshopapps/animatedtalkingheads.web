import Layout from '../../components/UI/Layout';
import Description from '../../components/pages/use-cases/Description';
import { data } from './data';
import React from 'react';
import PageTitle from '../../components/UI/page-title';

const UseCases = () => {
  return (
    <Layout>
      <div className="bg-[#f9fafb] pb-5">
        <PageTitle title="Use cases" />
        <div className=" max-w-[1440px] mx-auto">
          <section className="mx-auto w-[90%] lg:w-[75%] my-5">
            {data.map((data) => (
              <div
                key={data.id}
                className={`md:flex my-24 justify-between items-center gap-10 ${
                  data.id % 2 === 0 && 'md:flex-row-reverse'
                }`}>
                <div className="md:w-[47%]">
                  <div className="w-full">
                    <img
                      src={data.image}
                      alt="image"
                      className="max-h:[300px] md:max-h-[400px] w-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-[47%]">
                  <Description heading={data.title} index={data.id}>
                    {data.description}
                  </Description>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default UseCases;
