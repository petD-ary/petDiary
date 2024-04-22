import { Key } from 'react';

export interface ScheduleState {
  title: string;
  address: string;
  lat: number;
  lng: number;
  alarm: string;
  repeat: 'none' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'yearly';
  repeatCount: number;
  startTime: { date: string; time: { hh: string; mm: string } };
  endTime: { date: string; time: { hh: string; mm: string } };
  memo: string;
}

export interface RepeatList {
  key: 'none' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'yearly';
  content: '반복 안함' | '매일' | '매주' | '2주마다' | '매월' | '매년';
}
