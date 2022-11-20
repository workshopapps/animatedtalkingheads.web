import styled from 'styled-components';

export const CardWrapper = styled.div`
  box-sizing: border-box;

  width: 30%;
  height: 78rem;

  background: #fafafa;
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 8px;
  margin: 2%;
  /* Inside auto layout */
`;

export const Title = styled.div`
  width: 100%;
  margin-top: 3.7rem;
  margin-bottom: 1rem;

  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 154%;

  color: #2158d2;
`;

export const Price = styled.div`
  width: 100%;

  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: #1a1924;
`;

export const Tier = styled.div`
  width: 100%;
  margin-top: 1rem;
  /* BODY TEXT 4 MEDIUM

WEB
*/
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: rgba(143, 144, 146, 0.8);
`;

export const FirstDiv = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.8rem;
  align-items: center;
`;

export const Desc = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  color: #1a1924;

  /* Inside auto layout */
`;

export const Email = styled.span`
  color: #2563eb;
`;
