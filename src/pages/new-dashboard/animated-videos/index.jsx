import { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardLayout from '../../../components/UI/DashboardLayout';
import Title from '../../../components/UI/DashboardLayout/Title';
import { UserAuth } from '../../../context/AuthContext';
import AnimatedPodcastData from '../../podcast/animated-podcast/AnimatedPodcastData';

const AnimatedVideos = () => {
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
    <DashboardLayout>
      <section className="w-[90%] mx-auto my-10 ">
        <Title title="My Podcasts" buttonLink="/podcast/upload" buttonText="Create Video" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-10 my-10">
          {data.map((video, index) => {
            return <AnimatedPodcastData key={index} video={video} />;
          })}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default AnimatedVideos;
