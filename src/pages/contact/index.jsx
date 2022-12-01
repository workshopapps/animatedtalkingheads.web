import { useState } from 'react';
import { Button } from '../../components/UI/Button';
import Layout from '../../components/UI/Layout';
import { Text } from '../../components/UI/Text';
import { Header1 } from '../../components/UI/Text/text.stories';
import cleanup from '../../assets/icons/contact/cleanup.svg';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Contact = () => {
  const [submitted, setSubmittted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [emessage, setEMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [eemail, setEEmail] = useState(false);
  const [full_name, setFullName] = useState('');
  const [efull_name, setEFullName] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (full_name === '') {
      setEFullName(true);
    }
    if (email === '') {
      setEEmail(true);
    }
    if (message === '') {
      setEMessage(true);
    } else {
      setLoading(true);
      setTimeout(() => {
        setSubmittted(true);
        setLoading(false);
      }, 2000);
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
              <form className={`${styles.form} mt-10`} onSubmit={onSubmitForm}>
                <div className="grid md:grid-cols-2 gap-5 md:gap-3 xl:gap-7 text-[16px] md:text-[20px]">
                  <div>
                    <input
                      value={full_name}
                      onChange={updateName}
                      type="text"
                      placeholder="Enter your full name"
                      className={`${styles.input} border w-full p-3 md:p-4 outline-none px-5 ${
                        efull_name ? `${styles.error}` : ''
                      }`}
                    />
                    {efull_name && (
                      <p className="text-red-600 mt-2 text-xs">This field is required</p>
                    )}
                  </div>

                  <div>
                    <input
                      value={email}
                      onChange={updateEmail}
                      type="email"
                      placeholder="Enter your email address"
                      className={`${
                        styles.input
                      } border w-full p-3 md:p-4 rounded-[10px] outline-none px-5 ${
                        eemail ? `${styles.error}` : ''
                      }`}
                    />
                    {eemail && <p className="text-red-600 mt-2 text-xs">This field is required</p>}
                  </div>

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
                  <Button type="submit">Submit</Button>
                </div>
              </form>
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
              <div className="flex justify-center mt-10">
                <Link to="/">
                  <Button label={'get started'}>Go back Home</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
