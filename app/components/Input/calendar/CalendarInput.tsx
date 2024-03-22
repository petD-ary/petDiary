import React from 'react';
import Input, { InputClass } from '..';
import IconDate from '@/assets/images/icon-date.svg';

interface SelectedDateState {
  selectedYear: number;
  selectedMonth: number;
  selectedDay: number;
}

interface CalendarInputProps {
  label: string;
  onClick?: () => void;
  selectedDate?: SelectedDateState;
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
        <div>
          {selectedDate
            ? `${selectedDate.selectedYear}-${String(selectedDate.selectedMonth).padStart(2, '0')}-${String(selectedDate.selectedDay).padStart(2, '0')}`
            : 'YYYY-MM-DD'}
        </div>
        <IconDate />
      </div>
    </div>
  );
};
