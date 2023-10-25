import styled from 'styled-components';

export const Container = styled.div`
  width: 488px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;

  & p > a {
    padding-left: 6px;
    text-decoration: underline;
    font-weight: 600;
  }
`;
