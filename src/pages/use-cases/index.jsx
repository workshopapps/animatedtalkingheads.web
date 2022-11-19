import styles from "./styles.module.css";
import Layout from '../../components/UI/Layout';
import Description from "./Description";
import { data } from "./data";


const UseCases = () => {
  return (
    <Layout>
      <div className={styles.bg}>

        <div className={`${styles.heroBg} flex justify-center items-center`}>
          <p>Use Cases</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-28 md:gap-y-60 px-2 md:p-24 lg:py-40 lg:px-48">

          { 
            data.map((data, index) => {
              if (index % 2 === 0) {
                return (
                  <>
                    <div><img src={data.image}  alt="image" /> </div>
                    <Description heading={data.title}> {data.description} </Description>
                  </>
                )
              }

              return (
                <>
                  <Description heading={data.title}> {data.description} </Description>
                  <div><img src={data.image}  alt="image" /> </div>
                </>
              )
            })
          }

        </div>

      </div>

    </Layout>
  );
};

export default UseCases;


