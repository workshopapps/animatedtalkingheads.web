import Layout from '../../components/UI/Layout';
import './fogot-password.scss';
// import axios from 'axios';
import { useState } from 'react';

const ForgotPassword = () => {
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, seIsLoading] = useState(false);

  async function subMithandler(e) {
    e.preventDefault();

    seIsLoading(true);
    console.log(userEmail);
    // const url = 'https://api.voxlips.hng.tech/podcasts/upload/';
    // const config = {
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // };

    // try {
    //   const resp = await axios.post(url, userEmail, config);
    // } catch (error) {
    //   console.log(error);
    // }
    setTimeout(() => {
      window.alert('password reset link sent, check your email');
      seIsLoading(false);
    }, 3000);
  }

  function getUserEmail(e) {
    e.preventDefault();
    setUserEmail(e.target.value);
  }

  return (
    <Layout>
      <main className="bg-[#F5F5F5] centered h-[80vh] px-2 forgot-password-page">
        <div className="card p-4 md:px-20 md:py-11 bg-white w-[90%] md:w-auto rounded-lg border">
          <h1 className="text-title capitalize text-center text-[24px] md:text-[48px]">
            forgot password
          </h1>

          <p className="text-body mx-auto w-[98%] md:w-[380px] text-center text-[14px] md:text-[16px] mt-3">
            Enter the email address associated with your Voxclips account
          </p>

          <form
            action=""
            onSubmit={subMithandler}
            className=" w-full py-2 my-2 space-y-4 md:space-y-3">
            <div className="input_group flex flex-col space-y-3 md:space-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name=""
                // eslint-disable-next-line no-undef
                onChange={getUserEmail}
                className="email_filed border p-3 rounded-md"
                placeholder="Enter your email"
                id=""
              />
            </div>

            <button
              type="submit"
              className="submit_button bg-pri-700 h-[50px] centered rounded-md w-full py-4 px-6 text-white">
              {isLoading ? <span className="spinner-roller m-4"></span> : ' Send Reset Link'}
            </button>
          </form>

          <div className="w-full centered">
            <h1 className="text-link">
              Back to <span className="text-pri-700">Log In</span>
            </h1>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ForgotPassword;
