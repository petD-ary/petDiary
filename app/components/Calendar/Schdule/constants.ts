import { RepeatList } from './type';

export const SCHEDULE_TYPE = {
  TITLE: 'title',
  ADDRESS: 'address',
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
