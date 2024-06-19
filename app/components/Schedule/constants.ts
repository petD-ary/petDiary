import { AlarmListProps, RepeatList } from './type';

export const SCHEDULE_TYPE = {
  TITLE: 'title',
  PLACE: 'place',
  LAT: 'lat',
  LNG: 'lng',
  ALARM: 'alarm',
  REPEAT: 'repeat',
  REPEAT_COUNT: 'repeatCount',
  START_TIME: 'startTime',
  END_TIME: 'endTime',
  MEMO: 'memo',
};

export const repeatList: RepeatList[] = [
  { key: 'none', content: '반복 안함' },
  { key: 'daily', content: '매일' },
  { key: 'weekly', content: '매주' },
  { key: 'biweekly', content: '2주마다' },
  { key: 'monthly', content: '매월' },
  { key: 'yearly', content: '매년' },
];

export const alarmList: AlarmListProps[] = [
  { key: 'none', content: '안함' },
  { key: '24h', content: '하루 전' },
  { key: '10m', content: '10분 전' },
  { key: '30m', content: '30분 전' },
  { key: '1h', content: '1시간 전' },
];
