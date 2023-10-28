import styled from 'styled-components';

export const InputWrapper = styled.div`

  position: relative;
  width: 100%;
  padding-top: 36px;
  font-size: 1.4rem;
  margin-top: 20px;
  & label {
    position: absolute;
    top: 10px;
    left: 8px;
  }
  & input {
    flex-grow: 1;
    outline: none;
    border: none;
    padding: 20px;
    background: #f0f0f0;
    border-radius: 8px;
    position: relative;
    &::placeholder {
      color: #000;
    }
    &::before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 100%;
      background: #000;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
    }
  }
  & input[type='text'],
  input[type='password'] {
    cursor: text;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  & button {
    border: none;
    background: #d9d9d9;
    border-radius: 8px;
    padding: 0 24px;
  }
  & p {
    padding: 20px 0 0 20px;
  }
`;
