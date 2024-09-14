export interface ScheduleState {
  id?: number;
  title: string;
  place: string;
  address: string;
  lat: number;
  lng: number;
  alarm: AlarmType;
  repeat: RepeatType;
  repeatCount: number;
  startTime: { date: string; time: { hh: string; mm: string } };
  endTime: { date: string; time: { hh: string; mm: string } };
  memo: string;
}

export interface AddScheduleData {
  title: string;
  place: string;
  address: string;
  lat: number;
  lng: number;
  alarm: AlarmType;
  repeat: RepeatType;
  repeatCount: number;
  startTime: string;
  endTime: string;
  memo: string;
}

export interface EditScheduleData extends AddScheduleData {
  id?: number;
  userId?: number;
  repeatIndex?: number;
  scheduleId?: number;
}

export interface ScheduleData {
  id: number;
  address: string;
  alarm: AlarmType;
  lat: number;
  lng: number;
  memo: string;
  place: string;
  repeat: RepeatType;
  repeatCount: number;
  repeatIndex: number;
  scheduleId: number;
  startTime: string;
  endTime: string;
  timeZone: string;
  title: string;
  userId: number;
}

export interface TransformedScheduleData extends ScheduleData {
  isFirst?: boolean;
  isAllDay?: boolean;
  isStartDay?: boolean;
  isEndDay?: boolean;
}

export type AlarmType = 'none' | '24h' | '10m' | '30m' | '1h';

export type RepeatType =
  | 'none'
  | 'daily'
  | 'weekly'
  | 'biweekly'
  | 'monthly'
  | 'yearly';

export interface RepeatList {
  key: RepeatType;
  content: '반복 안함' | '매일' | '매주' | '2주마다' | '매월' | '매년';
}

export interface AlarmListProps {
  key: AlarmType;
  content: '안함' | '하루 전' | '10분 전' | '30분 전' | '1시간 전';
}
