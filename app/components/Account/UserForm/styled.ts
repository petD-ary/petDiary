import styled from 'styled-components';

export const AccountForm = styled.form`
  width: 100%;
  padding: 48px 0 64px;

  & button[type='submit'] {
    width: 100%;
    background: #000;
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    padding: 20px 0;
    margin-top: 60px;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`;
