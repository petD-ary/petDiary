import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title } from '@/constants/Typography/TypographyList';
import { useRecoilState } from 'recoil';
import { selectedDateState } from '@/recoil/calendar/atoms';

interface DateScrollPickerProps {
  setTemporarySelectedDate: Dispatch<
    SetStateAction<{
      selectedYear: number;
      selectedMonth: number;
      selectedDay: number;
    }>
  >;
}

const DateScrollPicker: React.FC<DateScrollPickerProps> = ({
  setTemporarySelectedDate,
}) => {
  // 현재 냔도에서 일단 70년까지
  const years = Array.from(
    { length: 70 },
    (_, i) => new Date().getFullYear() - i,
  );
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  // 선택된 년도와 월에 대한 초기값 설정 : 선택했떤거 표시
  const initialYearIndex = years.findIndex(
    (year) => year === selectedDate.selectedYear,
  );
  const initialMonthIndex = selectedDate.selectedMonth - 1;
  // 드래그 할 때 가운데랄 표시하기 위함 : 활성화됨(검은 글씨로)
  const [activeYearIndex, setActiveYearIndex] = useState(
    initialYearIndex >= 0 ? initialYearIndex : 0,
  );
  const [activeMonthIndex, setActiveMonthIndex] = useState(
    initialMonthIndex >= 0 ? initialMonthIndex : 0,
  );

  // 선택된 년도랑 월을 업데이트
  const handleYearChange = (year: any) => {
    setTemporarySelectedDate((prev) => ({ ...prev, selectedYear: year }));
  };

  const handleMonthChange = (month: any) => {
    setTemporarySelectedDate((prev) => ({ ...prev, selectedMonth: month }));
  };
  // 슬라이드 했을 때도 년도 변경 : 가운데로 오면 변경됨
  const handleYearSlideChange = (swiper: any) => {
    const activeIndex = swiper.activeIndex;
    setActiveYearIndex(activeIndex);
    const selectedYear = years[activeIndex];
    handleYearChange(selectedYear);
  };

  const handleMonthSlideChange = (swiper: any) => {
    const activeIndex = swiper.activeIndex;
    setActiveMonthIndex(activeIndex);
    const selectedMonth = months[activeIndex];
    handleMonthChange(selectedMonth);
  };

  // Swiper 인스턴스에 대한 참조
  const swiperRefYear = useRef<any>(null);
  const swiperRefMonth = useRef<any>(null);

  // Swiper 인스턴스에 대한 참조를 설정하는 함수 :클릭했을 때 그 날짜로 이동 시킴
  const handleSwiperYear = (swiper: null) => {
    swiperRefYear.current = swiper;
  };

  const handleSwiperMonth = (swiper: null) => {
    swiperRefMonth.current = swiper;
  };

  // 년도 월 클릭했을 때도 데이터 저장 가능
  const handleYearClick = (
    year: number,
    index: React.SetStateAction<number>,
  ) => {
    setActiveYearIndex(index);
    swiperRefYear.current.slideTo(index, 300, false);
    handleYearChange(year);
  };

  const handleMonthClick = (
    month: number,
    index: React.SetStateAction<number>,
  ) => {
    setActiveMonthIndex(index);
    swiperRefMonth.current.slideTo(index, 300, false);
    handleMonthChange(month);
  };

  // Swiper 인스턴스가 변경될 때마다 활성화된 인덱스를 업데이트
  useEffect(() => {
    if (swiperRefYear.current) {
      swiperRefYear.current.slideTo(activeYearIndex);
    }
  }, [activeYearIndex]);

  useEffect(() => {
    if (swiperRefMonth.current) {
      swiperRefMonth.current.slideTo(activeMonthIndex);
    }
  }, [activeMonthIndex]);

  return (
    <div className='flex mb-7'>
      <div className='px-4 h-[150px] overflow-hidden '>
        <Swiper
          ref={(ref: null) => (swiperRefYear.current = ref)}
          direction='vertical'
          slidesPerView={3}
          spaceBetween={20}
          height={150}
          centeredSlides
          onSlideChange={(swiper: any) => handleYearSlideChange(swiper)}
          onSwiper={(swiper: any) => handleSwiperYear(swiper)}
        >
          {years.map((year, index) => (
            <SwiperSlide key={year}>
              <div
                className={`flex items-center justify-between ${Title.title1} ${
                  index === activeYearIndex ? 'text-black' : 'text-text-disable'
                } border-r-2 border-extra-dividers pr-7`}
                onClick={() => handleYearClick(year, index)}
              >
                {year}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Month Swiper */}
      <div className='px-4 h-[150px] overflow-hidden'>
        <Swiper
          ref={(ref: null) => (swiperRefMonth.current = ref)}
          direction='vertical'
          slidesPerView={3}
          spaceBetween={20}
          height={150}
          centeredSlides
          onSlideChange={(swiper: any) => handleMonthSlideChange(swiper)}
          onSwiper={(swiper: any) => handleSwiperMonth(swiper)}
        >
          {months.map((month, index) => (
            <SwiperSlide key={month}>
              <div
                className={`flex items-center justify-between ${Title.title1} ${
                  index === activeMonthIndex
                    ? 'text-black'
                    : 'text-text-disable'
                }`}
                onClick={() => handleMonthClick(month, index)}
              >
                {month}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DateScrollPicker;
