import React, { useState } from 'react';
import TopNavbar from '../../components/UI/TopNavbar';
import { CheckoutWrapper } from './checkoutStyle';
import smsIcon from '../../assets/icons/sms.svg';
import cardIcon from '../../assets/icons/card.svg';
import { Button } from '../pricing-getstarted/getStartedStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
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

  const selectHandler = (e) => {
    setPlanner(plan[e.target.value]);
  };

  return (
    <CheckoutWrapper>
      <TopNavbar />
      <div className="checkout-page-wrapper">
        <div className="checkout-page">
          <div className="checkout-header">
            <h1>CHECKOUT</h1>
            <Link to="/pricing" className="closeBtn">
              <AiOutlineClose />
            </Link>
          </div>
          <form className="checkout-form">
            <div className="form-group">
              <div className="label"> Your Plan</div>
              <div className="selctWrapper">
                <select onChange={selectHandler}>
                  {plan.map((value, index) => (
                    <option value={index} key={index}>
                      {value.plan}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              {/* first input */}
              <div>
                <div className="label">Your Billing Cycle</div>
                <div className="radio-wrapper">
                  <div className="radio-content">
                    <input type="radio" className="billing-radio" name="billing" />
                    <span>
                      Billed yearly <small style={{ color: '#1877F2' }}>SAVE 20%</small>
                    </span>
                  </div>
                  <span>{planner.billingCircle?.yearly}</span>
                </div>
              </div>

              {/* second input */}
              <div>
                <div className="radio-wrapper">
                  <div className="radio-content">
                    <input type="radio" className="billing-radio" name="billing" />
                    <span>Billed monthly</span>
                  </div>
                  <span>{planner.billingCircle.monthly}</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="label"> Your payment method</div>
              <div className="inputWrapper">
                <img className="icon" src={smsIcon} alt="sms" />
                <input type="email" placeholder="Email" />
              </div>
            </div>

            <div className="form-group">
              <div className="inputWrapper">
                <img className="icon" src={cardIcon} alt="sms" />
                <input type="email" placeholder="Card number" />
                <span>MM/YY CVC</span>
              </div>
            </div>

            <div className="form-group">
              <Button width="20rem" className="submitBtn" bgColor="#1877f2">
                Confirm and Pay
              </Button>
            </div>
          </form>
        </div>
      </div>
    </CheckoutWrapper>
  );
};

export default index;
