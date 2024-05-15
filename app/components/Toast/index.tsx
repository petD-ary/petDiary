import { Key, useEffect, useState } from 'react';

export interface ToastProps {
  id: Key;
  message: string;
}
/** @type {number} 토스트 유지 시간 */
const TOAST_DURATION = 2000;

/** @type {number} 토스트 애니메이션 시간 */
const ANIMATION_DURATION = 350;

const Toast = ({ id, message }: ToastProps) => {
  const [opacity, setOpacity] = useState(0.2);

  useEffect(() => {
    setOpacity(1);

    const timeoutForVisible = setTimeout(() => {
      setOpacity(0);
    }, TOAST_DURATION - ANIMATION_DURATION);

    return () => {
      clearTimeout(timeoutForVisible);
    };
  }, [id]);

  return (
    <div
      style={{ opacity: opacity }}
      className={`bg-grayColor-900/75
      min-w-[300px] px-4 py-3 max-w-[360px]
      rounded-full opacity-[opacity] transition-all ease-in-out
      ${opacity === 0 ? 'translate-y-[50px]' : 'translate-y-0'}
      `}
    >
      <div className='flex justify-center text-grayColor-10 text-body1 font-medium text-[15px]'>
        {message}
      </div>
    </div>
  );
};

export default Toast;
