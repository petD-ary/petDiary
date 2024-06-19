'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSetRecoilState } from 'recoil';

import { scheduleFormState } from '@/recoil/Schedule/atom';
import { useGetSchedules } from '@/hooks/queries/useSchedules';
import { Body, Caption, Title } from '@/constants/Typography/TypographyList';
import { convertKST, padZero } from '@/utils/calculateDay';
import { transformSchedules } from '@/utils/transformSchedule';
import { formatDateToYYYYMMDDTHHMMSSZ } from '@/utils/dateFormat';
import { EditScheduleData, TransformedScheduleData } from '../type';
import useCalendarContext from '@/hooks/context/useCalendarContext';
import EditScheduleModal from '../EditScheduleModal';
import ScheduleDetail from './ScheduleDetail';
import scheduleDateFormat from '@/utils/scheduleDateFormat';

const WEEKDAY_SHORTHAND_ENGLISH = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
];
const CENTER_OFFSET = 365;
const createDateRange = (currentDate: Date) => {
  return Array.from({ length: CENTER_OFFSET * 2 + 1 }, (_, index) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + index - CENTER_OFFSET);
    return newDate;
  });
};

const DaySchedules = () => {
  const {
    selectedDate: { year: yyyy, month: mm, date: dd },
  } = useCalendarContext();
  const [date, setDate] = useState(new Date(yyyy, mm - 1, dd));
  const [dateIndex, setDateIndex] = useState(CENTER_OFFSET);
  const [dateRange, _] = useState<Date[]>(createDateRange(date));
  const { data, isSuccess } = useGetSchedules(
    formatDateToYYYYMMDDTHHMMSSZ(
      new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
    ),
    formatDateToYYYYMMDDTHHMMSSZ(
      new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2),
    ),
  );

  const [modify, setModify] = useState<EditScheduleData | null>(null);
  const setSchedule = useSetRecoilState(scheduleFormState);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    if (dateRange.length === 0) {
      return;
    }

    const index = swiper.activeIndex;
    const newCenterDate = dateRange[index];
    setDateIndex(index);
    setDate(newCenterDate);
  };

  const setDateColorClassName = (date: Date, index: number) => {
    let colorClassName = '';

    if (
      index === dateIndex ||
      index === dateIndex - 1 ||
      index === dateIndex + 1
    ) {
      colorClassName = 'text-black';
    } else if (index === dateIndex - 2 || index === dateIndex + 2) {
      colorClassName = 'text-gray-600';
    } else {
      colorClassName = 'text-gray-400';
    }

    return date.getDay() === 0 ? 'text-error' : colorClassName;
  };

  const handleEditData = (schedule: TransformedScheduleData) => {
    const start = scheduleDateFormat(convertKST(schedule.startTime));
    const end = scheduleDateFormat(convertKST(schedule.endTime));
    setModify(schedule);
    delete schedule.id;
    delete schedule.repeatIndex;
    delete schedule.scheduleId;
    delete schedule.userId;
    delete schedule.isAllDay;
    delete schedule.isEndDay;
    delete schedule.isFirst;
    delete schedule.isStartDay;
    setSchedule({ ...schedule, startTime: start, endTime: end });
  };

  return (
    <div className='bg-extra-device-bg h-[calc(100dvh-105px)] overflow-y-scroll scrollbar-none'>
      {/* 날짜 설정 슬라이더 */}
      <div className='flex flex-col items-center pt-6 pb-2 bg-white mb-1'>
        <div
          className={`${Title.title3}`}
        >{`${date.getFullYear()}.${padZero(date.getMonth() + 1)}`}</div>
        <div className='flex w-[328px] relative mt-4'>
          <Swiper
            onSlideChange={handleSlideChange}
            slidesPerView={7}
            centeredSlides={true}
            initialSlide={365}
            loop={false}
            spaceBetween={8}
          >
            {dateRange.map((date, index) => (
              <SwiperSlide key={index} className='flex justify-center'>
                <div
                  className={`flex flex-col items-center w-10 py-3 text-center`}
                >
                  <div
                    className={`${Caption.caption2} ${setDateColorClassName(date, index)}`}
                  >
                    {WEEKDAY_SHORTHAND_ENGLISH[date.getDay()]}
                  </div>
                  <div
                    className={`${Body.body2} ${setDateColorClassName(date, index)}`}
                  >
                    {padZero(date.getDate())}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-10 border rounded-full border-blue-400'></div>
        </div>
      </div>

      <EditScheduleModal data={modify} />

      {/* 일일 일정 리스트 */}
      {isSuccess &&
        transformSchedules(data)?.map((schedule: TransformedScheduleData) => {
          return (
            <ScheduleDetail
              key={schedule.id}
              schedule={schedule}
              handleEditData={() => handleEditData(schedule)}
            />
          );
        })}
    </div>
  );
};

export default DaySchedules;
