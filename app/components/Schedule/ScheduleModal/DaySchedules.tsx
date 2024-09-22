'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import { useSetRecoilState } from 'recoil';

import { scheduleFormState } from '@/recoil/Schedule/atom';
import { useGetSchedules } from '@/hooks/queries/useSchedules';
import {
  Caption,
  SubTitle,
  Title,
} from '@/constants/Typography/TypographyList';
import { padZero } from '@/utils/calculateDay';
import { transformSchedules } from '@/utils/transformSchedule';
import { TransformedScheduleData } from '../type';
import useCalendarContext from '@/hooks/context/useCalendarContext';
import EditScheduleModal from '../EditSchedule';
import ScheduleDetail from './ScheduleDetail';
import scheduleDateFormat, { setTimes } from '@/utils/scheduleDateFormat';
import NoContent from '@/components/common/NoContent';
import { MODAL_TYPE } from '@/components/Modal';
import { useModal } from '@/hooks/view/useModal';
import AddScheduleModal from '../AddSchedule';

const WEEKDAY_SHORTHAND_ENGLISH = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
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
  const swiperRef = useRef<SwiperCore | null>(null);
  const { data, isSuccess, refetch } = useGetSchedules(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
  );
  const setSchedule = useSetRecoilState(scheduleFormState);

  const { addModal } = useModal();

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    if (dateRange.length === 0) {
      return;
    }

    const index = swiper.activeIndex;
    const newCenterDate = dateRange[index];
    setDateIndex(index);
    setDate(newCenterDate);
  };

  const handleItemClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const setDateColorClassName = (
    settingColor: string,
    date: Date,
    index: number,
  ) => {
    const baseColor = date.getDay() === 0 ? 'text-error' : settingColor;
    const distance = Math.abs(index - dateIndex);

    // 불투명도 설정
    let opacityClass = ' opacity-30';
    if (distance === 0 || distance === 1) {
      opacityClass = ' opacity-100';
    } else if (distance === 2) {
      opacityClass = ' opacity-60';
    }

    return baseColor + opacityClass; // 최종 클래스 반환
  };

  const handleEditData = (schedule: TransformedScheduleData) => {
    const start = scheduleDateFormat(schedule.startTime);
    const end = scheduleDateFormat(schedule.endTime);
    setSchedule({ ...schedule, startTime: start, endTime: end });
  };

  const handleAddData = () => {
    const now = new Date();
    const yyyy = date.getFullYear();
    const month = date.getMonth() + 1;
    const dd = date.getDate();
    const hh = now.getHours();
    const mm = now.getMinutes();
    const seletedDate = `${yyyy}-${month}-${dd} ${hh}:${mm}`;

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
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // SwiperCore 인스턴스를 ref에 할당
            }}
          >
            {dateRange.map((date, index) => (
              <SwiperSlide
                key={index}
                className='flex justify-center'
                onClick={() => handleItemClick(index)} // 클릭 시 해당 슬라이드로 이동
              >
                <div
                  className={`flex flex-col items-center w-10 py-3 text-center gap-2 cursor-pointer`}
                >
                  <div
                    className={`${setDateColorClassName('text-gray-600', date, index)} ${Caption.caption2}`}
                  >
                    {WEEKDAY_SHORTHAND_ENGLISH[date.getDay()]}
                  </div>
                  <div
                    className={`${setDateColorClassName('text-black', date, index)} ${SubTitle.subTitle2}`}
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

      <EditScheduleModal refetch={refetch} />
      <AddScheduleModal refetch={refetch} />

      {/* 일일 일정 리스트 */}
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
        transformSchedules(data)?.map((schedule: TransformedScheduleData) => {
          if (
            new Date(date.getFullYear(), date.getMonth(), date.getDate()) <=
              new Date(schedule.startTime) &&
            new Date(schedule.startTime) <
              new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
          )
            return (
              <ScheduleDetail
                key={schedule.id}
                schedule={schedule}
                handleEditData={() => handleEditData(schedule)}
              />
            );
          return;
        })}
    </div>
  );
};

export default DaySchedules;
