import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;

  margin: 32px 5% 0% 5%;
  //position: absolute;
  width: 90%;
  height: 100%;
  /* left: 138px; */
  // top: 15%;
`;

export const H1 = styled.h1``;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;

  width: 80%;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  @media only screen and (max-width: 600px) {
    margin-bottom: -3rem;
  }
`;

export const Header = styled.p`
  margin-bottom: 38px;
  margin-top: 0;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;

  color: #1a1924;

  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`;

export const Paragraph = styled.p`
  width: 100%;

  left: 125px;

  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;

  text-align: center;

  color: #1a1924;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const SecondParagraph = styled.p`
  width: 100%;
  height: 30px;

  top: 21px;
  text-align: center;
  margin-top: 21px;
  margin-bottom: 42px;

  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  color: #1a1924;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const FirstMobileParagraph = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;

    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const NumberSpan = styled.span`
  color: #2563eb;
`;

export const CardSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px;
  margin-top: 3.7rem;

  width: 100%;
`;

export const LoopDiv = styled.div`
  right: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 0px;

  width: 95%;

  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  height: 5rem;

  /* identical to box height */

  color: #1a1924;

  .text {
  }
`;

export const LoopImg = styled.img`
  width: 2rem;
  margin-right: 0.7rem;
  margin-left: 1.2rem;
`;

export const Line = styled.div`
  width: 90%;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`;
export const LastSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 2rem;
  padding: 2%;
  width: 100%;
  margin-bottom: 7.4rem;
`;
export const QuestionHeader = styled.div`
  height: 60px;

  text-align: center;
  margin-bottom: 3rem;

  /* HEADER 1 MEDIUM

WEB
*/
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 0rem;
  }
`;

export const SubQuestion = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 0.5rem;

  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;

  color: #1a1924;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 600px) {
    margin-bottom: 0.7rem;
  }
`;

export const SubAnswer = styled.div`
  width: 100%;
  height: 50px;

  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;

  color: #1a1924;
  @media only screen and (max-width: 600px) {
    margin-bottom: 3rem;
  }
`;

export const VeryLastSection = styled.div`
  width: 100%;

  /* BODY TEXT 4 MEDIUM

WEB
*/
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 2.5rem;
  text-align: center;
  /* identical to box height */

  color: #1a1924;
`;
