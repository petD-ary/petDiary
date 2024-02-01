'use client';

import { MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';

import IconClose from '@/assets/images/Icon-x.svg';
import Button from '@/components/Button';
import { Title } from '@/constants/Typography/TypographyList';
import { useModal } from '@/hooks/useModal';

export const MODAL_TYPE = {
  BREED: 'breed',
  WEATHER: 'weather',
  WALK: 'walk',
};
export type MODAL_TYPE = (typeof MODAL_TYPE)[keyof typeof MODAL_TYPE];

export const MODAL_VARIANT = {
  SLIDE: 'slide',
  CARD: 'card',
  // 꽉찬 모달 명칭
  FULLCARD: 'fullCard',
};

export type MODAL_VARIANT = (typeof MODAL_VARIANT)[keyof typeof MODAL_VARIANT];

interface Props {
  /**
   * Modal main components
   */
  children?: React.ReactNode;
  /**
   * Modal type
   */
  type: MODAL_TYPE;
  variant?: MODAL_VARIANT;
}

const Modal = ({ type, children, variant = MODAL_VARIANT.SLIDE }: Props) => {
  const { modalList, removeModal } = useModal();

  const closeModal = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    removeModal();
  };

  const modalContent = modalList.includes(type) ? (
    <div
      onClick={(e) => closeModal(e)}
      className='fixed z-20 md:max-w-3xl left-1/2 bg-black/30 bottom-0 -translate-x-1/2 w-full h-full'
    >
      <ModalContainer variant={variant}>{children}</ModalContainer>
    </div>
  ) : null;

  return createPortal(modalContent, document.body);
};

/**
 * Modal 생성 시에 useEffect 실행되서 Modal 을 제외하고, scroll 동작 막기 위함.
 */
const ModalContainer = ({
  children,
  variant,
}: {
  children?: React.ReactNode;
  variant?: MODAL_VARIANT;
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (variant === MODAL_VARIANT.SLIDE)
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className='animate-slide-up absolute left-1/2 -translate-x-1/2 bottom-0 w-full md:max-w-3xl h-[calc(100%_-_56px)]
      shadow-[0_-10px_60px_rgba(0,0,0,0.15)] rounded-t-lg rounded-r-lg bg-white flex flex-col'
      >
        {children}
      </div>
    );

  if (variant === MODAL_VARIANT.CARD)
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className='max-w-lg w-full mx-auto absolute left-1/2 -translate-x-1/2 top-[220px]'
      >
        <div className='bg-white rounded-lg mx-5 min-h-[156px]'>{children}</div>
      </div>
    );
};

const Header = ({
  title,
  titleType = 'left',
}: {
  title: string;
  titleType?: 'center' | 'left' | 'left-X';
}) => {
  const { removeModal } = useModal();
  if (titleType === 'left')
    return (
      <div>
        <div className='px-2 py-1 flex justify-end'>
          <div className='p-3 cursor-pointer' onClick={() => removeModal()}>
            <IconClose />
          </div>
        </div>
        <p className={`text-grayColor-900 px-5 py-3 ${Title.title2}`}>
          {title}
        </p>
      </div>
    );

  if (titleType === 'center')
    return (
      <div className='px-2 py-1 flex justify-between items-center'>
        <div className='w-12' />
        <p className={`text-grayColor-900 ${Title.title3}`}>{title}</p>
        <div className='p-3 cursor-pointer' onClick={() => removeModal()}>
          <IconClose />
        </div>
      </div>
    );

  if (titleType === 'left-X')
    return (
      <div className='pl-4 pr-2 py-1 flex justify-between items-center'>
        <p className={`text-grayColor-900 ${Title.title3}`}>{title}</p>
        <div className='p-[10px] cursor-pointer' onClick={() => removeModal()}>
          <IconClose />
        </div>
      </div>
    );
};

const ModalButton = () => {
  const { removeModal } = useModal();
  return (
    <div className='py-3 px-5 bg-white w-full shadow-[0_-4px_12px_0_rgba(0_,0_,0_,0.04)]'>
      <Button onClick={() => removeModal()} variant='contained'>
        선택
      </Button>
    </div>
  );
};

Modal.Header = Header;
Modal.Button = ModalButton;
export default Modal;
