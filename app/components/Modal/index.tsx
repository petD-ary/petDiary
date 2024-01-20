'use client';

import { MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';

import IconClose from '@/assets/images/Icon-x.svg';
import Button from '@/components/Button';
import { Title } from '@/components/Typography/TypographyList';
import { useModal } from '@/hooks/useModal';

export const MODAL_TYPE = {
  BREED: 'breed',
};
export type MODAL_TYPE = (typeof MODAL_TYPE)[keyof typeof MODAL_TYPE];

interface Props {
  /**
   * Modal main components
   */
  children?: React.ReactNode;
  /**
   * Modal type
   */
  type: MODAL_TYPE;
}



const Modal = ({ type, children }: Props) => {
  const { modalList, removeModal } = useModal();
  
  const closeModal = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    removeModal();
  };

  const modalContent = modalList.includes(type) ? (
    <div onClick={(e) => closeModal(e)} className='fixed z-20 w-full md:max-w-3xl h-full left-1/2 bottom-0 transform -translate-x-1/2 bg-black/30'>
      <ModalContainer>
        {children}
      </ModalContainer>
    </div>
  ) : null;

  return createPortal(modalContent, document.body);
};

/**
 * Modal 생성 시에 useEffect 실행되서 Modal 을 제외하고, scroll 동작 막기 위함.
 */
const ModalContainer = ({
  children,
}: {children?: React.ReactNode}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div onClick={(e) => e.stopPropagation()} 
      className='animate-slide-up absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full md:max-w-3xl h-[calc(100%_-_56px)]
      shadow-[0_-10px_60px_rgba(0,0,0,0.15)] rounded-t-lg rounded-r-lg bg-white flex flex-col'>
      {children}
    </div>
  );
};

const Header = ({title}: {title: string}) => {
  const { removeModal } = useModal();
  return (
    <>
      <div className='px-2 py-1 flex justify-end'>
        <div className='p-3 cursor-pointer' onClick={() => removeModal()}>
          <IconClose />
        </div>
      </div>
      <p className={`text-grayColor-900 px-5 py-3 ${Title.title2}`}>
        {title}
      </p>
    </>
  )
}

const ModalButton = () => {
  const { removeModal } = useModal();
  return (
    <div className='py-3 px-5 bg-white w-full shadow-[0_-4px_12px_0_rgba(0_,0_,0_,0.04)]'>
      <Button onClick={() => removeModal()} variant='contained'>
        선택
      </Button>
    </div>
  )
}

Modal.Header = Header;
Modal.Button = ModalButton;
export default Modal;
