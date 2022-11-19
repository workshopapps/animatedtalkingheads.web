import styles from "./styles.module.css";
import Layout from '../../components/UI/Layout';
import Description from "../../components/pages/use-cases/Description";
import { data } from "./data";
import React from "react";
import Pagination from "../../components/pages/use-cases/Pagination";
import { routes } from "../../libs/links";
import { useSearchParams } from "react-router-dom";



const rows = 4;

const UseCases = () => {

  const [searchParams] = useSearchParams()
  let page = Number(searchParams.get("page"))
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

        <div className="px-5 py-20 md:p-10 lg:p-24 md:px-36 lg:px-40 xl:px-48">

          <div  className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-y-60 py-20 gap-y-16">

            { 
              data.slice(start, end).map((data, index) => {

                if (index % 2 === 0) {
                  return (
                    <React.Fragment key={index}>
                      <div><img src={data.image}  alt="image" /> </div>
                      <Description heading={data.title} index={index}> {data.description} </Description>
                    </React.Fragment>
                  )
                }

                return (
                  <React.Fragment key={index} className="hidden md:flex">
                    <div className="flex md:hidden"><img src={data.image}  alt="image" /> </div>
                    <Description heading={data.title} index={index}> {data.description} </Description>
                    <div className="hidden md:flex"><img src={data.image}  alt="image" /> </div>
                  </React.Fragment>
                )

              })

            }

          </div>

          <Pagination rows={4} current={page} link={routes.useCases} total={data.length}/>

        </div>

      </div>

    </Layout>
  );
};

export default UseCases;


