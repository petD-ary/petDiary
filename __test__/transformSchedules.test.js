import {
  transformSchedules,
  getMidnightByTimeZone,
} from '../app/utils/transformSchedule';

describe('new Date() 테스트', () => {
  test('자정 시각 생성', () => {
    const dateString = 'Jul 10 2024 01:30:00 GMT+0900';
    const expectedDateString = 'Jul 11 2024 00:00:00 GMT+0900';
    const timeZone = 'Asia/Seoul';
    const timezoneAdjustedMidnight = getMidnightByTimeZone(
      dateString,
      timeZone,
    );

    // 예상 날짜를 설정합니다.
    const expectedDate = new Date(expectedDateString);

    // 두 날짜를 비교합니다.
    expect(timezoneAdjustedMidnight).toStrictEqual(expectedDate);
  });
});

describe('transformSchedules 함수 테스트', () => {
  test('이틀에 걸쳐 진행되는 일정 변환', () => {
    const schedules = [
      {
        id: 1,
        startTime: '2024-07-09T23:30:00.000+09:00',
        endTime: '2024-07-10T01:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
      },
    ];
    const expectedSchedules = [
      {
        id: 1,
        startTime: '2024-07-09T23:30:00.000+09:00',
        endTime: '2024-07-10T00:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isAllDay: false,
        isFirst: true,
        isStartDay: true,
        isEndDay: false,
      },
      {
        id: 1,
        startTime: '2024-07-10T00:00:00.000+09:00',
        endTime: '2024-07-10T01:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isAllDay: false,
        isFirst: true,
        isStartDay: false,
        isEndDay: true,
      },
    ];
    const returnSchedules = transformSchedules(schedules);
    expect(expectedSchedules).toEqual(returnSchedules);
  });

  test('이틀에 걸쳐 진행되는 일정 변환2', () => {
    const schedules = [
      {
        id: 1,
        startTime: '2024-07-09T01:30:00.000+09:00',
        endTime: '2024-07-10T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
      },
    ];
    const expectedSchedules = [
      {
        id: 1,
        startTime: '2024-07-09T01:30:00.000+09:00',
        endTime: '2024-07-10T00:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isAllDay: false,
        isFirst: true,
        isStartDay: true,
        isEndDay: false,
      },
      {
        id: 1,
        startTime: '2024-07-10T00:00:00.000+09:00',
        endTime: '2024-07-10T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isAllDay: false,
        isFirst: true,
        isStartDay: false,
        isEndDay: true,
      },
    ];
    const returnSchedules = transformSchedules(schedules);
    expect(expectedSchedules).toEqual(returnSchedules);
  });

  test('3일에 걸쳐 진행되는 일정 변환', () => {
    const schedules = [
      {
        id: 1,
        startTime: '2024-07-09T23:30:00.000+09:00',
        endTime: '2024-07-11T01:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
      },
    ];
    const expectedSchedules = [
      {
        id: 1,
        startTime: '2024-07-09T23:30:00.000+09:00',
        endTime: '2024-07-10T00:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isAllDay: false,
        isFirst: true,
        isStartDay: true,
        isEndDay: false,
      },
      {
        id: 1,
        startTime: '2024-07-10T00:00:00.000+09:00',
        endTime: '2024-07-11T00:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isAllDay: true,
        isFirst: true,
        isStartDay: false,
        isEndDay: false,
      },
      {
        id: 1,
        startTime: '2024-07-11T00:00:00.000+09:00',
        endTime: '2024-07-11T01:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isAllDay: false,
        isFirst: true,
        isStartDay: false,
        isEndDay: true,
      },
    ];
    const returnSchedules = transformSchedules(schedules);
    expect(expectedSchedules).toEqual(returnSchedules);
  });

  test('isFirst 계산 및 정렬 확인', () => {
    const schedules = [
      {
        id: 1,
        startTime: '2024-07-09T05:30:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
      },
      {
        id: 2,
        startTime: '2024-07-09T03:30:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
      },
      {
        id: 3,
        startTime: '2024-07-09T08:31:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
      },
      {
        id: 4,
        startTime: '2024-07-09T08:30:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
      },
      {
        id: 5,
        startTime: '2024-07-09T23:50:00.000+09:00',
        endTime: '2024-07-09T23:55:00.000+09:00',
        timeZone: 'Asia/Seoul',
      },
      {
        id: 6,
        startTime: '2024-07-09T11:30:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
      },
      {
        id: 7,
        startTime: '2024-07-09T01:30:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
      },
    ];
    const expectedSchedules = [
      {
        id: 7,
        startTime: '2024-07-09T01:30:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: true,
      },
      {
        id: 2,
        startTime: '2024-07-09T03:30:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
      {
        id: 1,
        startTime: '2024-07-09T05:30:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
      {
        id: 4,
        startTime: '2024-07-09T08:30:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
      {
        id: 3,
        startTime: '2024-07-09T08:31:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
      {
        id: 6,
        startTime: '2024-07-09T11:30:00.000+09:00',
        endTime: '2024-07-09T23:00:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
      {
        id: 5,
        startTime: '2024-07-09T23:50:00.000+09:00',
        endTime: '2024-07-09T23:55:00.000+09:00',
        timeZone: 'Asia/Seoul',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
    ];
    const returnSchedules = transformSchedules(schedules);
    expect(expectedSchedules).toEqual(returnSchedules);
  });
});
