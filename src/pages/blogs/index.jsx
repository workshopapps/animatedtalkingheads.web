// import { useState } from 'react';
import Layout from '../../components/UI/Layout';
import styles from './index.module.scss';
import Card from './Card';
// import { routes } from "../../libs/links";
import { data } from './data';
import { useSearchParams } from 'react-router-dom';
// import { ReactComponent as Search } from './assets/search-blue.svg';
// import { ReactComponent as SearchWhite } from './assets/search-white.svg';

const rows = 5;
const Blog = () => {
  // const [counts, setCount] = useState(0);
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   setCount(counts + 1);
  //   navigate(`/blog/content/${counts}`);
  // };
  const [searchParams] = useSearchParams();
  let page = Number(searchParams.get('page'));
  page = page === 0 ? 1 : page;
  const start = (page - 1) * rows;
  const count = start + rows;
  const end = count > data.length ? data.length : count;

  console.log(end);

  console.log(page);

  const arr = data.slice(start, end).map((el, index) => console.log(el, index));
  console.log(arr);

  return (
    <Layout>
      <div className={styles.blog__container}>
        <div className={styles.blog__header}>
          <h1>Our Blog</h1>
          <p>All about audio, animations, podcasting and more!</p>
        </div>
        <main className={styles.blog__main}>
          {/* <div className={styles.blog__sidebar}>
            <div className={styles.blog__form}>
              <SearchWhite />
              <input type="text" />
            </div>
            <p className={styles.p}>Blog categories</p>
            <ul className={styles.ul}>
              <li>View all</li>
              <li>Podcasts</li>
              <li>Animations</li>
              <li>Marketing</li>
              <li>Video creation</li>
              <li>Research</li>
              <li>Social Media</li>
            </ul>
          </div> */}

          <div className={styles.blog__content}>
            <div className={styles.blog__heading}>
              <h2>Latest Post</h2>
            </div>
            <div className={styles.blog__grid}>
              {data.slice(start, end).map((el, index) => {
                return (
                  <Card
                    photo={el.image}
                    heading={el.heading}
                    avatar={el.avatar}
                    key={index}
                    text={el.text}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
      {/* <button onClick={handleClick}>Next</button> */}
    </Layout>
  );
};

export default Blog;
