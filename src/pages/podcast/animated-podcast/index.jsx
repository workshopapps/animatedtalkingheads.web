import { useState, useEffect } from 'react';
import axios from 'axios';
import { UserAuth } from '../../../context/AuthContext';
import Layout from '../../../components/UI/Layout';
import PageTitle from '../../../components/UI/page-title';
import AuthWrapper from '../../../components/UI/Auth/AuthWrapper';
import AnimatedPodcastData from './AnimatedPodcastData';
import '../animated-podcast/css/index.css';
import LoadingScreen from '../../../components/UI/Loaders/LoadingScreen';

const AnimatedPodcast = () => {
  const { user } = UserAuth();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);
    const url = 'https://api.voxclips.hng.tech/api/v1/animated-videos';

    const config = {
      headers: {
        Authorization: `Bearer ${user}`
      }
    };

    try {
      const resp = await axios.get(url, config);
      const data = await resp.data;
      setData(data);
    } catch (error) {
      console.log(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(loading);

  return (
    <Layout>
      <AuthWrapper>
        <PageTitle title="My Animated Podcasts" />
        <section className="animated-podcast-section">

          <div className="animated-podcast">
            {/* <div className="input-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#292D32" d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z"/></svg>
              <input type="text" placeholder="Search your animated podcasts" />
            </div> */}
              { !loading &&
                <div className="flex justify-center podcasts-wrapper">
                  {data.map((video, index) => {
                    return <AnimatedPodcastData key={index} video={video} />;
                  })}
                </div>
              }
              { loading && <LoadingScreen isError={false} /> }
          </div>
        </section>
      </AuthWrapper>
    </Layout>
  );
};

export default AnimatedPodcast;
