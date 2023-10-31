import styled from "styled-components";

export const TitleWrapper = styled.div`
  height: 100px;
  padding: 0 48px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.title === "회원가입" &&
    `
    border-bottom: 1px solid #f0f0f0;
  `}

  & h2 {
    font-size: 2rem;
    font-weight: 600;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  overflow: hidden;
  position: absolute;
  left: 48px;
  bottom: 20px;
  cursor: pointer;

  img {
    padding: 6px;
  }
`;