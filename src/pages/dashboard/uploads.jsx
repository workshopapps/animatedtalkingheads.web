import React, { useState, useEffect } from 'react';
import { UserAuth } from '../../context/AuthContext';
import axios from 'axios';
import Layout from '../../components/UI/Layout';
import PageTitle from '../../components/UI/page-title';
import { BiMenuAltRight } from 'react-icons/bi';
import store from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../libs/links';

export const Uploads = () => {
  const { user } = UserAuth();
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [user]);

  const getData = () => {
    const url = 'https://api.voxclips.hng.tech/podcasts';
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${user}`
        }
      })

      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  data && console.log(data);
  console.log(store.getState());
  const getDate = (date) => {
    return date.split('T')[0];
  };
  const getTime = (date) => {
    return date.split('T')[1].split('.')[0];
  };

  const splitName = (name) => {
    const arr = name.split('/');
    const name_of_song = arr[arr.length - 1].split('-').slice(2).join('-');
    return name_of_song;
  };
  const createVideo = (item) => {
    store.dispatch({ type: 'ADD_PODCAST_ITEM', payload: item });
    navigate(routes.podcastCustomize);
  };
  return (
    <Layout>
      <PageTitle title="Uploads" />
      <section className="container w-[90%] mx-auto min-h-[50vh] my-20">
        <div className="flex justify-between text-sm lg:text-base  border-b-[#BDBDBD] border-b py-2">
          <div className="w-[10%]">S/No</div>
          <div className="w-[20%] text-center">Audio Name</div>
          <div className="w-[20%] text-center ">Date Created</div>
          <div className="w-[20%] text-center">Time</div>
          <div className="w-[20%] flex justify-center items-center">
            <BiMenuAltRight color="#2158D2" />
          </div>
        </div>
        {data
          ? data.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-sm lg:text-base  border-b-[#BDBDBD] border-b py-2 lg:py-4">
                <div className="w-[10%]">{data.indexOf(item) + 1}</div>
                <div className="w-[20%] text-center ">Audio {data.indexOf(item) + 1}</div>
                <div className="w-[20%] text-center">{getDate(item.createdAt)}</div>
                <div className="w-[20%] text-center">{getTime(item.createdAt)}</div>
                <div className="w-[20%] text-center">
                  <button
                    onClick={() => createVideo(item)}
                    className=" text-sm text-[#2158D2] lg:text-base cursor-pointer hover:text-opacity-80">
                    Create video
                  </button>
                </div>
              </div>
            ))
          : 'No available Data'}
        <div>
          <p className="text-red-600 text-sm">{error && error}</p>
        </div>
      </section>
    </Layout>
  );
};
