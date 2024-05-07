import React from 'react';

export interface CalendarProps {
  children?: React.ReactNode;
  initDate?: string | Date;
  setUpdateDate?: (date: Date | string) => void;
  className?: string;
  viewSchedule?: boolean;
}

export interface CalendarContextProps {
  viewSchedule?: boolean;
  selectedDate: {
    year: number;
    month: number;
    date: number;
  };
  setSelectedDate: (date: Date) => void;
}

export interface YYYYMMPickerProps {
  type?: 'left' | 'center';
  className?: string;
}

export interface DateContainerProps {
  className?: string;
  handleClickDay?: (value: Date) => void;
}
