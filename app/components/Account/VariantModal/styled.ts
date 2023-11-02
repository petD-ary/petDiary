import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.35);

  & > div {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 612px;
    height: 684px;
    padding: 48px 24px 0;
    background: #fff;
    box-shadow: 0 -10px 60px rgba(0, 0, 0, 0.15);
    overflow-y: hidden;
  }

  & h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  & p {
    cursor: default;
    background: #f0f0f0;
    border-radius: 8px;
    margin: 20px 0 8px;
    position: relative;
    width: 100%;
    padding: 20px;
    padding-left: 56px;
    font-weight: 500;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 20px;
      top: 50%;
      z-index: 10;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      border-radius: 100%;
      background: #d9d9d9;
    }
  }

  & ul {
    height: 100%;
    overflow-y: scroll;

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    &::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
    }

    & li {
      cursor: pointer;
    }
  }
`;
