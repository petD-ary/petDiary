'use client';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Body, Caption } from '@/constants/Typography/TypographyList';
import { scheduleDataState } from '@/recoil/Schedule/atom';
import { selectedDateState } from '@/recoil/calendar/atoms';
import { getDate, getHours } from '@/utils/calculateDay';
import { transformSchedules } from '@/utils/transformSchedule';
import Button from '@/components/Button';
import { TransformedScheduleData } from '../Schedule/type';
import { alarmList, repeatList } from '../Schedule/constants';

const ScheduleDetail = () => {
  const scheduleData = useRecoilValue(scheduleDataState);
  const [selectedDate] = useRecoilState(selectedDateState);

  if (scheduleData.isSuccess)
    return (
      <div className='bg-extra-device-bg h-[calc(100dvh-105px)] overflow-y-scroll scrollbar-none'>
        {transformSchedules(scheduleData.data)
          ?.filter(
            (schedule) =>
              Number(getDate(schedule.startTime)) === selectedDate.selectedDay,
          )
          .map((schedule: TransformedScheduleData) => {
            console.log(schedule);
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

export default ScheduleDetail;
