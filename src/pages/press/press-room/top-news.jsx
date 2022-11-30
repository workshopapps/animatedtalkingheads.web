import { Link } from 'react-router-dom';
import styles from './top-news.module.scss';
import newsImg1 from '../../../components/pages/press/assets/news-image1.png';
import calendar from '../../../components/pages/press/assets/calendar-icon.png';
import { Button } from '../../../components/UI/Button';

const TopNews = () => {
  return (
    <div className={styles.topnews_section}>
      <div className={styles.menu}>
        <a href="#" className={styles.active}>
          In the News
        </a>
        <a href="#">Company Updates</a>
      </div>

      <div className={styles.topnews}>
        <div className={styles.topnews_image}>
          <img src={newsImg1} alt="showing mic" />
        </div>
        <div className={`${styles.topnews_text} flex items-end`}>
          <div>
            <span className={styles.date}>
              <img src={calendar} alt="" />
              Nov 12, 2022
            </span>

            <h3>Go Pro to get more features</h3>

            <p>
              When you sign up for our premium plan, you can take advantage of great features, get
              access to all the amazing 2D characters and customizing tools, and enjoy ad-free
              podcast.
            </p>

            <Link to={'#'}>
              <Button>Read now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
