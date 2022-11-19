import Layout from '../../components/UI/Layout';
import './index.scss';
import img1 from './assets/img-1.png';
import img2 from './assets/img-2.png';
import img3 from './assets/img-3.png';
import img4 from './assets/img-4.png';
import img5 from './assets/img-5.png';
import avatar from './assets/Avatar.png';
import Card from './Card';

const Blog = () => {
  return (
    <Layout>
      <div className="blog__header">
        <h1>Our Blog</h1>
        <p>All about audio, animations, podcasting and more!</p>
      </div>
      <main className="blog__main">
        <div className="blog__sidebar">
          <div className="form-group">
            <input type="text" />
          </div>
          <p>Blog categories</p>
          <ul>
            <li>View all</li>
            <li>Podcasts</li>
            <li>Animations</li>
            <li>Marketing</li>
            <li>Video creation</li>
            <li>Research</li>
            <li>Social Media</li>
          </ul>
        </div>
        <div className="blog__content">
          <h2>Latest Post</h2>
          <div className="blog__grid">
            <Card
              photo={img1}
              heading="Complete Guide on How to Start A Podcast"
              text="Are you looking to start your podcast in 2022?"
              avatar={avatar}
            />
            <Card
              photo={img2}
              heading="Podcast Content Strategy"
              text="Are you looking to start your podcast in 2022?"
              avatar={avatar}
            />
            <Card
              photo={img3}
              heading="Animated Podcast"
              text="Are you looking to start your podcast in 2022?"
              avatar={avatar}
            />
            <Card
              photo={img4}
              heading="Complete Guide on How to Start A Podcast"
              text="Are you looking to start your podcast in 2022?"
              avatar={avatar}
            />
            <Card
              photo={img5}
              heading="Complete Guide on How to Start A Podcast"
              text="Are you looking to start your podcast in 2022?"
              avatar={avatar}
            />
          </div>
        </div>
      </main>
      {/* 
     

     
     ent}>
         
          <div className={styles.blog__grid}>
           
            <div className="card">
              <img src="" alt="" className="card__img" />
              <h2>Complete Guide on How to Start A Podcast</h2>
              <p>Are you looking to start your podcast in 2022?</p>
              <div className="thumbnail">
                <img src="" alt="" />
                <h3>Nowso Emmanuel</h3>
                <span> 20 Nov 2022</span>
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </Layout>
  );
};

export default Blog;
