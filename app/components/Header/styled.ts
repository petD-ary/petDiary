import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 96px);
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.8rem;
    padding: 2px 6px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  transition: opacity 150ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
