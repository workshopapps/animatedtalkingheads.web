import React, { useEffect, useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import axios from 'axios';
import Layout from '../../components/UI/Layout';
import PageTitle from '../../components/UI/page-title';

const InProgress = () => {
  const { user } = UserAuth();
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getData();
  }, [user]);

  const getData = () => {
    const url = 'https://api.voxclips.hng.tech/api/v1/animated-videos';
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${user}`
        }
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <Layout>
      <div>
        <PageTitle title="In Progress" />
        <section className=" my-20 container w-[90%] mx-auto min-h-[50vh]">
          <div className="flex  text-sm lg:text-lg 2xl:text-2xl border-b-[#BDBDBD] border-b py-2">
            <div className="w-[10%]">S/No</div>
            <div className="w-[30%] text-center">Rendering Video</div>
            <div className="w-[15%]">Status</div>
            <div className="w-[15%]"></div>
            <div className="w-[15%] text-center">Date modified</div>
            <div className="w-[15%] flex justify-center items-center"></div>
          </div>
          {data &&
            data.map((video, index) => (
              <div className="" key={index}>
                {video.status === 'PENDING' && (
                  <div>
                    <div className="flex  text-sm lg:text-lg 2xl:text-2xl border-b-[#BDBDBD] border-b py-2">
                      <div className="w-[10%]">{data.indexOf(video) + 1}</div>
                      <div className="w-[30%] text-center">{video.video_name}</div>
                      <div className="w-[15%]">
                        <p className="mx-auto text-sm">Rendering</p>
                        <div className="w-[90%] max-w-[150px] rounded-[8px] border  boreder-[#E2B93B] bg-[#E2B93B]"></div>
                      </div>
                      <div className="w-[15%]">Action</div>
                      <div className="w-[15%] text-center">
                        <PauseVideo />
                      </div>
                      <div className="w-[15%] text-[#2158D2] flex justify-center items-center">
                        download video
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          <div>
            <p className="text-red-600 text-sm">{error && error}</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InProgress;

export const PauseVideo = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z"
      stroke="#2158D2"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.0016 19.11V4.89C21.0016 3.54 20.4316 3 18.9916 3H15.3616C13.9316 3 13.3516 3.54 13.3516 4.89V19.11C13.3516 20.46 13.9216 21 15.3616 21H18.9916C20.4316 21 21.0016 20.46 21.0016 19.11Z"
      stroke="#2158D2"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
