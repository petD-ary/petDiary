import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker as AntDatePicker, Space } from 'antd';

const DatePicker = () => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Space direction='vertical'>
      <div className='relative'>
        <AntDatePicker
          onChange={onChange}
          placeholder='연도 - 월 - 일'
          className='custom-datepicker p-4 w-full rounded-lg '
          dropdownClassName='custom-datepicker-dropdown'
        />
      </div>
    </Space>
  );
};

export default DatePicker;
