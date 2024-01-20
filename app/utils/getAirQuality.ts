export const getAirQuality = (pm10: number, pm25: number) => {
  let pm10Quality = '';
  let pm25Quality = '';

  // 미세먼지 수치에 따른 상태 평가
  if (pm10 <= 30) {
    pm10Quality = '좋음';
  } else if (pm10 <= 80) {
    pm10Quality = '보통';
  } else if (pm10 <= 150) {
    pm10Quality = '나쁨';
  } else {
    pm10Quality = '매우 나쁨';
  }

  // 초미세먼지 수치에 따른 상태 평가
  if (pm25 <= 15) {
    pm25Quality = '좋음';
  } else if (pm25 <= 35) {
    pm25Quality = '보통';
  } else if (pm25 <= 75) {
    pm25Quality = '나쁨';
  } else {
    pm25Quality = '매우 나쁨';
  }

  // 둘 중 더 나쁜 상태를 반환
  const qualityLevels = ['좋음', '보통', '나쁨', '매우 나쁨'];
  const worseIndex = Math.max(qualityLevels.indexOf(pm10Quality), qualityLevels.indexOf(pm25Quality));
  return qualityLevels[worseIndex];
};
