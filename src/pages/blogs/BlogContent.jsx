import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from './data';
import Layout from '../../components/UI/Layout';
import styles from './BlogContent.module.scss';
import avatar from './assets/Avatar.png';

function BlogContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const page = blogs[id];

  console.log(id);
  console.log(navigate);
  return (
    <Layout>
      <div>
        <div className={styles.blogContent__header}>
          <span>Podcast</span>
          <h3 className={styles.blogContent__title}>{page.title}</h3>
          <h3 className={styles.blogContent__title}>{page.subtitle}</h3>
          <span className={styles.blogContent__span}>
            Please note that this article may contain affiliate links that we earn commission from
          </span>
          <div className={styles.blogContent__author} style={{ marginTop: '10px' }}>
            <img src={avatar} alt="avatar" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className={styles.blogContent__span}>Nowso Emmanuel</span>
              <span className={styles.blogContent__span}> 20 Nov 2022</span>
            </div>
          </div>
        </div>
        <div className={styles.blogContent__image}>
          <img src={page.image} alt="avatar" />
        </div>
        <section className={styles.blogContent__description}>{page.description}</section>
      </div>
    </Layout>
  );
}

export default BlogContent;
