import { useState } from 'react';
// import { Button } from '../../components/UI/Button';
import Layout from '../../components/UI/Layout';
import { Text } from '../../components/UI/Text';
import { Header1 } from '../../components/UI/Text/text.stories';
import cleanup from '../../assets/icons/contact/cleanup.svg';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import errors from './index.module.css';
import axios from 'axios';
import PageTitle from '../../components/UI/page-title';

const Contact = () => {
  const [submitted, setSubmittted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [emessage, setEMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [eemail, setEEmail] = useState(false);
  const [full_name, setFullName] = useState('');
  const [efull_name, setEFullName] = useState('');
  const [error, setError] = useState(false);

  const reset = () => {
    setSubmittted(false);
    setLoading(false);
    setMessage('');
    setEMessage(false);
    setEmail('');
    setEEmail(false);
    setFullName('');
    setEFullName(false);
    setError(false);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (full_name === '') {
      setEFullName(true);
    }
    if (email === '') {
      setEEmail(true);
    }
    if (message === '') {
      setEMessage(true);
    }

    if (full_name != '' && email != '' && message != '') {
      setLoading(true);

      try {
        const res = await axios.post('https://jee-contact.netlify.app/api/contact', {
          email,
          name: full_name,
          message
        });

        if (res.data.success) setSubmittted(true);
      } catch (e) {
        setError(true);
      }

      setLoading(false);
    }
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updateName = (e) => {
    setFullName(e.target.value);
  };

  return (
    <Layout>
      <div>
        <div className={`${styles.background}`}> </div>
        <PageTitle title="Contact us" />
        <div className={`${styles.container} mx-auto max-w-[1400px] w-[90%] my-10 lg:my-20`}>
          {!submitted ? (
            <div>
              <div className="text-center w-[80%] mx-auto grid my-5">
                <p className={`${styles.heading} font-[500]`}>Get in Touch With Us</p>
                <p className={`${styles.subHeading} mt-3 font-medium text-[16px] md:text-xl`}>
                  Kindly fill the form and we will get back to you
                </p>
                <p className={`${styles.subHeading} mt-1 font-medium text-[16px] md:text-xl`}>
                  Our customer support are available to attend to you 24/7
                </p>
              </div>
              <div className="flex justify-center">
                <form className={`${styles.form} mt-2 md:mt-10`} onSubmit={onSubmitForm}>
                  <div className="flex flex-col text-[16px] md:text-[20px]">
                    <div className={`${errors.error} ${error ? 'block' : 'hidden'}`}>
                      Error Sending your request
                    </div>
                    <div>
                      <label>Name</label>
                      <input
                        value={full_name}
                        onChange={updateName}
                        type="text"
                        placeholder="Enter your Name"
                        className={`${styles.input} border w-full outline-none p-6 ${
                          efull_name ? `${styles.error}` : ''
                        }`}
                      />
                      {efull_name && (
                        <p className="text-red-600 mt-2 text-xs">This field is required</p>
                      )}
                    </div>

                    <div>
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={updateEmail}
                        type="email"
                        placeholder="Enter your email address"
                        className={`${styles.input} border w-full outline-none p-6 ${
                          eemail ? `${styles.error}` : ''
                        }`}
                      />
                      {eemail && (
                        <p className="text-red-600 mt-2 text-xs">This field is required</p>
                      )}
                    </div>

                    <label>Message</label>
                    <textarea
                      value={message}
                      onChange={updateMessage}
                      className={`${styles.input} ${
                        styles.textArea
                      } md:col-span-2 border p-4 rounded-[10px]  outline-none px-5 ${
                        emessage ? `${styles.error}` : ''
                      }`}
                      placeholder="Type in your message"
                      rows="10"
                    />
                  </div>
                  {emessage && <p className="text-red-600  text-xs mt-2">This field is required</p>}
                  {loading && (
                    <div className="text-center mt-2">
                      <div className={styles.ring}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-center mt-5">
                    <button className={styles.submit}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="flex justify-center">
                <img src={cleanup} alt="cleanup sucessfull" />
              </div>
              <div className="text-center mt-10">
                <Header1 label="Thank you for Getting in Touch" w="semibold" />
                <Text
                  label="We read every message and typically respond within 24hrs"
                  type="text3"
                  w="sm"
                  className="mt-5 opacity-80"
                />
              </div>
              <div className="flex flex-col items-center md:flex-row gap-4 md:gap-8 justify-center mt-10">
                <Link to="/" className="w-full md:w-auto">
                  <button
                    onClick={reset}
                    className="bg-[#2158D2] w-full h-12 hover:border-none hover:bg-[##2563EB] rounded-lg md:h-[40px] text-[#FFFFFF] md:w-[140px] border-[#2158D2]">
                    Go back Home
                  </button>
                </Link>
                <button
                  onClick={reset}
                  className="bg-[inherit] w-full h-12 hover:border-none hover:bg-[#FFFFFF] rounded-lg md:h-[40px] text-[#2158D2] border-[1px] md:w-[140px] border-[#2158D2]">
                  Contact us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
