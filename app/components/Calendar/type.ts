import React, { Dispatch, SetStateAction } from 'react';

export interface CalendarProps {
  children?: React.ReactNode;
  initDate?: string | Date;
  setUpdateDate?: Dispatch<SetStateAction<Date>>;
  className?: string;
}

export interface CalendarContextProps {
  selectedDate: {
    year: number;
    month: number;
    date: number;
  };
  setSelectedDate: (date: Date) => void;
}

export interface YYYYMMPickerProps {
  type?: 'left' | 'center';
  goToToday?: boolean;
  className?: string;
}

export interface DateContainerProps {
  className?: string;
  handleClickDay?: (value: Date) => void;
  schedule?: any[];
}
