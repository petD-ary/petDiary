import { ConvertObjToDateProps } from '@/components/Schedule/AddSchedule/convertObjToDate';

/**
 * 주어진 날짜 문자열 또는 Date 객체를 ConvertObjToDateProps 형식으로 포맷팅하는 함수입니다.
 *
 * 날짜는 `YYYY-MM-DD` 형식으로 반환되며, 시간은 시간(`hh`)과 분(`mm`)으로 반환됩니다.
 * 분은 30분 단위로 반올림되어 '00' 또는 '30'으로 설정됩니다.
 *
 * @param date - 날짜 문자열 또는 Date 객체
 * @returns { date: 'YYYY-MM-DD', time: { hh: 'HH', mm: 'MM' } }
 *
 * @example
 * - 입력: '2024-09-22T14:45:00Z'
 * - 출력: { date: '2024-09-22', time: { hh: '14', mm: '30' } }
 *
 */
const scheduleDateFormat = (date: string | Date): ConvertObjToDateProps => {
  const resultDate = new Date(date);

  const year = resultDate.getFullYear();
  const month = (resultDate.getMonth() + 1).toString().padStart(2, '0');
  const day = resultDate.getDate().toString().padStart(2, '0');
  const hour = resultDate.getHours().toString().padStart(2, '0');
  const minutes = resultDate.getMinutes() < 30 ? '00' : '30';

  return { date: `${year}-${month}-${day}`, time: { hh: hour, mm: minutes } };
};

/**
 * 주어진 날짜를 기준으로 시작 시간과 종료 시간을 설정하는 함수
 *
 * 시작 시간은 주어진 날짜를 기준으로 하며, 종료 시간은 시작 시간으로부터 30분 후로 설정됩니다.
 * 두 시간 모두 `scheduleDateFormat` 함수를 사용하여 포맷됩니다.
 *
 * @param date - 날짜 문자열 또는 Date 객체
 * @returns { startTime: { date: 'YYYY-MM-DD', time: { hh: 'HH', mm: 'MM' } },
 *            endTime: { date: 'YYYY-MM-DD', time: { hh: 'HH', mm: 'MM' } } }
 *
 *  @example
 * - 입력: '2024-09-22T14:00:00Z'
 * - 출력: {
 *     startTime: { date: '2024-09-22', time: { hh: '14', mm: '00' } },
 *     endTime: { date: '2024-09-22', time: { hh: '14', mm: '30' } }
 *   }
 *
 */
export const setTimes = (
  date: Date | string,
): { startTime: ConvertObjToDateProps; endTime: ConvertObjToDateProps } => {
  date = new Date(date);
  const setStartTime = scheduleDateFormat(date);
  const endTime = new Date(date).setMinutes(date.getMinutes() + 30);
  const setEndTime = scheduleDateFormat(new Date(endTime));

  return { startTime: setStartTime, endTime: setEndTime };
};

export default scheduleDateFormat;
