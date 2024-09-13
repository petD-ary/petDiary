'use client';
import { useSetRecoilState } from 'recoil';

import { useGetSchedules } from '@/hooks/queries/useSchedules';
import { getDate, getDay } from '@/utils/calculateDay';
import { transformSchedules } from '@/utils/transformSchedule';
import Calendar from '@/components/Calendar';
import { Caption, Title } from '@/constants/Typography/TypographyList';
import { ScheduleData, TransformedScheduleData } from '../type';
import useCalendarContext from '@/hooks/context/useCalendarContext';
import ScheduleDetail from './ScheduleDetail';
import EditScheduleModal from '../EditSchedule';
import { scheduleFormState } from '@/recoil/Schedule/atom';
import scheduleDateFormat from '@/utils/scheduleDateFormat';

const MonthSchedules = () => {
  const {
    selectedDate: { year: yyyy, month: mm },
  } = useCalendarContext();
  const { data, isSuccess, refetch } = useGetSchedules(
    new Date(yyyy, mm - 1, 1),
    new Date(yyyy, mm, 0),
  );
  const setSchedule = useSetRecoilState(scheduleFormState);

  const handleEditData = (schedule: ScheduleData) => {
    const start = scheduleDateFormat(schedule.startTime);
    const end = scheduleDateFormat(schedule.endTime);
    setSchedule({ ...schedule, startTime: start, endTime: end });
  };

  return (
    <div className='bg-extra-device-bg h-[calc(100dvh-105px)] overflow-y-scroll scrollbar-none'>
      <Calendar.YYYYMMPicker className='!bg-extra-device-bg !mb-0' />

      <EditScheduleModal refetch={refetch} />
      {isSuccess && data.length === 0 && <div></div>}

      {isSuccess &&
        data.length > 0 &&
        transformSchedules(data).map(
          (schedule: TransformedScheduleData, index: number) => {
            return (
              <div key={index}>
                {schedule.isFirst ? (
                  <div className='flex gap-2 items-center px-5 py-3'>
                    <div className={`${Title.title3}`}>
                      {getDate(schedule.startTime)}
                    </div>
                    <div className={`${Caption.caption2}`}>
                      {getDay(schedule.startTime)}요일
                    </div>
                  </div>
                ) : null}
                <ScheduleDetail
                  schedule={schedule}
                  handleEditData={() => handleEditData(schedule)}
                />
              </div>
            );
          },
        )}
    </div>
  );
};

export default MonthSchedules;
