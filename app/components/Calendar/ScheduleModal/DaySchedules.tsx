'use client';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Body, Caption, Title } from '@/constants/Typography/TypographyList';
import { scheduleDataState } from '@/recoil/Schedule/atom';
import { selectedDateState } from '@/recoil/calendar/atoms';
import { getDate, getHours, padZero } from '@/utils/calculateDay';
import { transformSchedules } from '@/utils/transformSchedule';
import Button from '@/components/Button';
import { TransformedScheduleData } from '../Schedule/type';
import { repeatList } from '../Schedule/constants';

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
  const scheduleData = useRecoilValue(scheduleDataState);
  const { selectedYear, selectedMonth, selectedDay } =
    useRecoilValue(selectedDateState);
  const [date, setDate] = useState(
    new Date(selectedYear, selectedMonth - 1, selectedDay),
  );
  const [dateIndex, setDateIndex] = useState(CENTER_OFFSET);
  const [dateRange, _] = useState<Date[]>(createDateRange(date));

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    if (dateRange.length === 0) {
      return;
    }

    const index = swiper.activeIndex;
    const newCenterDate = dateRange[index];
    setDateIndex(index);
    setDate(newCenterDate);
  };

  const setDateColorClass = (date: Date, index: number) => {
    let colorClass = '';

    if (
      index === dateIndex ||
      index === dateIndex - 1 ||
      index === dateIndex + 1
    ) {
      colorClass = 'text-black';
    } else if (index === dateIndex - 2 || index === dateIndex + 2) {
      colorClass = 'text-gray-600';
    } else {
      colorClass = 'text-gray-400';
    }

    return date.getDay() === 0 ? 'text-error' : colorClass;
  };

  if (scheduleData.isSuccess)
    return (
      <div className='bg-extra-device-bg h-[calc(100dvh-105px)] overflow-y-scroll scrollbar-none'>
        <div className='flex flex-col items-center pt-6 pb-2 bg-white mb-1'>
          <div
            className={`${Title.title3}`}
          >{`${date.getFullYear()}.${padZero(date.getMonth() + 1)}`}</div>
          <div className='flex w-[356px]'>
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
                  <div className='flex flex-col items-center w-11 py-3'>
                    <div
                      className={`${Caption.caption2} ${setDateColorClass(date, index)}`}
                    >
                      {WEEKDAY_SHORTHAND_ENGLISH[date.getDay()]}
                    </div>
                    <div
                      className={`${Body.body2} ${setDateColorClass(date, index)}`}
                    >
                      {padZero(date.getDate())}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {transformSchedules(scheduleData.data)
          ?.filter(
            (schedule) =>
              Number(getDate(schedule.startTime)) === date.getDate(),
          )
          .map((schedule: TransformedScheduleData) => {
            return (
              <div className='flex mb-1 bg-white' key={schedule.id}>
                <div className='px-5 py-6 w-full'>
                  <div className={`mb-4 flex`}>
                    <div className='w-full'>
                      <div className={`${Body.body2} mb-3`}>
                        <span className='w-[18px] inline-block text-center'>
                          •
                        </span>
                        <span>{schedule.title}</span>
                      </div>
                      <div className={`${Caption.caption2} ms-[18px] mb-3`}>
                        {schedule.address}
                      </div>
                      <div className={`${Body.body4} ms-[18px]`}>
                        {schedule.memo}
                      </div>
                    </div>
                    <div>
                      <Button
                        className={`${Caption.caption1} py-[6px] px-3 rounded-full text-nowrap`}
                        children={'수정'}
                        variant={'blueContained'}
                      />
                    </div>
                  </div>

                  <div>
                    <span
                      className={`${Caption.caption1} py-[6px] px-3 me-3 ms-[18px] bg-primary-50 text-primary-800 rounded text-nowrap`}
                    >
                      {schedule.isAllDay
                        ? '하루 종일'
                        : `${schedule.isStartDay ? getHours(schedule.startTime) : ''} ~ ${schedule.isEndDay ? getHours(schedule.endTime) : ''}`}
                    </span>
                    <span
                      className={`${Caption.caption1} py-[6px] px-3 bg-blue-50 text-blue-800 rounded text-nowrap`}
                    >
                      {repeatList.find((item) => item.key === schedule.repeat)
                        ?.content || '반복 안함'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
};

export default DaySchedules;
