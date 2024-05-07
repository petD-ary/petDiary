interface SetDateObjProps {
  date: string;
  time: { hh: string; mm: string };
}

/**
 * selectedDate를 Date 객체로 변환하는 함수
 * @param day selectedDate 객체
 * @return {Date} Date 객체로 변환 후 반환
 */
const setDateObj = (day: SetDateObjProps) => {
  const {
    date,
    time: { hh, mm },
  } = day;

  const dateStr = `${date} ${hh}:${mm}`;
  return new Date(dateStr);
};

export default setDateObj;
