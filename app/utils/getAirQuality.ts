export const getAirQuality = (pm10: number, pm25: number) => {
  let pm10Quality = '';
  let pm25Quality = '';

  // 미세먼지 수치에 따른 상태 평가
  if (pm10 <= 30) {
    pm10Quality = '좋음';
  } else if (pm10 <= 50) {
    pm10Quality = '보통';
  } else if (pm10 <= 100) {
    pm10Quality = '나쁨';
  } else {
    pm10Quality = '매우 나쁨';
  }

  // 초미세먼지 수치에 따른 상태 평가
  if (pm25 <= 15) {
    pm25Quality = '좋음';
  } else if (pm25 <= 25) {
    pm25Quality = '보통';
  } else if (pm25 <= 50) {
    pm25Quality = '나쁨';
  } else {
    pm25Quality = '매우 나쁨';
  }

  // 둘 중 더 나쁜 상태를 반환
  const qualityLevels = ['좋음', '보통', '나쁨', '매우 나쁨'];
  const worseIndex = Math.max(qualityLevels.indexOf(pm10Quality), qualityLevels.indexOf(pm25Quality));
  return qualityLevels[worseIndex];
};

export const getAirQualityImage = (status: string) => {
  let airQuality = 'normal.png';
  // 미세먼지 수치에 따른 상태 평가
  if (status === '좋음' || status === '보통') {
    airQuality = 'normal.png';
  } else if (status === '나쁨') {
    airQuality = 'bad.png';
  } else {
    airQuality = 'veryBad.png';
  }

  return airQuality;
};
