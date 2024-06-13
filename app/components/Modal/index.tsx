'use client';

import { MouseEvent, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import IconClose from '@/assets/images/icon-x.svg';
import Button from '@/components/Button';
import { Title } from '@/constants/Typography/TypographyList';
import { useModal } from '@/hooks/view/useModal';

export const MODAL_TYPE = {
  BREED: 'breed',
  WEATHER: 'weather',
  WALK: 'walk',
  PET_EDIT_LIST: 'petEditList',
  PET_ADD: 'petAdd',
  PET_EDIT: 'petEdit',
  PET_DELETE: 'petDelete',
  CALENDAR: 'calendar',
  WHEEL_CALENDAR: 'wheelCalendar',
  SCHEDULE_ADD: 'scheduleAdd',
  SCHEDULE_LOCATION: 'scheduleLocation',
  SCHEDULE_REPEAT: 'scheduleRepeat',
  SCHEDULE_ALARM: 'alarm',
  SCHEDULE_DETAIL: 'scheduleDetail',
  WALKING_INFO: 'workingInfo',
  INFO_FILTER_PET_TYPE: 'infoFilterPetType',
  INFO_FILTER_IMPORTANCE: 'infoFilterImportance',
  INFO_FILTER_SIGNAL: 'infoFilterSignal',
  INFO_FILTER_SIGNAL_DEPTH: 'infoFilterSignalDepth',
  INFO_FILTER_RISK: 'infoFilterRisk',
  SEARCH: 'search',
};

export type MODAL_TYPE = (typeof MODAL_TYPE)[keyof typeof MODAL_TYPE];

export const MODAL_VARIANT = {
  SLIDE: 'slide',
  HALF_SLIDE: 'halfSlide',
  CARD: 'card',
  ALL: 'all',
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

  const isBrowser = typeof window !== 'undefined';

  return isBrowser ? createPortal(modalContent, document.body) : null;
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

  if (variant === MODAL_VARIANT.SLIDE) {
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className='animate-slide-up absolute left-1/2 -translate-x-1/2 bottom-0 w-full md:max-w-3xl h-[calc(100%_-_56px)]
      shadow-[0_-10px_60px_rgba(0,0,0,0.15)] rounded-t-lg bg-white flex flex-col'
      >
        {children}
      </div>
    );
  }

  if (variant === MODAL_VARIANT.HALF_SLIDE) {
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className='animate-slide-up absolute left-1/2 -translate-x-1/2 bottom-0 w-full md:max-w-3xl 
      shadow-[0_-10px_60px_rgba(0,0,0,0.15)] rounded-t-lg bg-white flex flex-col'
      >
        {children}
      </div>
    );
  }

  if (variant === MODAL_VARIANT.CARD) {
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className='max-w-lg w-full mx-auto absolute left-1/2 -translate-x-1/2 top-[220px]'
      >
        <div className='bg-white rounded-lg mx-5 min-h-[156px]'>{children}</div>
      </div>
    );
  }

  if (variant === MODAL_VARIANT.ALL) {
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-full h-full bg-white mx-auto absolute left-1/2 -translate-x-1/2 top-0 '
      >
        {children}
      </div>
    );
  }
  return null;
};

const Header = ({
  title,
  desc,
  titleType = 'left',
  onClick,
}: {
  title: string;
  desc?: string | number;
  titleType?: 'center' | 'left' | 'left-X';
  onClick?: () => void;
}) => {
  const { removeModal } = useModal();
  if (titleType === 'left')
    return (
      <div>
        <div className='px-2 py-1 flex justify-end'>
          <div
            className='p-3 cursor-pointer'
            onClick={() => {
              onClick && onClick();
              removeModal();
            }}
          >
            <IconClose />
          </div>
        </div>
        <p className={`text-text-title px-5 py-3 ${Title.title2}`}>
          {title}
          {desc ? (
            <span className='pl-[6px] text-primary-500'>{desc}</span>
          ) : null}
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
  return null;
};

interface ModalButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent) => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ children, onClick }) => {
  const { removeModal } = useModal();

  const handleClick = (event?: MouseEvent) => {
    if (onClick && event) {
      onClick(event);
      removeModal();
    }
    removeModal();
  };

  return (
    <div className='py-3 px-5 bg-white w-full shadow-[0_-4px_12px_0_rgba(0_,0_,0_,0.04)]'>
      <Button onClick={() => handleClick()} variant='contained'>
        {children}
      </Button>
    </div>
  );
};

Modal.Header = Header;
Modal.Button = ModalButton;
export default Modal;
