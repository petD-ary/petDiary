/**
 * 입력된 날짜와 현재 날짜를 비교하여, 지난 날짜인 경우 다음 년도의 해당 날짜로 설정하고,
 * 아직 지나지 않은 날짜인 경우 올해의 해당 날짜로 설정합니다.
 * 이후 현재 날짜로부터 설정된 날짜까지 몇일이 남았는지 계산하여 반환합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 'YYYY-MM-DD' 형식의 문자열 날짜
 * @return {number} - 현재 날짜로부터 입력된 날짜까지 남은 일수
 */
export const calculateRemainingDays = (dateStr: string): number => {
  // 현재 날짜의 자정 시간을 나타내는 Date 객체
  const now = new Date(new Date().setHours(0, 0, 0, 0));
  const currentYear = now.getFullYear();

  const [_, month, day] = dateStr.split('-').map((part) => Number(part));
  let targetDate = new Date(currentYear, month - 1, day);

  if (targetDate < now) {
    targetDate = new Date(currentYear + 1, month - 1, day);
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  const remainingDays = Math.ceil((targetDate.getTime() - now.getTime()) / msPerDay);

  return remainingDays;
};

/**
 * 주어진 날짜와 현재 날짜의 차이를 계산하여, 몇 일이 지났는지 반환합니다.
 * 현재 날짜는 자정 시각을 기준으로 합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 과거의 'YYYY-MM-DD' 형식의 문자열 날짜
 * @return {number} - 주어진 날짜로부터 현재까지 지난 날 수
 */
export const calculateElapsedDays = (dateStr: string): number => {
  const pastDate = new Date(dateStr);
  const now = new Date(new Date().setHours(0, 0, 0, 0));

  const msPerDay = 24 * 60 * 60 * 1000;
  const elapsedDays = Math.floor((now.getTime() - pastDate.getTime()) / msPerDay);

  return elapsedDays;
};

/**
 * 주어진 날짜를 한국식 날짜 형식으로 변환합니다.
 * 연도는 마지막 두 자리만 표시하고, 월과 일은 1부터 시작하는 값을 그대로 사용합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 'YYYY-MM-DD' 형식의 문자열 날짜
 * @return {string} - 'YY년 M월 D일' 형식의 문자열. 월과 일은 1부터 시작하며, 10 미만인 경우 앞에 0을 붙이지 않습니다.
 */
export const convertKoreanDateFormat = (dateStr: string): string => {
  const date = new Date(dateStr);

  const year = date.getFullYear().toString().substring(2);
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();

  return `${year}년 ${month}월 ${day}일`;
};