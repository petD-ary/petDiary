import React, { useEffect } from 'react';
import Input, { InputClass } from '..';
import IconDate from '@/assets/images/icon-date.svg';

interface CalendarInputProps {
  label: string;
  onClick?: () => void;
  selectedDate?: string;
  disabled?: boolean;
}

export const CalendarInput: React.FC<CalendarInputProps> = ({
  label,
  onClick,
  selectedDate,
  disabled,
}) => {
  const disabledClass = disabled
    ? 'opacity-50 text-text-disable cursor-not-allowed'
    : '';

  return (
    <div>
      <Input.Label>{label}</Input.Label>
      <div
        className={`cursor-pointer flex justify-between
    border border-text-dividers focus:border-text-border transition-colors ${InputClass} ${disabledClass}`}
        onClick={disabled ? undefined : onClick}
      >
        <div>{selectedDate || 'YYYY-MM-DD'}</div>
        <IconDate />
      </div>
    </div>
  );
};
