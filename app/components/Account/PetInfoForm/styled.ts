import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  padding: 48px 0 64px;
  margin: 0 auto;
  font-size: 1.4rem;
`;

export const SelectBox = styled.div`
  display: flex;
  gap: 12px;
  > * {
    background: #f0f0f0; 
    flex: 1;
    height: 56px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    padding: 10px 8px;
    margin-top: 20px;
  }

  select {
    position: relative;
    width: 100%;
    padding: 20px;
    background: #f0f0f0;
    border-radius: 8px;
    outline: none;
    -webkit-appearance: none;
    appearance: none;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 12px;
      width: 20px;
      height: 20px;
      background: #ff0000; /* checkbox 비활성화 배경색 */
      border: 1px solid #000;
      border-radius: 4px;
      transform: translateY(-50%);
      pointer-events: none;
      z-index: 10;
    }

    /* 선택된 경우 checkbox 스타일 변경 */
    &:checked::before {
      background: #000; /* checkbox 활성화 배경색 */
      border: 1px solid #000; /* checkbox 활성화 테두리 색상 */
    }
  }

  button.active {
    background-color: #000;
    color: white;
  }

  button {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;
