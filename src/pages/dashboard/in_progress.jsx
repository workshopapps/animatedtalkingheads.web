import React, { useEffect, useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import axios from 'axios';
import Layout from '../../components/UI/Layout';
import PageTitle from '../../components/UI/page-title';
import { BiMenuAltRight } from 'react-icons/bi';

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
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  data && console.log(data);

  return (
    <Layout>
      <div>
        <PageTitle title="In Progress" />
        <section className=" my-20 container w-[90%] mx-auto min-h-[50vh]">
          <div className="flex  text-sm lg:text-lg 2xl:text-2xl border-b-[#BDBDBD] border-b py-2">
            <div className="w-[10%]">S/No</div>
            <div className="w-[30%] text-center">Video</div>
            <div className="w-[15%]">Status</div>
            <div className="w-[15%]">Action</div>
            <div className="w-[15%] text-center">Date modified</div>
            <div className="w-[15%] flex justify-center items-center">
              <BiMenuAltRight color="#2158D2" />
            </div>
          </div>
          <div>
            <p className="text-red-600 text-sm">{error && error}</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InProgress;
