import React, { useState } from 'react';
import TopNavbar from '../../components/UI/TopNavbar';
import smsIcon from '../../assets/icons/sms.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from './checkout.module.css';
const index = () => {
  const plan = [
    {
      plan: 'Podcaster Plan',
      billingCircle: {
        yearly: '$102.00/ year',
        monthly: '$9.99/ mo'
      }
    },
    {
      plan: 'Content Creator Plan',
      billingCircle: {
        yearly: '$227.00/ year',
        monthly: '$18.99/ mo'
      }
    }
  ];
  const [planner, setPlanner] = useState(plan[0]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const selectHandler = (e) => {
    setPlanner(plan[e.target.value]);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, amount, email);
  };
  return (
    <div className={styles.checkout_wrapper}>
      <TopNavbar />
      <div className={styles.checkout_page_wrapper}>
        <div className={`${styles.checkout_page} mt-20`}>
          <div className="bg-pri-600 items-center grid grid-cols-3 p-5 text-white">
            <h1 className="col-start-2 text-center font-medium text-xl lg:text-2xl ">CHECKOUT</h1>

            <Link to="/pricing" className=" ml-auto">
              <AiOutlineClose color="white" />
            </Link>
          </div>
          <form className="mx-auto w-[90%] mt-10">
            <div className={styles.form_group}>
              <div className={styles.label}> Your Plan</div>
              <div className="">
                <select
                  onChange={selectHandler}
                  className="w-full border border-[#8f9092] p-5 rounded-md">
                  {plan.map((value, index) => (
                    <option value={index} key={index}>
                      {value.plan}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={`${styles.form_group} mt-10`}>
              {/* first input */}
              <div>
                <div className={styles.label}>Your Billing Cycle</div>
                <div className={styles.radio_wrapper}>
                  <div className={styles.radio_content}>
                    <input
                      type="radio"
                      value={planner.billingCircle?.yearly}
                      className={styles.billing_radio}
                      name="billing"
                      onChange={(e) => setAmount(e.target.checked)}
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
                      type="radio"
                      value={planner.billingCircle.monthly}
                      className={styles.billing_radio}
                      name="billing"
                    />
                    <span className="lg:ml-5">Billed monthly</span>
                  </div>
                  <span>{planner.billingCircle.monthly}</span>
                </div>
              </div>
            </div>

            <div className={`${styles.form_group} mt-10`}>
              <div className={styles.label}>Enter Your Details</div>{' '}
              <div className=" border border-[#8f9092] px-2 md:px-5 py-3 items-center flex gap-5 rounded-md mb-5">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="outline-none"
                />
              </div>
              <div className=" border border-[#8f9092] px-2 md:px-5 py-3 items-center flex gap-5 rounded-md mb-5">
                <img className={styles.icon} src={smsIcon} alt="sms" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="outline-none"
                />
              </div>
            </div>

            <div className="lg:w-[60%] w-full mx-auto mt-5">
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
