/**
 * 입력된 날짜와 현재 날짜를 비교하여, 지난 날짜인 경우 다음 년도의 해당 날짜로 설정하고,
 * 아직 지나지 않은 날짜인 경우 올해의 해당 날짜로 설정합니다.
 * 이후 현재 날짜로부터 설정된 날짜까지 몇일이 남았는지 계산하여 반환합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 'YYYY-MM-DD' 형식의 문자열 날짜
 * @return {string} - 현재 날짜로부터 입력된 날짜까지 남은 일수
 */
export const calculateRemainingDays = (dateStr: string): string => {
  // 현재 날짜의 자정 시간을 나타내는 Date 객체
  const now = new Date(new Date().setHours(0, 0, 0, 0));
  const currentYear = now.getFullYear();

  const [_, month, day] = dateStr.split('-').map((part) => Number(part));
  let targetDate = new Date(currentYear, month - 1, day);

  if (targetDate < now) {
    targetDate = new Date(currentYear + 1, month - 1, day);
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  const remainingDays = Math.ceil(
    (targetDate.getTime() - now.getTime()) / msPerDay,
  );

  return remainingDays.toLocaleString();
};

/**
 * 주어진 날짜와 현재 날짜의 차이를 계산하여, 몇 일이 지났는지 반환합니다.
 * 현재 날짜는 자정 시각을 기준으로 합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 과거의 'YYYY-MM-DD' 형식의 문자열 날짜
 * @return {string} - 주어진 날짜로부터 현재까지 지난 날 수
 */
export const calculateElapsedDays = (dateStr: string): string => {
  const pastDate = new Date(dateStr);
  const now = new Date(new Date().setHours(0, 0, 0, 0));

  const msPerDay = 24 * 60 * 60 * 1000;
  const elapsedDays = Math.floor(
    (now.getTime() - pastDate.getTime()) / msPerDay,
  );

  if (elapsedDays < 0) {
    return '1';
  }

  return elapsedDays.toLocaleString();
};

/**
 * 주어진 날짜와 현재 날짜의 차이를 계산하여, 몇 년이 지났는지 반환합니다.
 * 현재 날짜는 자정 시각을 기준으로 합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 과거의 'YYYY-MM-DD' 형식의 문자열 날짜
 * @return {string} - 주어진 날짜로부터 현재까지 지난 년 수
 */
export const calculateAge = (dateStr: string): string => {
  const birth = new Date(dateStr);
  const now = new Date(new Date());

  const birthYear = birth.getFullYear();
  const birthMonth = birth.getMonth();
  const birthDay = birth.getDate();

  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  const nowDay = now.getDate();

  let age = nowYear - birthYear;

  if (nowMonth < birthMonth || (nowMonth === birthMonth && nowDay < birthDay)) {
    age--;
  }

  return age.toLocaleString();
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

/**
 * 주어진 날짜를 일로 반환합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 'YYYY-MM-DDTHH:MM:SS.000Z' 형식의 UTC 날짜 문자열
 * @return {string} - 일은 1부터 시작하며, 10 미만인 경우 앞에 0을 붙입니다.
 */
export const getDate = (dateStr: any): string => {
  const date = new Date(convertKST(dateStr));

  return padZero(date.getDate());
};

/**
 * 주어진 UTC 날짜 문자열을 기반으로 한국 시간대의 요일을 반환합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 'YYYY-MM-DDTHH:MM:SS.000Z' 형식의 UTC 날짜 문자열
 * @return {string} - ('일', '월', '화', '수', '목', '금', '토')
 */
export const getDay = (dateStr: string): string => {
  const date = new Date(convertKST(dateStr));

  const dayList: { [key: number]: string } = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토',
  };

  return dayList[date.getDay()];
};

/**
 * 주어진 UTC 날짜 문자열을 기반으로 한국 시간대의 시간을 반환합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 'YYYY-MM-DDTHH:MM:SS.000Z' 형식의 UTC 날짜 문자열
 * @return {string} - 'HH:MM' 형식의 문자열
 */
export const getHours = (dateStr: string): string => {
  const date = new Date(convertKST(dateStr));

  return `${padZero(date.getHours())}:${padZero(date.getMinutes())}`;
};

/**
 * 10 미만인 경우 앞에 0을 붙입니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param number - 변환하려는 숫자.
 * @return {string} - 10 미만인 경우 앞에 0을 붙입니다.
 */
const padZero = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
};

/**
 * 주어진 UTC 날짜 문자열을 기반으로 한국 시간대의 날짜 문자열을 반환합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 'YYYY-MM-DDTHH:MM:SS.000Z' 형식의 UTC 날짜 문자열
 * @return {string} - 'YYYY-MM-DDTHH:MM:SS.000Z' 형식의 한국 시간대 날짜 문자열
 */
export const convertKST = (dateStr: string): string => {
  const date = new Date(dateStr);
  const kstOffset = 9 * 60 * 60 * 1000;
  const kstDate = new Date(date.getTime() - kstOffset);

  return kstDate.toString();
};

/**
 * 주어진 UTC 날짜 문자열을 기반으로 한국 시간대의 날짜 문자열을 반환합니다.
 * 주히님 태어나신 날짜: 9월 24일.
 *
 * @param dateStr - 'YYYY-MM-DDTHH:MM:SS.000Z' 형식의 UTC 날짜 문자열
 * @return {string} - 'YYYY-MM-DDTHH:MM:SS.000Z' 형식의 한국 시간대 날짜 문자열
 */
export const reverseKST = (dateStr: string): string => {
  const date = new Date(dateStr);
  const kstOffset = 9 * 60 * 60 * 1000;
  const kstDate = new Date(date.getTime() + kstOffset);

  return kstDate.toString();
};
