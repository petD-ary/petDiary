'use client';

import { Caption, Title } from '@/constants/Typography/TypographyList';
import { useGetSchedules } from '@/hooks/queries/useSchedules';
import { scheduleDataState } from '@/recoil/Schedule/atom';

import { getDate, getDay, getHours } from '@/utils/calculateDay';
import { transformSchedules } from '@/utils/transformSchedule';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const ScheduleList = () => {
  const scheduleData = useRecoilValue(scheduleDataState);
  useEffect(() => {
    console.log(
      scheduleData,
      'scheduleDatascheduleDatascheduleDatascheduleData',
    );
  });
  if (scheduleData.isSuccess)
    return (
      <div>
        {transformSchedules(scheduleData.data)?.map(
          (schedule: {
            isFirst: boolean;
            isAllDay: boolean;
            isStartDay: boolean;
            isEndDay: boolean;
            startTime: string;
            title: string;
            address: string;
            endTime: string;
          }) => {
            return (
              <div className='flex mb-1'>
                <div className='w-24 px-6 py-3 flex flex-col justify-center items-center'>
                  {schedule.isFirst ? (
                    <>
                      <div className={`${Title.title3}`}>
                        {getDate(schedule.startTime)}
                      </div>
                      <div className={`${Caption.caption2}`}>
                        {getDay(schedule.startTime)}요일
                      </div>
                    </>
                  ) : null}
                </div>
                <div className='border-l px-3 py-3 w-full'>
                  <div>{schedule.title}</div>
                  <div className={`${Caption.caption3} flex justify-between`}>
                    <div className='text-text-secondary'>
                      {schedule.address}
                    </div>

                    <div>
                      {schedule.isAllDay
                        ? '하루 종일'
                        : `${schedule.isStartDay ? getHours(schedule.startTime) : ''} ~ ${schedule.isEndDay ? getHours(schedule.endTime) : ''}`}
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>
    );
};

export default ScheduleList;
