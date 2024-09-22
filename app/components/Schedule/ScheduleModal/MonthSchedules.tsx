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
import scheduleDateFormat, { setTimes } from '@/utils/scheduleDateFormat';
import NoContent from '@/components/common/NoContent';
import AddScheduleModal from '../AddSchedule';
import { useModal } from '@/hooks/view/useModal';
import { MODAL_TYPE } from '@/components/Modal';

const MonthSchedules = () => {
  const {
    selectedDate: { year: yyyy, month: mm },
  } = useCalendarContext();
  const { data, isSuccess, refetch } = useGetSchedules(
    new Date(yyyy, mm - 1, 1),
    new Date(yyyy, mm, 0),
  );
  const setSchedule = useSetRecoilState(scheduleFormState);
  const { addModal } = useModal();

  const handleEditData = (schedule: ScheduleData) => {
    const start = scheduleDateFormat(schedule.startTime);
    const end = scheduleDateFormat(schedule.endTime);
    setSchedule({ ...schedule, startTime: start, endTime: end });
  };

  const handleAddData = () => {
    const now = new Date();
    const dd = now.getDate();
    const hh = now.getHours();
    const minutes = now.getMinutes();
    const seletedDate = `${yyyy}-${mm}-${dd} ${hh}:${minutes}`;

    const setTime = setTimes(seletedDate);

    setSchedule((prev) => ({
      ...prev,
      startTime: setTime.startTime,
      endTime: setTime.endTime,
    }));

    addModal(MODAL_TYPE.SCHEDULE_ADD);
  };

  return (
    <div className='bg-extra-device-bg h-[calc(100dvh-105px)] overflow-y-scroll scrollbar-none'>
      <Calendar.YYYYMMPicker className='!bg-extra-device-bg !mb-0' />

      <EditScheduleModal refetch={refetch} />
      <AddScheduleModal refetch={refetch} />
      {isSuccess && data.length === 0 && (
        <NoContent className='h-[218px] px-5 py-[30px]'>
          <NoContent.Desc>일일 일정이 없어요</NoContent.Desc>
          <NoContent.Button onClick={handleAddData}>
            일정 추가하기
          </NoContent.Button>
        </NoContent>
      )}

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
