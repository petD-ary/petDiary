import React, { useState } from 'react';
import { ConfigProvider, DatePicker, DatePickerProps } from 'antd';

import koKR from 'antd/lib/locale/ko_KR';
import moment from 'moment';

export const DatePickerBox = () => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className='locale-components'>
      <div className='example'>
        <DatePicker
          onChange={onChange}
          placeholder='연도 - 월 - 일'
          className='custom-datepicker p-4 w-full rounded-lg '
          popupClassName='custom-datepicker-dropdown'
        />
      </div>
    </div>
  );
};
const DatePickerForm = () => {
  const [locale, setLocale] = useState(koKR);

  return (
    <div>
      <div className='change-locale'>{/* Radio.Group에 value와 onChange 이벤트 핸들러 연결 */}</div>
      <ConfigProvider locale={locale}>
        <DatePickerBox key={locale ? locale.locale : 'ko'} />
      </ConfigProvider>
    </div>
  );
};

export default DatePickerForm;
