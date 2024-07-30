import { transformSchedules } from '../app/utils/transformSchedule';

describe('new Date() 테스트', () => {
  test('자정 시각 생성', () => {
    const dateString = '2024-07-10T08:00:00.000Z';
    const date = new Date(dateString);
    const newDate = new Date(
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
    );

    const expectedDateString = '2024-07-10T00:00:00.000Z';
    const expectedDate = new Date(expectedDateString);

    expect(expectedDate).toEqual(newDate);
  });
});

describe('transformSchedules 함수 테스트', () => {
  test('이틀에 걸쳐 진행되는 일정 변환', () => {
    const schedules = [
      {
        id: 1,
        startTime: '2024-07-09T23:30:00.000Z',
        endTime: '2024-07-10T01:00:00.000Z',
      },
    ];
    const expectedSchedules = [
      {
        id: 1,
        startTime: '2024-07-09T23:30:00.000Z',
        endTime: '2024-07-10T00:00:00.000Z',
        isAllDay: false,
        isFirst: true,
        isStartDay: true,
        isEndDay: false,
      },
      {
        id: 1,
        startTime: '2024-07-10T00:00:00.000Z',
        endTime: '2024-07-10T01:00:00.000Z',
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
        startTime: '2024-07-09T01:30:00.000Z',
        endTime: '2024-07-10T23:00:00.000Z',
      },
    ];
    const expectedSchedules = [
      {
        id: 1,
        startTime: '2024-07-09T01:30:00.000Z',
        endTime: '2024-07-10T00:00:00.000Z',
        isAllDay: false,
        isFirst: true,
        isStartDay: true,
        isEndDay: false,
      },
      {
        id: 1,
        startTime: '2024-07-10T00:00:00.000Z',
        endTime: '2024-07-10T23:00:00.000Z',
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
        startTime: '2024-07-09T23:30:00.000Z',
        endTime: '2024-07-11T01:00:00.000Z',
      },
    ];
    const expectedSchedules = [
      {
        id: 1,
        startTime: '2024-07-09T23:30:00.000Z',
        endTime: '2024-07-10T00:00:00.000Z',
        isAllDay: false,
        isFirst: true,
        isStartDay: true,
        isEndDay: false,
      },
      {
        id: 1,
        startTime: '2024-07-10T00:00:00.000Z',
        endTime: '2024-07-11T00:00:00.000Z',
        isAllDay: true,
        isFirst: true,
        isStartDay: false,
        isEndDay: false,
      },
      {
        id: 1,
        startTime: '2024-07-11T00:00:00.000Z',
        endTime: '2024-07-11T01:00:00.000Z',
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
        startTime: '2024-07-09T05:30:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
      },
      {
        id: 2,
        startTime: '2024-07-09T03:30:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
      },
      {
        id: 3,
        startTime: '2024-07-09T08:31:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
      },
      {
        id: 4,
        startTime: '2024-07-09T08:30:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
      },
      {
        id: 5,
        startTime: '2024-07-09T23:50:00.000Z',
        endTime: '2024-07-09T23:55:00.000Z',
      },
      {
        id: 6,
        startTime: '2024-07-09T11:30:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
      },
      {
        id: 7,
        startTime: '2024-07-09T01:30:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
      },
    ];
    const expectedSchedules = [
      {
        id: 7,
        startTime: '2024-07-09T01:30:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: true,
      },
      {
        id: 2,
        startTime: '2024-07-09T03:30:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
      {
        id: 1,
        startTime: '2024-07-09T05:30:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
      {
        id: 4,
        startTime: '2024-07-09T08:30:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
      {
        id: 3,
        startTime: '2024-07-09T08:31:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
      {
        id: 6,
        startTime: '2024-07-09T11:30:00.000Z',
        endTime: '2024-07-09T23:00:00.000Z',
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
        isFirst: false,
      },
      {
        id: 5,
        startTime: '2024-07-09T23:50:00.000Z',
        endTime: '2024-07-09T23:55:00.000Z',
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
