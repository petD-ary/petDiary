'use client';
import { useState } from 'react';

import { useGetSchedules } from '@/hooks/queries/useSchedules';
import { formatDateToYYYYMMDDTHHMMSSZ } from '@/utils/dateFormat';
import { convertKST, getDate, getDay, getHours } from '@/utils/calculateDay';
import { transformSchedules } from '@/utils/transformSchedule';
import Button from '@/components/Button';
import Calendar from '@/components/Calendar/CalendarPicker';
import { Body, Caption, Title } from '@/constants/Typography/TypographyList';
import { EditScheduleData, TransformedScheduleData } from '../type';
import { repeatList } from '../constants';
import useCalendarContext from '@/hooks/context/useCalendarContext';
import ScheduleDetail from './ScheduleDetail';
import EditScheduleModal from '../EditSchedule';
import { useSetRecoilState } from 'recoil';
import { scheduleFormState } from '@/recoil/Schedule/atom';
import scheduleDateFormat from '@/utils/scheduleDateFormat';

const MonthSchedules = () => {
  const {
    selectedDate: { year: yyyy, month: mm },
  } = useCalendarContext();
  const { data, isSuccess } = useGetSchedules(
    formatDateToYYYYMMDDTHHMMSSZ(new Date(yyyy, mm - 1, 1)),
    formatDateToYYYYMMDDTHHMMSSZ(new Date(yyyy, mm, 0)),
  );
  const [modify, setModify] = useState<EditScheduleData | null>(null);
  const setSchedule = useSetRecoilState(scheduleFormState);

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
      <Calendar.YYYYMMPicker className='!bg-extra-device-bg !mb-0' />

      <EditScheduleModal data={modify} />

      {isSuccess &&
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
