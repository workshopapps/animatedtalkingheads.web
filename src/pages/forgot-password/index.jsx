import Layout from '../../components/UI/Layout';
import './fogot-password.scss';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [userEmail, setUserEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, seIsLoading] = useState(false);

  async function subMithandler(e) {
    e.preventDefault();

    if (userEmail.length === 0) {
      return setErrMsg('You need to provide an email');
    }

    seIsLoading(true);
    console.log(userEmail);
    const url = 'https://api.voxclips.hng.tech/api/v1/rauth/forgotpassword';
    const config = {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      seIsLoading(true);
      const { data } = await axios.post(
        url,
        {
          email: userEmail
        },
        config
      );

      if (data) {
        setErrMsg('');
        // console.log(data);

        setSuccessMsg(data.msg);

        seIsLoading(false);
      }

      seIsLoading(false);

      // window.alert('password reset link sent, check your email');
    } catch (error) {
      setErrMsg(error.message);
      seIsLoading(false);
    }
    // setTimeout(() => {
    //   window.alert('password reset link sent, check your email');
    //   seIsLoading(false);
    // }, 3000);
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
              disabled={isLoading && true}
              className="submit_button disabled:cursor-none bg-pri-700 h-[50px] centered rounded-md w-full py-4 px-6 text-white">
              {isLoading ? <span className="spinner-roller m-4"></span> : ' Send Reset Link'}
            </button>
            {errMsg.length !== 0 && (
              <div className="text-red-400  text-center w-full">
                <h1 className="">{errMsg}</h1>
              </div>
            )}

            {successMsg.length !== 0 && (
              <div className="text-green-500  text-center w-full">
                <h1 className="">{successMsg}</h1>
              </div>
            )}
          </form>

          <div className="w-full centered">
            <h1 className="text-link">
              Back to{' '}
              <Link to="/sign-in">
                <span className="text-pri-700">Log In</span>
              </Link>
            </h1>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ForgotPassword;
