'use client';

import React from 'react';

import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';

moment.locale('ko');

const DatePickerForm = () => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Space direction='vertical'>
      <div className='relative'>
        <DatePicker
          onChange={onChange}
          placeholder='연도 - 월 - 일'
          className='custom-datepicker p-4 w-full rounded-lg '
          popupClassName='custom-datepicker-dropdown'
          locale={locale}
        />
      </div>
    </Space>
  );
};

export default DatePickerForm;
