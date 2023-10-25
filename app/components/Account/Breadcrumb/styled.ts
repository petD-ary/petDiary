import { StaticImageData } from 'next/image';
import styled from 'styled-components';

export const StepWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 64px;
  border-bottom: 2px solid #000;
  padding: 48px 0;
  margin: 0 auto;
`;

interface SteplistProps {
  readonly $active: boolean;
  readonly $chevron: StaticImageData;
  readonly $activeChevron: StaticImageData;
}

export const Steplist = styled.li<SteplistProps>`
  color: ${({ $active }) => ($active ? '#000' : '#D9D9D9')};
  position: relative;
  &:after {
    content: '';
    background: ${({ $active, $chevron, $activeChevron }) =>
        `url(${$active ? `${$activeChevron.src}` : `${$chevron.src}`})`}
      no-repeat;
    background-size: contain;
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    right: -38px;
    top: 50%;
    transform: translateY(-50%);
  }
  &:last-child:after {
    background: none;
  }
`;
