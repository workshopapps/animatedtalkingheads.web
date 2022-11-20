import styled from 'styled-components';
import bg from '../../assets/icons/price_bg_two.jpg';

export const CheckoutWrapper = styled.div`
  & .checkout-page-wrapper {
    padding: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
  }
  & .checkout-header {
    background-color: #1877f2;
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 24px;
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    & h1 {
      /* border: 2px solid red; */
      width: 100%;
    }

    & .closeBtn {
      position: absolute;
      right: 20px;
    }
  }
  & .checkout-page {
    width: 70rem;
    min-height: 796px;
    background-color: #fff;

    & .checkout-form {
      margin: 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & .form-group {
        width: 100%;
        & .label {
          margin: 1.5% 0;
        }

        & .radio-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 8px;
          border: 1px solid #8f9092;
          height: 57px;
          padding: 0 3% 0 2%;
          margin-bottom: 2%;

          & .radio-content {
            flex-grow: 1;
            display: flex;
            align-items: center;
            /* width: 100%; */
            gap: 4px;
          }
          /* START CUSTOM RADIO BTN */

          & .billing-radio {
            width: 24px;
            height: 24px;
            transform: scale(1);
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em var(--form-control-color);
          }

          & .billing-radio:after {
            border-radius: 15px;
            display: inline-block;
          }

          & .billing-radio:checked:after {
            width: 12px;
            height: 12px;
            border-radius: 15px;
            top: -0.5px;
            left: 5.6px;
            position: relative;
            background-color: #fff;
            border: 1px solid #1877f2;
            content: '';
          }
        }
        & .selctWrapper {
          padding: 0 3% 0 2%;
          border: 1px solid #8f9092;
          border-radius: 10px;
        }
        & select {
          width: 100%;
          height: 57px;
          outline: none;
        }

        & .inputWrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 8px;
          border: 1px solid #8f9092;
          height: 57px;
          padding: 0 3% 0 2%;
          margin-bottom: 2%;

          & .icon {
            width: 32px;
          }

          & span {
            width: 20%;
            color: #8f9092;
            flex-grow: 1;
          }
          & input {
            width: 100%;
            outline: none;
            margin-left: 1%;
            flex-grow: 1;
          }
        }

        & .submitBtn {
          margin: 0 auto;
        }
      }
    }
  }
`;
