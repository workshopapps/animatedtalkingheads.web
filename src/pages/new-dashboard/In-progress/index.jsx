import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../../components/UI/DashboardLayout';
import Title from '../../../components/UI/DashboardLayout/Title';
import { UserAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import store from '../../../store/store';
import { routes } from '../../../libs/links';

const Inprogress = () => {
  const { user } = UserAuth();
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [user]);

  const getData = () => {
    const url = 'https://api.voxclips.hng.tech/api/v1/podcasts';
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

  const getDate = (date) => {
    return date.split('T')[0];
  };
  // const getTime = (date) => {
  //   return date.split('T')[1].split('.')[0];
  // };

  // const splitName = (name) => {
  //   const arr = name.split('/');
  //   const name_of_song = arr[arr.length - 1].split('-').slice(2).join('-');
  //   return name_of_song;
  // };
  const createVideo = (item) => {
    store.dispatch({ type: 'ADD_PODCAST_ITEM', payload: item });
    navigate(routes.podcastCustomize);
  };
  return (
    <DashboardLayout>
      <section className="w-[90%] mx-auto my-10 ">
        <Title title="In Progress" buttonLink="/podcast/upload" buttonText="Upload Audio" />
      </section>
      <section className=" w-[90%] mx-auto min-h-[50vh] my-10">
        <div className="hidden md:flex justify-between text-sm lg:text-base  border-b-[#BDBDBD] border-b py-2">
          <div className="w-[10%]">S/No</div>

          <div className="w-[25%] text-center ">Audio</div>
          <div className="w-[20%] ">Status</div>
          <div className="w-[15%] ">Date</div>
          <div className="w-[20%] flex justify-center items-center">Action</div>
        </div>
        {data
          ? data.map((item, index) => (
              <div className="" key={index}>
                {item.status !== 'PENDING' && (
                  <div className="flex flex-col md:flex-row rounded-lg gap-y-3   bg-[#EFEFEF] my-3 md:my-0   p-2  justify-between text-sm lg:text-base  border-b-[#BDBDBD]  py-2 lg:py-4">
                    <div className="hidden md:flex md:w-[10%]">{data.indexOf(item) + 1}</div>

                    <div className="md:w-[25%] text-xs lg:text-base md:text-center flex justify-between">
                      <p>{item.file_name}</p>
                      <p>{getDate(item.createdAt)}</p>
                    </div>
                    <div className="md:w-[20%] ">
                      <div className="flex justify-between text-xs text-[14px]">
                        <p>Rendering</p>
                        <p>%</p>
                      </div>
                      <div className="bg-[#E2B93B] w-full h-[16px] rounded-lg mt-2"></div>
                    </div>
                    <div className="md:w-[15%] ">{getDate(item.createdAt)}</div>
                    <div className="flex flex-start md:first-letter:w-[20%] text-center">
                      <button
                        disabled
                        onClick={() => createVideo(item)}
                        className=" text-sm text-[#2158D2] lg:text-base cursor-pointer hover:text-opacity-80">
                        Preview
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          : 'No available Data'}
        <div>
          <p className="text-red-600 text-sm">{error && error}</p>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Inprogress;
