'use client';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Caption, Title } from '@/constants/Typography/TypographyList';
import { scheduleDataState } from '@/recoil/Schedule/atom';
import { selectedDateState } from '@/recoil/calendar/atoms';
import { getDate, getDay, getHours } from '@/utils/calculateDay';
import { transformSchedules } from '@/utils/transformSchedule';

const ScheduleList = () => {
  const scheduleData = useRecoilValue(scheduleDataState);
  const [selectedDate] = useRecoilState(selectedDateState);

  if (scheduleData.isSuccess)
    return (
      <div className='border-b border-extra-deviders'>
        {transformSchedules(scheduleData.data)
          ?.filter(
            (schedule) =>
              Number(getDate(schedule.startTime)) === selectedDate.selectedDay,
          )
          .map(
            (schedule: {
              isFirst: boolean;
              isAllDay: boolean;
              isStartDay: boolean;
              isEndDay: boolean;
              startTime: string;
              title: string;
              address: string;
              endTime: string;
              id: number;
            }) => {
              return (
                <div className='flex mb-1' key={schedule.id}>
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
