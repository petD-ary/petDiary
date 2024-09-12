import { ReactNode } from 'react';

import IconNoContent from '@/assets/images/icon-noContent.svg';

/**
 * NoContent 컴포넌트
 *
 * @description
 * 이 컴포넌트는 "콘텐츠 없음" 상태를 표시하는 재사용 가능한 UI 컴포넌트입니다.
 * 주로 콘텐츠가 없거나 로딩 중일 때 설명과 함께 액션 버튼을 보여주는 데 사용됩니다.
 *
 * @example
 * <NoContent>
 *    <NoContent.Desc>데이터가 없습니다.</NoContent.Desc>
 *    <NoContent.Button onClick={handleClickAddData}>추가하기</NoContent.Button>
 * </NoContent>
 *
 * @props
 * - className (string): 추가적인 스타일링을 위한 클래스
 * - children (ReactNode): NoContent 안에 표시할 커스텀 자식 요소.
 *
 * @subcomponents
 * - NoContent.Desc: 콘텐츠가 없는 이유를 설명하는 섹션.
 * - NoContent.Button: 다시 시도 또는 새로고침과 같은 사용자 액션을 제공하는 버튼 컴포넌트.
 */
const NoContent = ({
  className = '',
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={`w-full h-full flex flex-col justify-center items-center ${className}`}
    >
      <IconNoContent />
      {children}
    </div>
  );
};

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children?: ReactNode;
}) => {
  return (
    <button
      className={`
      py-[10px] px-4 rounded-full
      border border-extra-border hover:border-extra-active
      text-secondary-400
      text-button font-semibold shadow-level1
      transition-colors
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Description = ({ children }: { children?: ReactNode }) => {
  return (
    <h3 className='text-subTitle1 font-semibold text-text-title pt-1 pb-4'>
      {children + '😥'}
    </h3>
  );
};

/**
 * NoContent.Desc 컴포넌트
 *
 * @description
 * 이 컴포넌트는 "콘텐츠 없음" 상태에 대한 설명을 표시하는 섹션입니다.
 * 주로 간단한 문구나 메시지를 사용자에게 전달하는 데 사용됩니다.
 *
 * @props
 * - children (ReactNode): 설명으로 표시할 텍스트 또는 요소.
 */
NoContent.Desc = Description;

/**
 * NoContent.Button 컴포넌트
 *
 * @설명
 * 이 컴포넌트는 "콘텐츠 없음" 상태에서 사용자에게 특정 액션을 제공하는 버튼입니다.
 * 예를 들어, 다시 시도하거나 새로고침하는 등의 동작을 제공할 수 있습니다.
 *
 * @props
 * - onClick (function): 버튼이 클릭되었을 때 호출되는 함수.
 * - children (ReactNode): 버튼 안에 표시될 텍스트 또는 요소.
 */
NoContent.Button = Button;

export default NoContent;
