import React, { useState } from 'react';
import TopNavbar from '../../components/UI/TopNavbar';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import styles from './checkout.module.css';
import axios from 'axios';
import { UserAuth } from '../../context/AuthContext';

const index = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  const plan = [
    {
      plan: 'Podcaster Plan',
      billingCircle: {
        yearly: '$102.00/ year',

        monthly: '$9.99/ mo'
      },
      price: {
        yearly: 102,
        monthly: 10
      }
    },
    {
      plan: 'Content Creator Plan',
      billingCircle: {
        yearly: '$227.00/ year',
        monthly: '$18.99/ mo'
      },
      price: {
        yearly: 227,
        monthly: 19
      }
    }
  ];
  const url = 'https://api.voxclips.hng.tech/api/v1/paystack/pay';
  const [planner, setPlanner] = useState(plan[0]);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const selectHandler = (e) => {
    setPlanner(plan[e.target.value]);
  };
  const onOptionChange = (e) => {
    setAmount(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/sign-up');
    }
    if (name === '') {
      setNameError(true);
    } else if (amount === '') {
      setAmountError(true);
    }
    if (!amountError && !nameError) {
      const data = {
        full_name: name,
        amount: amount
      };
      axios
        .post(url, data, {
          headers: {
            Authorization: `Bearer ${user}`
          }
        })

        .then((res) => {
          if (res.data.link) {
            window.location.replace(res.data.link);
          } else {
            setError(res);
          }
        })
        .then((res) => console.log(res))
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return (
    <div className={styles.checkout_wrapper}>
      <TopNavbar />
      <div className={styles.checkout_page_wrapper}>
        <div className={`${styles.checkout_page} mt-20`}>
          <div className="bg-sec-600 items-center p-5 lg:py-10 text-white">
            <h1 className="col-start-2 text-center font-medium text-2xl lg:text-4xl ">Check Out</h1>
          </div>
          <div className="flex flex-end m-5">
            <Link to="/pricing" className=" ml-auto">
              <div className="flex gap-1 items-center text-pri-700">
                <p>Close</p>
                <AiOutlineClose color="blue" className="border rounded-full  border-pri-700" />
              </div>
            </Link>
          </div>
          <form className="mx-auto w-[90%] lg:w-[70%] mt-10">
            <div className={styles.form_group}>
              <div className={styles.label}> Your Plan</div>
              <div className={styles.form_select}>
                <select
                  onChange={selectHandler}
                  className="w-full  border border-[#8f9092] p-5 rounded-md">
                  {plan.map((value, index) => (
                    <option value={index} key={index}>
                      {value.plan}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={`${styles.form_group} my-10`}>
              {/* first input */}
              <div>
                <div className={styles.label}>Your Billing Cycle</div>
                <div className={styles.radio_wrapper}>
                  <div className={styles.radio_content}>
                    <input
                      required
                      type="radio"
                      value={planner.price?.yearly}
                      className={styles.billing_radio}
                      name="billing"
                      // checked={billing === planner.billingCircle?.yearly}
                      onChange={onOptionChange}
                    />
                    <span className="lg:ml-5">
                      Billed yearly <small className="text-pri-600 lg:ml-10 ">SAVE 20%</small>
                    </span>
                  </div>
                  <span>{planner.billingCircle?.yearly}</span>
                </div>
              </div>

              {/* second input */}
              <div>
                <div className={styles.radio_wrapper}>
                  <div className={styles.radio_content}>
                    <input
                      required
                      type="radio"
                      value={planner.price?.monthly}
                      className={styles.billing_radio}
                      name="billing"
                      // checked={'billing' === planner.billingCircle?.yearly}
                      onChange={onOptionChange}
                    />
                    <span className="lg:ml-5">Billed monthly</span>
                  </div>
                  <span>{planner.billingCircle.monthly}</span>
                </div>
              </div>
              <p className="text-red-600">{amountError && 'pick a plan'}</p>
            </div>

            <div className={`${styles.form_group} mt-10`}>
              <div className={styles.label}>Enter Your Details</div>{' '}
              <div className="mb-5">
                <div className=" border border-[#8f9092] px-2 md:px-5 py-3 items-center flex gap-5 rounded-md">
                  <FiUser size="25" color="#8f9092" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="outline-none"
                    required
                  />
                </div>
                <p className="text-red-600 text-sm">{nameError && 'Enter your full name'}</p>
              </div>
            </div>
            <p className="text-red-600 text-sm">{error && error}</p>
            <div className="lg:w-[60%] w-full mx-auto mt-5 mb-20">
              <button
                onClick={submitForm}
                className="w-full py-4  text-white text-center rounded-lg bg-pri-600">
                Proceed to Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
