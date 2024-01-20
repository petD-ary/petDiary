'use client';

import { DatePicker as AntDatePicker, Space } from 'antd';
import moment from 'moment';
import 'moment/locale/ko'; // 한국어 locale
import locale from 'antd/es/date-picker/locale/ko_KR'; // antd 한국어 locale 설정

const DatePicker = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  useEffect(() => {
    moment.locale('ko'); // moment의 locale을 한국어로 설정
  }, []);

  return (
    <Space direction='vertical'>
      <div className='relative'>
        <AntDatePicker
          onChange={onChange}
          placeholder='연도 - 월 - 일'
          locale={locale} // Ant DatePicker에 한국어 locale 적용
          className='custom-datepicker p-4 w-full rounded-lg '
        />
      </div>
    </Space>
  );
};

export default DatePicker;
