import styles from "./styles.module.css";
import Layout from '../../components/UI/Layout';
import Description from "../../components/pages/use-cases/Description";
import { data } from "./data";
import React from "react";
import Pagination from "../../components/pages/use-cases/Pagination";
import { routes } from "../../libs/links";
import { useParams } from "react-router-dom";



const rows = 4;

const UseCases = () => {

  let { page } = useParams();

  page = page === 0 ? 1 : page;
  const start =  (page - 1) * rows;
  const count = start + rows
  const end = count > data.length ? data.length : count

  return (
    <Layout>
      <div className={styles.bg}>

        <div className={`${styles.heroBg} flex justify-center items-center`}>
          <p>Use Cases</p>
        </div>

        <div className="px-5 lg:py-24 md:px-16 lg:px-20 xl:px-28 2xl:px-48">

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-60 py-6 md:py-16 lg:py-6  gap-y-16">

            { 
              data.slice(start, end).map((data, index) => {

                if (index % 2 === 0) {
                  return (
                    <React.Fragment key={index} style={{background: "blue"}}>
                      <div className="flex justify-center"><img src={data.image}  alt="image" /> </div>
                      <Description alignLeft={false} heading={data.title} index={index}> {data.description} </Description>
                    </React.Fragment>
                  )
                }

                return (
                  <React.Fragment key={index} className="hidden md:flex">
                    <div className="flex md:hidden justify-center"><img src={data.image}  alt="image" /> </div>
                    <Description alignLeft={true} heading={data.title} index={index}> {data.description} </Description>
                    <div className="hidden md:flex fjustify-center"><img src={data.image}  alt="image" /> </div>
                  </React.Fragment>
                )

              })

            }

          </div>

          <div className="my-14">
            <Pagination rows={4} current={Number(page)} link={routes.useCases} total={data.length}/>
          </div>

        </div>

      </div>

    </Layout>
  );
};

export default UseCases;


