'use client';
import { useRecoilValue } from 'recoil';

import { Caption, Title } from '@/constants/Typography/TypographyList';
import { scheduleDataState } from '@/recoil/Schedule/atom';
import { useModal } from '@/hooks/view/useModal';
import useCalendarContext from '@/hooks/context/useCalendarContext';
import { getDate, getDay, getHours } from '@/utils/calculateDay';
import { transformSchedules } from '@/utils/transformSchedule';
import { MODAL_TYPE } from '@/components/Modal';
import ScheduleModal from '@/components/Schedule/ScheduleModal';
import { TransformedScheduleData } from '../type';

const ScheduleList = () => {
  const { data, isSuccess } = useRecoilValue(scheduleDataState);
  const { addModal } = useModal();
  const {
    selectedDate: { year, month, date },
  } = useCalendarContext();

  return (
    <div className='border-b border-extra-deviders'>
      <ScheduleModal />

      {isSuccess &&
        transformSchedules(data)
          ?.filter(
            (schedule) =>
              Number(getDate(schedule.startTime)) ===
              new Date(year, month, date).getDate(),
          )
          .map((schedule: TransformedScheduleData, index: number) => {
            return (
              <div
                className='flex mb-1 cursor-pointer'
                key={index}
                onClick={() => addModal(MODAL_TYPE.SCHEDULE_DETAIL)}
              >
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
                    <div className='text-text-secondary'>{schedule.place}</div>

                    <div>
                      {schedule.isAllDay
                        ? '하루 종일'
                        : `${schedule.isStartDay ? getHours(schedule.startTime) : ''} ~ ${schedule.isEndDay ? getHours(schedule.endTime) : ''}`}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default ScheduleList;
