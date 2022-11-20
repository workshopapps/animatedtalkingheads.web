import styled from 'styled-components';
import bg from '../../assets/icons/price_bg_one.jpg';

export const GetStartedWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  & .mainInner {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  & .InnerSecion {
    background-color: #fff;
    width: 70rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 705px;
    border-radius: 8px;
    margin: 10%;
    & .logo {
      width: 76px;
      margin: 5% 0;
    }
    & h2 {
      font-size: (48px);
      text-align: center;
    }

    & p {
      font-size: calc(200%);
      font-weight: lighter;
      text-align: center;
    }

    & .buttonWrapper {
      margin-top: 8%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const Button = styled.button`
  width: ${({ width }) => (width ? width : '20rem')};
  min-width: ${({ width }) => (width ? width : '0')};
  height: 56px;
  background: ${({ bgColor }) => (bgColor ? bgColor : 'white')};
  border: ${({ border }) => (border ? border : 'none')};
  color: ${({ textColor }) => (textColor ? textColor : '1877f2')};
  border-radius: 8px;
  color: #fefefe !important;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
